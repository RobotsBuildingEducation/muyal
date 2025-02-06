import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  VStack,
  Text,
  Spinner,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  HStack,
  extendTheme,
  useStyleConfig,
  useToast,
} from "@chakra-ui/react";
import { SunsetCanvas } from "../../elements/SunsetCanvas";

import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";
import { translation } from "../../utility/translation";
import { transcript, videoTranscript } from "../../utility/transcript";
import ReactConfetti from "react-confetti";
import { useSharedNostr } from "../../hooks/useNOSTR";

const AwardModal = ({ isOpen, onClose, step, userLanguage, isCorrect }) => {
  const [badges, setBadges] = useState([]);
  const [areBadgesLoading, setAreBadgesLoading] = useState(true);
  const { getUserBadges } = useSharedNostr(
    localStorage.getItem("local_npub"),
    localStorage.getItem("local_nsec")
  );
  const toast = useToast();
  useEffect(() => {
    async function getBadges() {
      let data = await getUserBadges();
      setBadges(data);
      setAreBadgesLoading(false);
    }

    if (step.isConversationReview && isCorrect) getBadges();
  }, [step, isCorrect]);

  const handleCopyKeys = () => {
    const keys = localStorage.getItem("local_nsec"); // replace with actual keys
    navigator.clipboard.writeText(keys);
    toast({
      title: translation[userLanguage]["toast.title.keysCopied"],
      description: translation[userLanguage]["toast.description.keysCopied"],
      status: "info",
      duration: 1500,
      isClosable: true,
      position: "top",
      render: () => (
        <Box
          color="black"
          p={3}
          bg="#FEEBC8" // Custom background color here!
          borderRadius="md"
          boxShadow="lg"
        >
          <Text fontWeight="bold">
            {translation[userLanguage]["toast.title.keysCopied"]}
          </Text>
          <Text>
            {translation[userLanguage]["toast.description.keysCopied"]}
          </Text>
        </Box>
      ),
    });
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="4xl"
      scrollBehavior={"inside"}
    >
      <ModalOverlay></ModalOverlay>
      <ModalContent
        background={"orange.400"}
        // color="white"
        borderRadius="lg"
        boxShadow="2xl"
        p={0}
        width="100%"

        // style={{ fontFamily: "Roboto Serif, serif" }}
      >
        <ModalHeader
          fontSize="3xl"
          fontWeight="bold"
          marginTop={0}
          paddingTop={0}
          padding={3}
        >
          <HStack>
            <div style={{ color: "white" }}>
              {/* {translation[userLanguage]["modal.learn.title"]} */}
              {translation[userLanguage]["modal.title.decentralizedTranscript"]}
            </div>
          </HStack>
        </ModalHeader>

        <ModalBody p={8} style={{ width: "100%", color: "white" }}>
          <ReactConfetti
            // gravity={0.75}
            numberOfPieces={100}
            recycle={false}
            colors={["#f2dcfa", "#f9d4fa", "#fca4b3", "#fcb7a4", "#fcd4a4"]} // Array of colors matching the logo
          />
          {translation[userLanguage]["modal.decentralizedTranscript.youEarned"]}
          <br />
          <Text fontSize={"large"} fontWeight={"bold"} mb={2}>
            {translation[userLanguage][transcript[step.group]?.name]}
          </Text>
          <a
            target="_blank"
            href={`https://badges.page/a/${
              transcript[step.group]?.["address"] || ""
            }`}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                window.open(
                  `https://badges.page/a/${
                    transcript[step.group]?.["address"] || ""
                  }`
                );
              }
            }}
          >
            <img
              src={transcript[step.group]?.["imgSrc"]}
              width={150}
              style={{
                borderRadius: "33%",
                boxShadow: "0px 1px 1px 2px black",
              }}
            />
          </a>
          <br />
          <br />
          <Button
            onMouseDown={handleCopyKeys}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleCopyKeys();
              }
            }}
            mb={2}
          >
            🔑 {translation[userLanguage]["button.copyKey"]}
          </Button>

          <div>
            {
              translation[userLanguage][
                "modal.decentralizedTranscript.awareness"
              ]
            }{" "}
            <a
              target="_blank"
              href="https://embedded-rox.app"
              style={{ textDecoration: "underline", fontWeight: "bold" }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  window.open("https://embedded-rox.app");
                }
              }}
            >
              {translation[userLanguage][
                "settings.button.yourTutor"
              ].toLowerCase()}
            </a>
          </div>

          <br />
          <br />
          <b>
            {
              translation[userLanguage][
                "modal.decentralizedTranscript.awardsEarned"
              ]
            }
          </b>
          {areBadgesLoading ? (
            <div style={{ width: "fit-content" }}>
              <SunsetCanvas /> {translation[userLanguage]["loading"]}
            </div>
          ) : badges.length < 1 ? (
            <div>{translation[userLanguage]["noTranscriptFound"]}</div>
          ) : (
            <Box
              display="flex"
              m={2}
              width="fit-content"
              flexWrap="wrap"
              height="min-content"
            >
              {badges.map((badge) => (
                <div
                  style={{
                    margin: 6,

                    width: "250px",
                    height: "100px",
                    display: "flex",
                  }}
                >
                  <a
                    href={`https://badges.page/a/${(() => {
                      const badgeName = badge.badgeAddress.split(":")[2];

                      const matchingTranscript = Object.values(transcript).find(
                        (entry) => {
                          console.log("entry.name", entry.name);
                          return entry.name.replace(/\s+/g, "-") === badgeName;
                        }
                      );

                      const matchingVideoTranscript = Object.values(
                        videoTranscript
                      ).find((entry) => {
                        console.log("entry.name", entry.name);
                        return entry.name.replace(/\s+/g, "-") === badgeName;
                      });

                      console.log(
                        "matchingTranscript",
                        matchingTranscript || matchingVideoTranscript
                      );
                      let result =
                        matchingTranscript?.address ||
                        matchingVideoTranscript?.address;
                      return result;
                    })()}`}
                    target="_blank"
                    onKeyDown={() => {
                      if (e.key === "Enter" || e.key === " ") {
                        window.open(
                          `https://badges.page/a/${(() => {
                            const badgeName = badge.badgeAddress.split(":")[2];

                            const matchingTranscript = Object.values(
                              transcript
                            ).find((entry) => {
                              console.log("entry.name", entry.name);
                              return (
                                entry.name.replace(/\s+/g, "-") === badgeName
                              );
                            });

                            const matchingVideoTranscript = Object.values(
                              videoTranscript
                            ).find((entry) => {
                              console.log("entry.name", entry.name);
                              return (
                                entry.name.replace(/\s+/g, "-") === badgeName
                              );
                            });

                            console.log(
                              "matchingTranscript",
                              matchingTranscript || matchingVideoTranscript
                            );
                            let result =
                              matchingTranscript?.address ||
                              matchingVideoTranscript?.address;
                            return result;
                          })()}`
                        );
                      }
                    }}
                  >
                    <img
                      src={badge.image}
                      width={100}
                      style={{
                        borderRadius: "33%",
                        boxShadow: "0px 1px 1px 2px black",
                        marginBottom: 4,
                      }}
                    />
                  </a>
                  <div style={{ padding: 6 }}>
                    <Text fontSize={"sm"}>
                      {translation[userLanguage][badge.name] || badge.name}
                    </Text>
                  </div>
                </div>
              ))}
            </Box>
          )}
        </ModalBody>
        <ModalFooter margin={0} padding={3}>
          <Button
            onMouseDown={onClose}
            variant="solid"
            size="lg"
            boxShadow={"0px 0.5px 0.5px 1px black"}
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
  );
};

export default AwardModal;
