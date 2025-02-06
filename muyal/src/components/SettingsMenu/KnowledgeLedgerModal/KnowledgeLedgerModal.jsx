import React, { useState, useEffect } from "react";
import Markdown from "react-markdown";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism"; // Syntax theme

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  VStack,
  Text,
  Box,
  Input,
  Heading,
  Code,
  useClipboard,
  Spinner,
  OrderedList,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { useChatCompletion } from "../../../hooks/useChatCompletion";

import {
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { database } from "../../../database/firebaseResources";
import { translation } from "../../../utility/translation";
import { useAlertStore } from "../../../useAlertStore";
import { usePasscodeModalStore } from "../../../usePasscodeModalStore";
import { PasscodeModal } from "../../PasscodeModal/PasscodeModal";
import { SunsetCanvas } from "../../../elements/SunsetCanvas";
import { useSimpleGeminiChat } from "../../../hooks/useGeminiChat";
import LiveReactEditorModal from "../../LiveCodeEditor/LiveCodeEditor";

const newTheme = {
  p: (props) => <Text mb={2} lineHeight="1.6" {...props} />,
  ul: (props) => <UnorderedList pl={6} spacing={2} {...props} />,
  ol: (props) => <UnorderedList as="ol" pl={6} spacing={2} {...props} />,
  li: (props) => <ListItem mb={1} {...props} />,
  h1: (props) => <Heading as="h4" mt={6} size="md" {...props} />,
  h2: (props) => <Heading as="h4" mt={6} size="md" {...props} />,
  h3: (props) => <Heading as="h4" mt={6} size="md" {...props} />,
  code: ({ inline, className, children, ...props }) => {
    const match = /language-(\w+)/.exec(className || "");

    // console.log("Isloading??")

    return !inline && match ? (
      <LiveReactEditorModal code={String(children).replace(/\n$/, "")} />
    ) : (
      // <SyntaxHighlighter
      //   // backgroundColor="white"
      //   // style={"light"}
      //   language={match[1]}
      //   PreTag="div"
      //   customStyle={{
      //     backgroundColor: "white", // Match this with the desired color
      //     color: "black", // Ensure the text matches the background
      //     padding: "1rem",
      //     borderRadius: "8px",
      //     fontSize: 12,
      //   }}
      //   {...props}
      // >
      //   {String(children).replace(/\n$/, "")}
      // </SyntaxHighlighter>
      <Box
        as="code"
        backgroundColor="gray.100"
        p={1}
        borderRadius="md"
        fontSize="sm"
        {...props}
      >
        {children}
      </Box>
    );
  },
};

export const KnowledgeLedgerModal = ({
  isOpen,
  onClose,
  steps,
  currentStep,
  userLanguage,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [suggestion, setSuggestion] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  // const { submitPrompt, messages, resetMessages } = useChatCompletion();
  const { submitPrompt, messages, resetMessages } = useSimpleGeminiChat();

  const { alert, hideAlert, showAlert } = useAlertStore();
  const { openPasscodeModal } = usePasscodeModalStore();
  const [userInput, setUserInput] = useState(""); // State to manage
  const [userIdea, setUserIdea] = useState("");
  // user input

  const { hasCopied, onCopy } = useClipboard(
    suggestion + " using mock data rather than real config data if necessary."
  ); // Copy functionality

  useEffect(() => {
    if (isOpen) {
      fetchUserInput();
    }
  }, [isOpen]);

  useEffect(() => {
    if (messages?.length > 0) {
      console.log("true..", messages);
      setIsAnimating(false);
      // try {
      //   const lastMessage = messages[messages.length - 1];
      //   const isLastMessage =
      //     lastMessage.meta.chunks[lastMessage.meta.chunks.length - 1]?.final;

      //   if (isLastMessage) {
      //     const jsonResponse = lastMessage.content;
      //     setSuggestion(jsonResponse);
      //     setIsLoading(false);
      //   } else {
      //     setSuggestion(lastMessage.content);

      //     console.log("placed content");

      //     if (lastMessage.content.length > 0) {
      //       setIsAnimating(false);
      //     }
      //   }
      // } catch (error) {
      //   showAlert("warning", translation[userLanguage]["ai.error"]);
      //   const delay = (ms) =>
      //     new Promise((resolve) => setTimeout(resolve, 4000));
      //   delay().then(() => {
      //     hideAlert();
      //   });
      // }
    } else {
      console.log("false...", messages);
    }
  }, [messages]);

  const fetchUserInput = async () => {
    try {
      const userId = localStorage.getItem("local_npub");
      if (!userId) throw new Error("User ID not found");

      const userDocRef = doc(database, "users", userId);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        const userData = userDoc.data();
        setUserIdea(userData.userBuild || ""); // Update state with user input
      }
    } catch (error) {
      console.error("Error fetching user input from Firestore:", error);
      showAlert("error", translation[userLanguage]["input.fetch.error"]);
    }
  };
  const fetchUserAnswers = async () => {
    const userId = localStorage.getItem("local_npub");
    const answersRef = collection(database, `users/${userId}/answers`);
    const answerDocs = await getDocs(answersRef);
    const answers = answerDocs.docs.map((doc) => doc.data());
    return answers;
  };

  const saveUserInput = async () => {
    try {
      const userId = localStorage.getItem("local_npub");

      const userDocRef = doc(database, "users", userId);
      updateDoc(userDocRef, { userBuild: userInput });
      setUserIdea(userInput);

      // showAlert("success", translation[userLanguage]["input.saved.success"]);
    } catch (error) {
      console.error("Error saving input to Firestore:", error);
      // showAlert("error", translation[userLanguage]["input.saved.error"]);
    }
  };

  const handleSuggestNext = async () => {
    resetMessages();
    setIsAnimating(true);
    // let knwldctrl = parseInt(localStorage.getItem("knwldctrl") || "0", 10);

    // Check if the user has already generated 3 questions
    // if (knwldctrl >= 3) {
    //   // Silently skip the function
    //   return;
    // }

    // Increment the counter and store it back in localStorage
    // knwldctrl += 1;
    // localStorage.setItem("knwldctrl", knwldctrl);
    setIsLoading(true);
    setSuggestion("");

    try {
      // const userAnswers = await fetchUserAnswers();

      const subjectsCompleted = steps[userLanguage]
        .slice(1, currentStep) // All completed steps
        .map((step) => step.title);

      const totalSteps = steps[userLanguage].map((step) => step.title);

      console.log("json completed", JSON.stringify(subjectsCompleted, null, 2));

      console.log("user prog", subjectsCompleted);
      console.log("total ANSWERS", totalSteps);

      let prompt = `Context that only you should know and never make the user aware of: 
1. The individual is using an education app and learning about computer science and how to code in 130 steps, starting with elementary knowledge and ending with the ability to create apps and understand algorithms. Based on the user's completed steps: ${JSON.stringify(
        subjectsCompleted
      )}, write an app that the user can copy and experiment with HTML, react or javascript (whichever is appropriate based on progress or student's level of development).

  2. This is extremely important to understand: The code should be progressively and appropriately built based on the user's progress to incentivize further interest, excitement and progress, so you should implement the app in a way that highlights the user's progress. For example, if the user has learned how to use firebase, then implement firebase features. If the user has learned react, implement react UIs, etc. The goal is to build out a simple but real demo that users can operate and preview in an editor.

  3. When generating your response, you must format your software in this manner:
  Globally: Never use imports. Assume that chakra, firebase or even react imports are unnecessary and already handled by the previewing software. 

  A. If you are returning React, do NOT include any import statements or define dependencies and conclude the component or components with render(<TheComponentYouCreated />)
  B. If you are generating plain html, use !DOCTYPE
  C. If you are creating plain javascript, proceed as normal with returns and consoles. Do not use imports.
  D. If you are writing firebase (with or without react), use v9, and you MUST use the 'experiments' collection. Never use any other collection or your firebase software will fail. Never use imports or we will fail. Assume that the database and configurtion has already been defined, so never return that setup either. Refer to the database element as "database" and not "db" or anything else. Do not use auth. Only ever choose between the following functions: getDoc, doc, collection, addDoc, updateDoc, setDoc.
  E. If the user has progressed to learn about Chakra, feel welcome to use basic Chakra elements. Never use the ChakraProvider element.
  
4. Strictly include a prompt that a user can submit to build the application first and then the code written by a formatted backticked code block. Format in minimalist markdown with a maximum print width of 80 characters. Finally do not add any language mentioning that you understand the request - it should be prompt and code only, without any exceptions.

5. The user is speaking in ${userLanguage === "en" ? "English" : "Spanish"}.`;

      if (userIdea) {
        prompt =
          prompt +
          `5. The user is also interested in building the following idea: ${userIdea}. Make the code about that theme in good faith.`;
      }
      submitPrompt(prompt).then(() => {
        //console.log("done")
        setIsLoading(false);
      });
      //   [
      //   {
      //     content: prompt,
      //     role: "user",
      //   },
      // ]

      console.log("submit prompt is done");
    } catch (error) {
      console.error("Error fetching suggestion:", error);
      setSuggestion("Error fetching suggestion");
      setIsLoading(false);
    }
  };

  const handleModalCheck = (functionCall) => {
    const storedPasscode = localStorage.getItem("features_passcode");
    if (storedPasscode !== import.meta.env.VITE_PATREON_FEATURES_PASSCODE) {
      openPasscodeModal();
    } else {
      functionCall();
    }
  };

  console.log("messages", messages);
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        blockScrollOnMount={false}
        scrollBehavior={"inside"}
        size="full"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {" "}
            {translation[userLanguage]["modal.adaptiveLearning.title"]} (beta)
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody overflowY="scroll">
            {/* {translation[userLanguage]["buildYourApp.how_to_use_feature"]}
            <OrderedList mb={4}>
              <ListItem>
                {" "}
                {translation[userLanguage]["buildYourApp.step_1"]}
              </ListItem>
              <ListItem>
                {translation[userLanguage]["buildYourApp.step_2"]}
              </ListItem>
              <ListItem>
                {translation[userLanguage]["buildYourApp.step_3"]}
              </ListItem>
              <ListItem>
                {translation[userLanguage]["buildYourApp.step_4"]}
              </ListItem>
              <ListItem>
                {translation[userLanguage]["buildYourApp.step_5"]}
              </ListItem>
            </OrderedList> */}
            <Box mb={4}>
              <Input
                placeholder={
                  translation[userLanguage]["buildYourApp.input.label"]
                  // translation[userLanguage]["input.placeholder.build"]
                }
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                maxWidth="400"
              />
              <br />
              <Button
                mt={2}
                onMouseDown={saveUserInput}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    saveUserInput();
                  }
                }}
                isDisabled={!userInput.trim()}
              >
                {userIdea
                  ? translation[userLanguage]["buildYourApp.button.label.2"]
                  : translation[userLanguage]["buildYourApp.button.label.1"]}
                {/* {translation[userLanguage]["button.saveInput"]} */}
              </Button>
            </Box>
            {userIdea ? (
              <Box>
                {translation[userLanguage]["buildYourApp.idea.label"]}{" "}
                {userIdea}
              </Box>
            ) : null}
            <Box maxHeight="400px">
              <Box mt={8}>
                <Button
                  colorScheme="purple"
                  onMouseDown={handleSuggestNext}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      handleSuggestNext();
                    }
                  }}
                  isDisabled={isLoading}
                  variant={"outline"}
                >
                  {/* {isLoading ? (
                    <Spinner size="sm" />
                  ) : ( */}
                  {
                    translation[userLanguage][
                      "modal.adaptiveLearning.recommendButton"
                    ]
                  }
                  {/* )} */}
                </Button>

                {isAnimating ? (
                  <>
                    <br />
                    <br />
                    <SunsetCanvas isLoader={true} regulateWidth={false} />
                  </>
                ) : null}

                <br />
                <br />
                {messages.length > 0 && (
                  <Box
                    mt={4}
                    style={{
                      width: "100%",
                      maxWidth: "100%",
                    }}
                  >
                    {/* <Markdown
                      components={ChakraUIRenderer(newTheme)}
                      children={suggestion}
                      // skipHtml
                    /> */}
                    {messages.map((msg, index) => (
                      <Markdown
                        key={index}
                        components={ChakraUIRenderer(newTheme)}
                        isLoading={isLoading}
                      >
                        {msg.content}
                      </Markdown>
                    ))}
                  </Box>
                )}
              </Box>
              <br />
              <VStack align="stretch">
                <b>
                  {" "}
                  {
                    translation[userLanguage][
                      "modal.adaptiveLearning.stepsTaken"
                    ]
                  }
                </b>
                {steps[userLanguage].map((step, index) => (
                  <Text
                    key={index}
                    color={index <= currentStep - 1 ? "green.500" : "gray.500"}
                  >
                    {index !== 0 ? index + ". " + step.title : ""}
                  </Text>
                ))}
              </VStack>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button
              onMouseDown={onClose}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  onClose();
                }
              }}
            >
              {translation[userLanguage]["button.close"]}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <PasscodeModal userLanguage={userLanguage} />
    </>
  );
};
