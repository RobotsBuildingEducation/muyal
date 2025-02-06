import { RiRobot2Fill } from "react-icons/ri";

export const getObjectsByGroup = (groupNumber, arrayOfObjects) => {
  return arrayOfObjects.filter((obj) => obj.group === groupNumber);
};

export const steps = {
  en: [
    {
      group: "introduction",
      title: "Introduction To Maya Language & History",
      isStudyGuide: true,
      description: "Prepare your learning journey.",
      question: {
        questionText: (
          <div>
            <p
              style={{
                marginBottom: 12,
              }}
            >
              {" "}
              One of the best predictors for student success is exposure to
              course material before studying it. You're encouraged to read
              about the fundamentals of Maya language and history before
              starting. We use the K'iche' Maya since it is commonly spoken in
              Guatemala. Take some time to go play with vocabulary using our
              <a
                href="https://chatgpt.com/g/g-67a354c685b88191b3a1e428a364c11f-muuyal"
                target="_blank"
                style={{
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "underline",
                }}
              >
                <RiRobot2Fill fontSize="12" borderBottom="2px solid black" />
                dictionary-guided custom GPT!
              </a>
            </p>

            <p style={{ marginBottom: 12 }}>
              <b>
                The theory with this platform is to encourage Latinos to learn
                for fun and to reflect on how one has less resistance to learn
                about their identity and culture while something like learning
                how to code (which we teach) usually invites more resistance
                because it's an economic decision. It doesn't have to be that
                way! You don't need time and energy as much as you need
                curiousity. Something to think about!
              </b>
            </p>

            <p style={{ marginBottom: 12 }}>
              Now did you know that education apps compete with video games and
              social media? The average user (so far) spends about 2 minutes
              here before being pulled back to other attention-pulling forms of
              media 😱!
            </p>
            <div style={{ marginBottom: 12 }}>
              <img src="https://res.cloudinary.com/dtkeyccga/image/upload/v1724208228/Screenshot_2024-08-20_at_7.43.28_PM_fioetr.png" />
            </div>
            <p style={{ marginBottom: 12 }}>
              An even harsher reality is that most who attempt to learn for 100
              days will drop off within the first 2 weeks. In a typical Tiktok
              video, most users will drop off in the first 20 seconds. And the
              truth is, you may drop off before the first 20 questions 😔!
            </p>

            <div
              style={{
                marginBottom: 12,
                textAlign: "center",
                width: "100%",

                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                style={{
                  marginBottom: 8,
                  textAlign: "center",
                  width: "60px",
                }}
                src="https://res.cloudinary.com/dtkeyccga/image/upload/v1737544415/character_stickers_4_miarcs.png"
              />
            </div>

            <p style={{ marginBottom: 8 }}>
              But perhaps being aware of this and making a conscience effort to
              resist certain temptations may keep you in the loop to find
              success with the program. What do you say? Are you up for the
              challenge?
            </p>
          </div>
        ),
      },
    },

    {
      group: "tutorial",
      title: "Maya Architecture",
      description:
        "Identify the signature architectural feature found in ancient Maya cities.",
      isMultipleChoice: true,
      question: {
        questionText:
          "Which architectural structure is most commonly associated with ancient Maya cities?",
        options: ["Step pyramids", "Castles", "Skyscrapers", "Domes"],
        answer: "Step pyramids",
      },
    },

    {
      group: "tutorial",
      title: "Maya Languages",
      description:
        "Select the languages that are part of the Maya language family.",
      isMultipleAnswerChoice: true,
      question: {
        questionText:
          "Which of the following languages belong to the Maya language family?",
        options: ["K'iche'", "Yucatec", "Q'eqchi'", "Navajo"],
        answer: ["K'iche'", "Yucatec", "Q'eqchi'"],
      },
    },

    {
      group: "tutorial",
      title: "Maya Creation Myth",
      description:
        "Name the famed Maya creation myth that blends myth and history.",
      isSingleLineText: true,
      question: {
        questionText:
          "What is the name of the Maya creation myth that serves as both a mythological and historical narrative?",
        placeholder: "Enter your answer here...",
        answer: "Popol Vuh",
      },
    },

    {
      group: "tutorial",
      title: "Order of Maya Calendar Development",
      description:
        "Arrange the steps in the development of the Maya calendar system in the correct historical order.",
      isSelectOrder: true,
      question: {
        questionText:
          "Arrange the following steps in the development of the Maya calendar system in the order they likely occurred:",
        options: [
          "Observation of celestial bodies",
          "Creation of the 260-day ritual calendar (Tzolk'in)",
          "Development of the 365-day solar calendar (Haab')",
          "Integration into the Long Count calendar system",
        ],
        answer: [
          "Observation of celestial bodies",
          "Creation of the 260-day ritual calendar (Tzolk'in)",
          "Development of the 365-day solar calendar (Haab')",
          "Integration into the Long Count calendar system",
        ],
      },
    },

    {
      group: "tutorial",
      title: "Maya Numerals",
      description: "Complete the statement about the Maya numeral system.",
      isCodeCompletion: true,
      question: {
        questionText:
          "Fill in the blank: In the Maya numeral system, the word for 'one' is ____.",
        options: ["jun", "hun", "ka", "ox"],
        answer: "jun",
        placeholder: "Enter the missing word...",
      },
    },

    {
      group: "tutorial",
      title: "Maya Hieroglyphs",
      description:
        "Discuss the cultural importance of Maya hieroglyphic writing.",
      isText: true,
      question: {
        questionText:
          "In your own words, explain the significance of Maya hieroglyphs in understanding their history and culture.",
      },
    },
    // Language & Writing Questions
    // Multiple Answer Choice
    {
      group: "1",
      title: "Mayan Dialects",
      description: "Identifying the languages within the Mayan family.",
      isMultipleAnswerChoice: true,
      question: {
        questionText: "Which of the following are Mayan languages?",
        options: ["K'iche'", "Yucatec", "Q'eqchi'", "Nahua"],
        answer: ["K'iche'", "Yucatec", "Q'eqchi'"],
      },
    },

    // Multiple Choice
    {
      group: "1",
      title: "Ancient Maya Writing",
      description: "Understanding the written tradition of the Maya.",
      isMultipleChoice: true,
      question: {
        questionText:
          "What is the name of the writing system used by the ancient Maya?",
        options: [
          "Mayan hieroglyphs",
          "Latin alphabet",
          "Cuneiform",
          "Mesoamerican pictographs",
        ],
        answer: "Mayan hieroglyphs",
      },
    },

    // Single Line Text
    {
      group: "1",
      title: "Prominent Mayan Language",
      description: "Identify a major Mayan language spoken in Guatemala.",
      isSingleLineText: true,
      question: {
        questionText:
          "Name one of the most widely spoken Mayan languages in Guatemala.",
        placeholder: "Enter the language name...",
        answer: "K'iche'",
      },
    },

    // Code Completion
    {
      group: "1",
      title: "Mayan Word Order",
      description:
        "Complete the statement regarding typical word order in Mayan languages.",
      isCodeCompletion: true,
      question: {
        questionText:
          "Fill in the blank: Many Mayan languages typically use a ____ word order.",
        options: ["SVO", "VSO", "SOV", "VOS"],
        answer: "VOS",
        placeholder: "Enter the correct word order...",
      },
    },

    // Open Ended Text
    {
      group: "1",
      title: "Importance of Maya Language Preservation",
      description: "Explain why preserving the Maya language is important.",
      isText: true,
      question: {
        questionText:
          "In your own words, explain why it is important to preserve and promote the Maya language in contemporary society.",
      },
    },

    // Select Order
    {
      group: "1",
      title: "Evolution of Maya Language",
      description:
        "Arrange the key phases in the evolution of the Maya language in chronological order.",
      isSelectOrder: true,
      question: {
        questionText:
          "Arrange the following phases in the evolution of the Maya language in chronological order:",
        options: [
          "Pre-Columbian indigenous language development",
          "Classic period language standardization",
          "Post-contact linguistic shifts",
          "Modern revival and preservation efforts",
        ],
        answer: [
          "Pre-Columbian indigenous language development",
          "Classic period language standardization",
          "Post-contact linguistic shifts",
          "Modern revival and preservation efforts",
        ],
      },
    },

    // Literature / Mythology
    {
      group: "2",
      title: "Maya Mythological Figures",
      description:
        "Select the deities and mythological figures central to Maya mythology.",
      isMultipleAnswerChoice: true,
      question: {
        questionText:
          "Which of the following figures are prominent in Maya mythology?",
        options: ["Itzamna", "Ixchel", "Kukulkan", "Zeus"],
        answer: ["Itzamna", "Ixchel", "Kukulkan"],
      },
    },

    // Multiple Choice
    {
      group: "2",
      title: "Famous Maya Creation Myth",
      description:
        "Identify the renowned creation myth that is foundational to Maya literature.",
      isMultipleChoice: true,
      question: {
        questionText:
          "Which text is considered the authentic Maya creation myth?",
        options: [
          "Popol Vuh",
          "Chilam Balam",
          "Maya Codex",
          "Mayan Chronicles",
        ],
        answer: "Popol Vuh",
      },
    },

    // Single Line Text
    {
      group: "2",
      title: "Underworld Name",
      description:
        "Name the mythological underworld featured in Maya mythology.",
      isSingleLineText: true,
      question: {
        questionText: "What is the name of the underworld in Maya mythology?",
        placeholder: "Enter the name...",
        answer: "Xibalba",
      },
    },

    // Code Completion
    {
      group: "2",
      title: "Maya Myth Structure",
      description:
        "Complete the line that reflects a traditional opening of a Maya myth.",
      isCodeCompletion: true,
      question: {
        questionText:
          "Fill in the blank: Maya myths often begin with the phrase 'In the beginning, ____.'",
        options: [
          "the world was dark",
          "there was nothing",
          "the gods spoke",
          "all was one",
        ],
        answer: "the gods spoke",
        placeholder: "Enter the missing phrase...",
      },
    },

    // Open Ended Text
    {
      group: "2",
      title: "Interpretation of Maya Myths",
      description: "Discuss the cultural significance of Maya mythology.",
      isText: true,
      question: {
        questionText:
          "In your own words, explain how Maya mythology influenced the daily life and beliefs of the Maya people.",
      },
    },

    // Select Order
    {
      group: "2",
      title: "Evolution of Maya Mythology",
      description:
        "Arrange the phases of Maya mythology development in the correct chronological order.",
      isSelectOrder: true,
      question: {
        questionText:
          "Arrange the following phases of Maya mythology in chronological order:",
        options: [
          "Oral traditions among early indigenous communities",
          "Creation of mythological narratives during the Preclassic period",
          "Standardization of myths during the Classic period",
          "Post-contact reinterpretations and modern revivals",
        ],
        answer: [
          "Oral traditions among early indigenous communities",
          "Creation of mythological narratives during the Preclassic period",
          "Standardization of myths during the Classic period",
          "Post-contact reinterpretations and modern revivals",
        ],
      },
    },

    // Codices and Writing Materials
    {
      group: "3",
      title: "Mayan Codices",
      description:
        "Identify the authentic surviving manuscripts from the Maya civilization.",
      isMultipleAnswerChoice: true,
      question: {
        questionText:
          "Which of the following are recognized as authentic surviving Mayan codices?",
        options: [
          "Dresden Codex",
          "Madrid Codex",
          "Paris Codex",
          "Grolier Codex",
        ],
        answer: ["Dresden Codex", "Madrid Codex", "Paris Codex"],
      },
    },

    // Multiple Choice
    {
      group: "3",
      title: "Writing Materials",
      description:
        "Select the primary material used by the Maya to create codices.",
      isMultipleChoice: true,
      question: {
        questionText:
          "What material did the ancient Maya primarily use for creating their codices?",
        options: ["Bark paper", "Papyrus", "Parchment", "Stone tablets"],
        answer: "Bark paper",
      },
    },

    // Single Line Text
    {
      group: "3",
      title: "Famous Codex Name",
      description: "Name one authentic surviving Maya codex.",
      isSingleLineText: true,
      question: {
        questionText:
          "Provide the name of one authentic Mayan codex that has survived to modern times.",
        placeholder: "Enter the codex name...",
        answer: "Dresden Codex",
      },
    },

    // Code Completion
    {
      group: "3",
      title: "Codex Title Completion",
      description: "Complete the statement with the appropriate codex name.",
      isCodeCompletion: true,
      question: {
        questionText:
          "Fill in the blank: The ______ Codex is renowned for its detailed astronomical tables.",
        options: ["Dresden", "Madrid", "Paris", "Grolier"],
        answer: "Dresden",
        placeholder: "Enter the missing codex name...",
      },
    },

    // Open Ended Text
    {
      group: "3",
      title: "Significance of Maya Codices",
      description:
        "Discuss the importance of codices in preserving Maya history.",
      isText: true,
      question: {
        questionText:
          "In your own words, explain why Maya codices are critical to our understanding of ancient Maya culture and history.",
      },
    },

    // Select Order
    {
      group: "3",
      title: "Process of Creating a Codex",
      description:
        "Arrange the steps involved in the creation of a Maya codex in their proper order.",
      isSelectOrder: true,
      question: {
        questionText:
          "Arrange the following steps in the process of creating a Maya codex in the correct order:",
        options: [
          "Gather natural materials and prepare bark",
          "Mix pigments and grind minerals",
          "Apply hieroglyphs and illustrations onto the bark",
          "Bind the pages together to form a codex",
        ],
        answer: [
          "Gather natural materials and prepare bark",
          "Mix pigments and grind minerals",
          "Apply hieroglyphs and illustrations onto the bark",
          "Bind the pages together to form a codex",
        ],
      },
    },

    // Mathematics & Numeral System
    {
      group: "4",
      title: "Mayan Numeral Symbols",
      description:
        "Select the symbols that are used in the Maya numeral system.",
      isMultipleAnswerChoice: true,
      question: {
        questionText:
          "Which of the following symbols are traditionally used in the Maya numeral system?",
        options: ["a dot", "a bar", "a shell", "a zigzag"],
        answer: ["a dot", "a bar", "a shell"],
      },
    },

    // Multiple Choice
    {
      group: "4",
      title: "Mayan Numeral Base",
      description: "Identify the numerical base employed by the ancient Maya.",
      isMultipleChoice: true,
      question: {
        questionText:
          "What numeral base did the Maya use in their counting system?",
        options: ["Base 10", "Base 20", "Base 12", "Base 60"],
        answer: "Base 20",
      },
    },

    // Single Line Text
    {
      group: "4",
      title: "Value of a Bar",
      description:
        "Determine the numerical value represented by a bar in the Maya numeral system.",
      isSingleLineText: true,
      question: {
        questionText:
          "In the Maya numeral system, what numerical value does a bar represent?",
        placeholder: "Enter the number...",
        answer: "5",
      },
    },

    // Code Completion
    {
      group: "4",
      title: "Maya Zero Representation",
      description:
        "Complete the statement regarding the representation of zero in the Maya numeral system.",
      isCodeCompletion: true,
      question: {
        questionText:
          "Fill in the blank: In the Maya numeral system, zero is represented by a ___.",
        options: ["dot", "bar", "shell", "circle"],
        answer: "shell",
        placeholder: "Enter the missing term...",
      },
    },

    // Open Ended Text
    {
      group: "4",
      title: "Impact of the Maya Numeral System",
      description:
        "Explain the historical and scientific significance of the Maya numeral system.",
      isText: true,
      question: {
        questionText:
          "In your own words, discuss how the Maya numeral system contributed to advancements in mathematics and astronomy.",
      },
    },

    // Select Order
    {
      group: "4",
      title: "Ordering Maya Numeral Developments",
      description:
        "Arrange the key developments in the evolution of the Maya numeral system in the correct historical order.",
      isSelectOrder: true,
      question: {
        questionText:
          "Arrange the following developments in the Maya numeral system in the order they occurred:",
        options: [
          "Development of the basic dot and bar symbols",
          "Introduction of the concept of zero",
          "Refinement into a vigesimal (base-20) system",
          "Integration of the numeral system into calendrical calculations",
        ],
        answer: [
          "Development of the basic dot and bar symbols",
          "Introduction of the concept of zero",
          "Refinement into a vigesimal (base-20) system",
          "Integration of the numeral system into calendrical calculations",
        ],
      },
    },

    // Calendar & Astronomy
    {
      group: "5",
      title: "Components of the Maya Calendar",
      description:
        "Select all elements that are integral parts of the Maya calendrical system.",
      isMultipleAnswerChoice: true,
      question: {
        questionText:
          "Which of the following are components of the Maya calendrical system?",
        options: ["Tzolk'in", "Haab'", "Long Count", "Lunar Phases"],
        answer: ["Tzolk'in", "Haab'", "Long Count"],
      },
    },

    // Multiple Choice
    {
      group: "5",
      title: "Identifying the Ritual Calendar",
      description:
        "Select the calendar that was used by the Maya for ritual and divinatory purposes.",
      isMultipleChoice: true,
      question: {
        questionText:
          "Which calendar was primarily used by the Maya for ritual and divination?",
        options: ["Tzolk'in", "Haab'", "Long Count", "Solar Calendar"],
        answer: "Tzolk'in",
      },
    },

    // Single Line Text
    {
      group: "5",
      title: "Maya Solar Calendar",
      description: "Name the 365-day solar calendar used by the Maya.",
      isSingleLineText: true,
      question: {
        questionText:
          "What is the name of the 365-day solar calendar used by the Maya?",
        placeholder: "Enter the calendar name...",
        answer: "Haab'",
      },
    },

    // Code Completion
    {
      group: "5",
      title: "Maya Long Count Calendar",
      description:
        "Complete the statement regarding the function of the Maya Long Count calendar.",
      isCodeCompletion: true,
      question: {
        questionText:
          "Fill in the blank: The Maya Long Count calendar was developed to record ______ periods of time.",
        options: ["short", "extended", "cyclical", "long"],
        answer: "long",
        placeholder: "Enter the missing word...",
      },
    },

    // Open Ended Text
    {
      group: "5",
      title: "Significance of the Maya Calendar",
      description:
        "Explain the cultural and practical importance of the Maya calendar system.",
      isText: true,
      question: {
        questionText:
          "In your own words, describe why the Maya calendar system was central to Maya culture and daily life.",
      },
    },

    // Select Order
    {
      group: "5",
      title: "Chronology of Maya Calendar Developments",
      description:
        "Arrange the milestones in the development of the Maya calendar system in the correct historical order.",
      isSelectOrder: true,
      question: {
        questionText:
          "Arrange the following milestones in the evolution of the Maya calendar system in chronological order:",
        options: [
          "Creation of the Tzolk'in (260-day ritual calendar)",
          "Development of the Haab' (365-day solar calendar)",
          "Integration of both calendars into the Long Count system",
          "Refinement of calendrical calculations for agricultural cycles",
        ],
        answer: [
          "Creation of the Tzolk'in (260-day ritual calendar)",
          "Development of the Haab' (365-day solar calendar)",
          "Integration of both calendars into the Long Count system",
          "Refinement of calendrical calculations for agricultural cycles",
        ],
      },
    },

    {
      group: "6",
      title: "Mayan Astronomical Observations",
      description:
        "Select the astronomical phenomena that the ancient Maya recorded.",
      isMultipleAnswerChoice: true,
      question: {
        questionText:
          "Which of the following astronomical phenomena were observed and recorded by the Maya?",
        options: [
          "Solar eclipses",
          "Lunar eclipses",
          "Meteor showers",
          "Venus cycle",
        ],
        answer: ["Solar eclipses", "Lunar eclipses", "Venus cycle"],
      },
    },

    // Multiple Choice
    {
      group: "6",
      title: "Focus on Venus",
      description:
        "Identify the planet that played a critical role in Mayan astronomy.",
      isMultipleChoice: true,
      question: {
        questionText:
          "Which planet was most significant in the astronomical observations of the Maya?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        answer: "Venus",
      },
    },

    // Single Line Text
    {
      group: "6",
      title: "Venus Cycle Duration",
      description:
        "Determine the duration of the Venus cycle as recorded in Mayan astronomy.",
      isSingleLineText: true,
      question: {
        questionText:
          "Approximately how many days is the Venus cycle in Maya astronomical records?",
        placeholder: "Enter the number of days...",
        answer: "584",
      },
    },

    // Code Completion
    {
      group: "6",
      title: "Significance of Venus",
      description:
        "Complete the statement about the cultural role of Venus in Maya society.",
      isCodeCompletion: true,
      question: {
        questionText:
          "Fill in the blank: The Maya meticulously tracked Venus because they believed it signified ______.",
        options: ["peace", "war", "fertility", "harvest"],
        answer: "war",
        placeholder: "Enter the missing concept...",
      },
    },

    // Open Ended Text
    {
      group: "6",
      title: "Impact of Maya Astronomy",
      description:
        "Explain the cultural and ritual significance of astronomy in Maya society.",
      isText: true,
      question: {
        questionText:
          "In your own words, describe how astronomical observations influenced Maya culture and ritual practices.",
      },
    },

    // Select Order
    {
      group: "6",
      title: "Recording Astronomical Events",
      description:
        "Arrange the steps in the process the Maya used to record astronomical events.",
      isSelectOrder: true,
      question: {
        questionText:
          "Arrange the following steps in the order the Maya used to record astronomical events:",
        options: [
          "Observation of celestial bodies",
          "Recording planetary positions",
          "Correlation with calendrical data",
          "Integration into ritual practices",
        ],
        answer: [
          "Observation of celestial bodies",
          "Recording planetary positions",
          "Correlation with calendrical data",
          "Integration into ritual practices",
        ],
      },
    },

    // Economy & Trade
    // Multiple Answer Choice
    {
      group: "7",
      title: "Maya Trade Goods",
      description:
        "Select the items that were commonly used as currency or trade goods in Maya society.",
      isMultipleAnswerChoice: true,
      question: {
        questionText:
          "Which of the following items were used as trade goods by the Maya?",
        options: ["cacao beans", "jade", "obsidian", "silver coins"],
        answer: ["cacao beans", "jade", "obsidian"],
      },
    },

    // Multiple Choice
    {
      group: "7",
      title: "Staple Crop",
      description:
        "Identify the staple crop that was central to Maya agriculture and the economy.",
      isMultipleChoice: true,
      question: {
        questionText:
          "Which crop was a fundamental component of the Maya economy?",
        options: ["Maize", "Wheat", "Rice", "Barley"],
        answer: "Maize",
      },
    },

    // Single Line Text
    {
      group: "7",
      title: "Important Commodity",
      description:
        "Name one commodity that was vital for trade in ancient Maya society.",
      isSingleLineText: true,
      question: {
        questionText:
          "Provide the name of a commodity that played a significant role in Maya trade.",
        placeholder: "Enter the commodity name...",
        answer: "jade",
      },
    },

    // Code Completion
    {
      group: "7",
      title: "Economic Exchange Phrase",
      description:
        "Complete the statement about Maya economic exchange practices.",
      isCodeCompletion: true,
      question: {
        questionText:
          "Fill in the blank: The Maya used a system of barter and ____ to facilitate trade.",
        options: ["currency", "exchange", "commerce", "trade"],
        answer: "exchange",
        placeholder: "Enter the missing word...",
      },
    },

    // Open Ended Text
    {
      group: "7",
      title: "Role of Trade in Maya Society",
      description:
        "Discuss how trade influenced the economic and cultural development of the Maya.",
      isText: true,
      question: {
        questionText:
          "In your own words, explain the significance of trade and commerce in shaping Maya society.",
      },
    },

    // Select Order
    {
      group: "7",
      title: "Evolution of Maya Trade Networks",
      description:
        "Arrange the key developments in Maya trade networks in the correct historical order.",
      isSelectOrder: true,
      question: {
        questionText:
          "Arrange the following milestones in the evolution of Maya trade networks in chronological order:",
        options: [
          "Local barter among neighboring communities",
          "Development of long-distance trade routes",
          "Integration of maritime trade routes",
          "Establishment of specialized marketplaces",
        ],
        answer: [
          "Local barter among neighboring communities",
          "Development of long-distance trade routes",
          "Integration of maritime trade routes",
          "Establishment of specialized marketplaces",
        ],
      },
    },

    {
      group: "8",
      title: "Prominent Maya City-States",
      description:
        "Select the Maya city-states that were centers of political power.",
      isMultipleAnswerChoice: true,
      question: {
        questionText: "Which of the following were prominent Maya city-states?",
        options: ["Tikal", "Palenque", "Chichén Itzá", "Teotihuacan"],
        answer: ["Tikal", "Palenque", "Chichén Itzá"],
      },
    },

    // Multiple Choice
    {
      group: "8",
      title: "Maya Ruler Title",
      description: "Identify the title given to rulers of Maya city-states.",
      isMultipleChoice: true,
      question: {
        questionText:
          "What title was commonly used for a ruler in Maya city-states?",
        options: ["Ajaw", "K'uhul Ajaw", "Batab", "Sajal"],
        answer: "Ajaw",
      },
    },

    // Single Line Text
    {
      group: "8",
      title: "Notable Maya Ruler",
      description: "Name a prominent ruler from a Maya city-state.",
      isSingleLineText: true,
      question: {
        questionText:
          "Who is a well-known ruler from the Maya civilization (for example, of Palenque or Tikal)?",
        placeholder: "Enter the ruler's name...",
        answer: "Pakal the Great",
      },
    },

    // Code Completion
    {
      group: "8",
      title: "Maya Leadership Structure",
      description:
        "Complete the statement regarding the political structure of Maya city-states.",
      isCodeCompletion: true,
      question: {
        questionText:
          "Fill in the blank: In Maya society, the leader of a city-state was known as the ______.",
        options: ["Ajaw", "Batab", "K'uhul Ajaw", "Sajal"],
        answer: "Ajaw",
        placeholder: "Enter the missing title...",
      },
    },

    // Open Ended Text
    {
      group: "8",
      title: "Organization of Maya City-States",
      description:
        "Discuss the political organization and leadership of Maya city-states.",
      isText: true,
      question: {
        questionText:
          "In your own words, explain how Maya city-states were organized politically and the role their rulers played in governance.",
      },
    },

    // Select Order
    {
      group: "8",
      title: "Chronology of Maya Political Developments",
      description:
        "Arrange the following events in the evolution of Maya political organization.",
      isSelectOrder: true,
      question: {
        questionText:
          "Arrange these milestones in the political evolution of the Maya civilization in chronological order:",
        options: [
          "Emergence of independent city-states",
          "Development of hierarchical leadership",
          "Formation of alliances between city-states",
          "Decline due to internal strife and competition",
        ],
        answer: [
          "Emergence of independent city-states",
          "Development of hierarchical leadership",
          "Formation of alliances between city-states",
          "Decline due to internal strife and competition",
        ],
      },
    },
    // Multiple Answer Choice
    {
      group: "9",
      title: "Maya Social Customs",
      description:
        "Select the customs that played an important role in Maya social life.",
      isMultipleAnswerChoice: true,
      question: {
        questionText:
          "Which of the following were important social customs among the Maya?",
        options: [
          "Reciprocity",
          "Hospitality",
          "Individualism",
          "Community rituals",
        ],
        answer: ["Reciprocity", "Hospitality", "Community rituals"],
      },
    },

    // Multiple Choice
    {
      group: "9",
      title: "Maya Social Structure",
      description:
        "Identify the characteristic social structure of Maya society.",
      isMultipleChoice: true,
      question: {
        questionText:
          "Which term best describes the social organization of the ancient Maya?",
        options: ["Egalitarian", "Hierarchical", "Nomadic", "Tribal"],
        answer: "Hierarchical",
      },
    },

    // Single Line Text
    {
      group: "9",
      title: "Core Social Value",
      description: "Name a core value that was central to Maya community life.",
      isSingleLineText: true,
      question: {
        questionText: "What is one fundamental social value in Maya culture?",
        placeholder: "Enter a social value...",
        answer: "Reciprocity",
      },
    },

    // Code Completion
    {
      group: "9",
      title: "Social Cohesion Statement",
      description:
        "Complete the statement regarding how social cohesion was maintained in Maya society.",
      isCodeCompletion: true,
      question: {
        questionText:
          "Fill in the blank: In Maya society, strong community bonds were maintained through ______.",
        options: ["rituals", "trade", "reciprocity", "governance"],
        answer: "reciprocity",
        placeholder: "Enter the missing term...",
      },
    },

    // Open Ended Text
    {
      group: "9",
      title: "Impact of Social Practices",
      description: "Discuss the role of social practices in Maya daily life.",
      isText: true,
      question: {
        questionText:
          "In your own words, explain how practices like communal labor and reciprocal exchange influenced everyday life in Maya communities.",
      },
    },

    // Select Order
    {
      group: "9",
      title: "Evolution of Maya Social Institutions",
      description:
        "Arrange the key developments in Maya social organization in the order they emerged.",
      isSelectOrder: true,
      question: {
        questionText:
          "Arrange the following milestones in the evolution of Maya social institutions in chronological order:",
        options: [
          "Establishment of kinship groups",
          "Development of communal labor systems",
          "Formation of trade guilds",
          "Creation of ceremonial rituals",
        ],
        answer: [
          "Establishment of kinship groups",
          "Development of communal labor systems",
          "Formation of trade guilds",
          "Creation of ceremonial rituals",
        ],
      },
    },
    // Art & Religious
    // Multiple Answer Choice
    {
      group: "10",
      title: "Maya Art Materials",
      description:
        "Select the materials that were commonly used in creating Maya art.",
      isMultipleAnswerChoice: true,
      question: {
        questionText:
          "Which of the following materials were frequently used by Maya artists?",
        options: ["Jade", "Obsidian", "Turquoise", "Marble"],
        answer: ["Jade", "Obsidian", "Turquoise"],
      },
    },

    // Multiple Choice
    {
      group: "10",
      title: "Iconography in Maya Art",
      description:
        "Identify the symbol most strongly associated with Maya artistic expression.",
      isMultipleChoice: true,
      question: {
        questionText:
          "Which symbol is most emblematic in Maya art and iconography?",
        options: ["Jaguar", "Serpent", "Eagle", "Fish"],
        answer: "Jaguar",
      },
    },

    // Single Line Text
    {
      group: "10",
      title: "Famous Maya Artwork",
      description:
        "Name a renowned example of Maya art or a well-known monument.",
      isSingleLineText: true,
      question: {
        questionText:
          "Provide the name of a famous piece of Maya art or monumental sculpture.",
        placeholder: "Enter the artwork name...",
        answer: "Stela 31", // Example answer; this can be adjusted as needed.
      },
    },

    // Code Completion
    {
      group: "10",
      title: "Artistic Techniques",
      description:
        "Complete the statement about a common artistic technique used by Maya artists.",
      isCodeCompletion: true,
      question: {
        questionText:
          "Fill in the blank: Maya artists often used ______ to create vivid color contrasts in their murals.",
        options: ["natural pigments", "oil paints", "watercolors", "acrylics"],
        answer: "natural pigments",
        placeholder: "Enter the missing term...",
      },
    },

    // Open Ended Text
    {
      group: "10",
      title: "Cultural Significance of Maya Art",
      description:
        "Discuss the impact of Maya art on the cultural identity of the civilization.",
      isText: true,
      question: {
        questionText:
          "In your own words, explain how Maya art reflects the culture, religion, and social structure of the Maya civilization.",
      },
    },

    // Select Order
    {
      group: "10",
      title: "Evolution of Maya Artistic Styles",
      description:
        "Arrange the stages in the evolution of Maya art in their correct historical order.",
      isSelectOrder: true,
      question: {
        questionText:
          "Arrange the following stages of Maya artistic development in chronological order:",
        options: [
          "Preclassic symbolic art",
          "Classic period muralism",
          "Postclassic iconographic shifts",
          "Modern interpretations",
        ],
        answer: [
          "Preclassic symbolic art",
          "Classic period muralism",
          "Postclassic iconographic shifts",
          "Modern interpretations",
        ],
      },
    },
    // Multiple Answer Choice
    {
      group: "11",
      title: "Maya Ritual Practices",
      description:
        "Select the practices that were integral to Maya religious ceremonies.",
      isMultipleAnswerChoice: true,
      question: {
        questionText:
          "Which of the following practices were central to Maya religious rituals?",
        options: [
          "Bloodletting",
          "Human sacrifice",
          "Ritual ballgame",
          "Feasting",
        ],
        answer: ["Bloodletting", "Human sacrifice", "Ritual ballgame"],
      },
    },

    // Multiple Choice
    {
      group: "11",
      title: "Sacred Maya Site",
      description:
        "Identify a natural feature that was considered sacred in Maya religion.",
      isMultipleChoice: true,
      question: {
        questionText:
          "Which natural feature was often regarded as sacred in Maya religious tradition?",
        options: ["Cenote", "Volcano", "Desert", "Plain"],
        answer: "Cenote",
      },
    },

    // Single Line Text
    {
      group: "11",
      title: "Maya Deity",
      description: "Name a prominent deity worshipped in Maya religion.",
      isSingleLineText: true,
      question: {
        questionText:
          "Provide the name of one major deity from the Maya pantheon.",
        placeholder: "Enter deity name...",
        answer: "Ixchel",
      },
    },

    // Code Completion
    {
      group: "11",
      title: "Ritual Activity Completion",
      description:
        "Complete the statement about a common ritual activity in Maya ceremonies.",
      isCodeCompletion: true,
      question: {
        questionText:
          "Fill in the blank: During Maya rituals, participants often practiced ______ as an act of bloodletting.",
        options: ["self-sacrifice", "chanting", "dancing", "offering gifts"],
        answer: "self-sacrifice",
        placeholder: "Enter the missing term...",
      },
    },

    // Open Ended Text
    {
      group: "11",
      title: "Significance of Maya Religion",
      description: "Explain the impact of religious beliefs on Maya society.",
      isText: true,
      question: {
        questionText:
          "In your own words, explain how Maya religious practices and beliefs influenced their daily life and social organization.",
      },
    },

    // Select Order
    {
      group: "11",
      title: "Sequence of a Maya Religious Ceremony",
      description:
        "Arrange the steps of a typical Maya religious ceremony in the correct order.",
      isSelectOrder: true,
      question: {
        questionText:
          "Arrange the following steps in the order they typically occurred during a Maya religious ceremony:",
        options: [
          "Preparation and purification",
          "Invocation of deities",
          "Performance of ritual acts (e.g., bloodletting)",
          "Offering and communal feast",
        ],
        answer: [
          "Preparation and purification",
          "Invocation of deities",
          "Performance of ritual acts (e.g., bloodletting)",
          "Offering and communal feast",
        ],
      },
    },

    {
      group: "12",
      title: "Contributing Factors to the Maya Collapse",
      description:
        "Select the factors that are commonly believed to have contributed to the collapse of the Classic Maya civilization.",
      isMultipleAnswerChoice: true,
      question: {
        questionText:
          "Which of the following factors are thought to have played a role in the collapse of the Classic Maya civilization?",
        options: [
          "Environmental degradation",
          "Warfare",
          "Prolonged drought",
          "European invasion",
        ],
        answer: ["Environmental degradation", "Warfare", "Prolonged drought"],
      },
    },

    // Multiple Choice
    {
      group: "12",
      title: "Largest Classic Maya City",
      description:
        "Identify the city that is often recognized as one of the largest centers during the Classic Maya period.",
      isMultipleChoice: true,
      question: {
        questionText:
          "Which city is considered one of the largest and most influential in the Classic Maya period?",
        options: ["Tikal", "Palenque", "Copán", "Calakmul"],
        answer: "Tikal",
      },
    },

    // Single Line Text
    {
      group: "12",
      title: "Timing of the Classic Collapse",
      description:
        "Provide a concise answer regarding the approximate timing of the Classic Maya collapse.",
      isSingleLineText: true,
      question: {
        questionText:
          "In what century did the collapse of the Classic Maya civilization primarily occur?",
        placeholder: "Enter the century (e.g., 9th)...",
        answer: "9th",
      },
    },

    // Code Completion
    {
      group: "12",
      title: "Peak Period Identification",
      description:
        "Complete the statement regarding the peak period of Maya civilization.",
      isCodeCompletion: true,
      question: {
        questionText:
          "Fill in the blank: The ______ period marks the peak of Classic Maya civilization.",
        options: ["Preclassic", "Classic", "Postclassic", "Colonial"],
        answer: "Classic",
        placeholder: "Enter the correct period...",
      },
    },

    // Open Ended Text
    {
      group: "12",
      title: "Significance of the Maya Collapse",
      description:
        "Discuss the broader historical implications of the Classic Maya collapse.",
      isText: true,
      question: {
        questionText:
          "In your own words, explain the significance of the Classic Maya collapse and its impact on subsequent Mesoamerican history.",
      },
    },

    // Select Order
    {
      group: "12",
      title: "Chronological Periods of Maya History",
      description:
        "Arrange the key periods of Maya history in the correct chronological order.",
      isSelectOrder: true,
      question: {
        questionText:
          "Arrange the following periods of Maya history in chronological order:",
        options: ["Preclassic", "Classic", "Postclassic", "Colonial"],
        answer: ["Preclassic", "Classic", "Postclassic", "Colonial"],
      },
    },

    {
      group: "13",
      title: "Influences of Maya Legacy",
      description:
        "Select the fields where Maya innovations continue to have an impact.",
      isMultipleAnswerChoice: true,
      question: {
        questionText:
          "Which of the following fields have been notably influenced by Maya innovations?",
        options: ["Astronomy", "Architecture", "Mathematics", "Medicine"],
        answer: ["Astronomy", "Architecture", "Mathematics"],
      },
    },

    // Multiple Choice
    {
      group: "13",
      title: "Maya Architectural Inspiration",
      description:
        "Identify a modern architectural feature influenced by Maya design principles.",
      isMultipleChoice: true,
      question: {
        questionText:
          "Which modern architectural feature best reflects Maya design influences?",
        options: [
          "Pyramid-inspired structures",
          "Glass skyscrapers",
          "Neo-classical facades",
          "Modern minimalist designs",
        ],
        answer: "Pyramid-inspired structures",
      },
    },

    // Single Line Text
    {
      group: "13",
      title: "Enduring Calendar Legacy",
      description:
        "Name the Maya calendar system that continues to influence modern perceptions of time.",
      isSingleLineText: true,
      question: {
        questionText:
          "Provide the name of the Maya calendar system known for its long-count method.",
        placeholder: "Enter the calendar name...",
        answer: "Long Count",
      },
    },

    // Code Completion
    {
      group: "13",
      title: "Modern Reflections of Maya Legacy",
      description:
        "Complete the statement that connects Maya innovations with modern society.",
      isCodeCompletion: true,
      question: {
        questionText:
          "Fill in the blank: The enduring Maya legacy is evident today through ______, demonstrating their sophisticated understanding of time and space.",
        options: [
          "sustainable agriculture",
          "astronomical observations",
          "complex calendrical systems",
          "hieroglyphic inscriptions",
        ],
        answer: "complex calendrical systems",
        placeholder: "Enter the missing phrase...",
      },
    },

    // Open Ended Text
    {
      group: "13",
      title: "Impact of Maya Achievements",
      description:
        "Discuss the lasting impact of Maya achievements on modern culture.",
      isText: true,
      question: {
        questionText:
          "In your own words, explain how the achievements of the Maya civilization continue to influence modern science, art, and cultural thought.",
      },
    },

    // Select Order
    {
      group: "13",
      title: "Timeline of Maya Legacy",
      description:
        "Arrange key milestones that illustrate the evolution of Maya legacy.",
      isSelectOrder: true,
      question: {
        questionText:
          "Arrange the following milestones in the evolution of Maya legacy in chronological order:",
        options: [
          "Ancient innovations in mathematics and astronomy",
          "Development of sophisticated writing and codices",
          "Influence on later Mesoamerican cultures",
          "Modern revival and scholarly research on Maya achievements",
        ],
        answer: [
          "Ancient innovations in mathematics and astronomy",
          "Development of sophisticated writing and codices",
          "Influence on later Mesoamerican cultures",
          "Modern revival and scholarly research on Maya achievements",
        ],
      },
    },
  ],
  es: [
    {
      group: "introducción",
      title: "Introducción al Lenguaje y la Historia Maya",
      isStudyGuide: true,
      description: "Prepárate para tu viaje de aprendizaje.",
      question: {
        questionText: (
          <div>
            <p style={{ marginBottom: 12 }}>
              {" "}
              Uno de los mejores indicadores del éxito estudiantil es la
              exposición al material del curso antes de estudiarlo. Se
              recomienda leer sobre los fundamentos del idioma y la historia
              maya antes de comenzar. Utilizamos el maya K'iche' ya que se habla
              comúnmente en Guatemala. Tómate un tiempo para jugar con el
              vocabulario utilizando nuestro{" "}
              <a
                href="https://chatgpt.com/g/g-67a354c685b88191b3a1e428a364c11f-muuyal"
                target="_blank"
                style={{
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "underline",
                }}
              >
                <RiRobot2Fill fontSize="12" borderBottom="2px solid black" />
                ¡GPT personalizado guiado por diccionario!
              </a>
            </p>

            <p style={{ marginBottom: 12 }}>
              <b>
                La teoría detrás de esta plataforma es fomentar que los latinos
                aprendan por diversión y reflexionen sobre cómo se tiene menos
                resistencia a aprender sobre su identidad y cultura, mientras
                que algo como aprender a programar (lo que enseñamos) suele
                generar más resistencia porque es una decisión económica. ¡No
                tiene que ser así! No necesitas tanto tiempo y energía como
                curiosidad. ¡Algo en qué pensar!
              </b>
            </p>

            <p style={{ marginBottom: 12 }}>
              ¿Sabías que las aplicaciones educativas compiten con videojuegos y
              redes sociales? El usuario promedio (hasta ahora) pasa alrededor
              de 2 minutos aquí antes de volver a otras formas de medios que
              captan su atención 😱!
            </p>
            <div style={{ marginBottom: 12 }}>
              <img src="https://res.cloudinary.com/dtkeyccga/image/upload/v1724208228/Screenshot_2024-08-20_at_7.43.28_PM_fioetr.png" />
            </div>
            <p style={{ marginBottom: 12 }}>
              Una realidad aún más dura es que la mayoría de quienes intentan
              aprender durante 100 días se abandonan en las primeras 2 semanas.
              En un video típico de Tiktok, la mayoría de los usuarios se
              desconectan en los primeros 20 segundos. Y la verdad es que
              ¡puedes abandonar antes de las primeras 20 preguntas 😔!
            </p>

            <div
              style={{
                marginBottom: 12,
                textAlign: "center",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                style={{
                  marginBottom: 8,
                  textAlign: "center",
                  width: "60px",
                }}
                src="https://res.cloudinary.com/dtkeyccga/image/upload/v1737544415/character_stickers_4_miarcs.png"
              />
            </div>

            <p style={{ marginBottom: 8 }}>
              Pero quizás ser consciente de esto y hacer un esfuerzo consciente
              por resistir ciertas tentaciones te mantendrá en el camino para
              lograr el éxito con el programa. ¿Qué dices? ¿Aceptas el reto?
            </p>
          </div>
        ),
      },
    },

    {
      group: "tutorial",
      title: "Arquitectura Maya",
      description:
        "Identifica la característica arquitectónica distintiva encontrada en las antiguas ciudades mayas.",
      isMultipleChoice: true,
      question: {
        questionText:
          "¿Qué estructura arquitectónica se asocia más comúnmente con las antiguas ciudades mayas?",
        options: [
          "Pirámides escalonadas",
          "Castillos",
          "Rascacielos",
          "Cúpulas",
        ],
        answer: "Pirámides escalonadas",
      },
    },

    {
      group: "tutorial",
      title: "Idiomas Mayas",
      description:
        "Selecciona los idiomas que forman parte de la familia lingüística maya.",
      isMultipleAnswerChoice: true,
      question: {
        questionText:
          "¿Cuál de los siguientes idiomas pertenece a la familia lingüística maya?",
        options: ["K'iche'", "Yucateco", "Q'eqchi'", "Navajo"],
        answer: ["K'iche'", "Yucateco", "Q'eqchi'"],
      },
    },

    {
      group: "tutorial",
      title: "Mito de la Creación Maya",
      description:
        "Nombra el famoso mito de la creación maya que mezcla mito e historia.",
      isSingleLineText: true,
      question: {
        questionText:
          "¿Cuál es el nombre del mito de la creación maya que funciona tanto como narrativa mitológica como histórica?",
        placeholder: "Escribe tu respuesta aquí...",
        answer: "Popol Vuh",
      },
    },

    {
      group: "tutorial",
      title: "Orden de Desarrollo del Calendario Maya",
      description:
        "Ordena los pasos en el desarrollo del sistema calendárico maya en el orden histórico correcto.",
      isSelectOrder: true,
      question: {
        questionText:
          "Ordena los siguientes pasos en el desarrollo del sistema calendárico maya en el orden en que probablemente ocurrieron:",
        options: [
          "Observación de cuerpos celestes",
          "Creación del calendario ritual de 260 días (Tzolk'in)",
          "Desarrollo del calendario solar de 365 días (Haab')",
          "Integración en el sistema calendárico de Cuenta Larga",
        ],
        answer: [
          "Observación de cuerpos celestes",
          "Creación del calendario ritual de 260 días (Tzolk'in)",
          "Desarrollo del calendario solar de 365 días (Haab')",
          "Integración en el sistema calendárico de Cuenta Larga",
        ],
      },
    },

    {
      group: "tutorial",
      title: "Numerales Mayas",
      description: "Completa la afirmación sobre el sistema numeral maya.",
      isCodeCompletion: true,
      question: {
        questionText:
          "Completa el espacio: En el sistema numeral maya, la palabra para 'uno' es ____.",
        options: ["jun", "hun", "ka", "ox"],
        answer: "jun",
        placeholder: "Escribe la palabra que falta...",
      },
    },

    {
      group: "tutorial",
      title: "Jeroglíficos Mayas",
      description:
        "Discute la importancia cultural de la escritura jeroglífica maya.",
      isText: true,
      question: {
        questionText:
          "En tus propias palabras, explica la importancia de los jeroglíficos mayas para comprender su historia y cultura.",
      },
    },

    {
      group: "1",
      title: "Dialectos Mayas",
      description: "Identificando los idiomas dentro de la familia maya.",
      isMultipleAnswerChoice: true,
      question: {
        questionText: "¿Cuáles de los siguientes son idiomas mayas?",
        options: ["K'iche'", "Yucateco", "Q'eqchi'", "Náhuatl"],
        answer: ["K'iche'", "Yucateco", "Q'eqchi'"],
      },
    },

    {
      group: "1",
      title: "Escritura Maya Antigua",
      description: "Comprendiendo la tradición escrita de los mayas.",
      isMultipleChoice: true,
      question: {
        questionText:
          "¿Cuál es el nombre del sistema de escritura utilizado por los mayas antiguos?",
        options: [
          "Jeroglíficos mayas",
          "Alfabeto latino",
          "Cuneiforme",
          "Pictogramas mesoamericanos",
        ],
        answer: "Jeroglíficos mayas",
      },
    },

    {
      group: "1",
      title: "Idioma Maya Prominente",
      description:
        "Identifica uno de los principales idiomas mayas hablados en Guatemala.",
      isSingleLineText: true,
      question: {
        questionText:
          "Nombra uno de los idiomas mayas más hablados en Guatemala.",
        placeholder: "Escribe el nombre del idioma...",
        answer: "K'iche'",
      },
    },

    {
      group: "1",
      title: "Orden de Palabras en el Maya",
      description:
        "Completa la afirmación respecto al orden de palabras típico en los idiomas mayas.",
      isCodeCompletion: true,
      question: {
        questionText:
          "Completa el espacio: Muchos idiomas mayas utilizan típicamente un orden de palabras ____.",
        options: ["SVO", "VSO", "SOV", "VOS"],
        answer: "VOS",
        placeholder: "Escribe el orden de palabras correcto...",
      },
    },

    {
      group: "1",
      title: "Importancia de la Preservación del Idioma Maya",
      description: "Explica por qué es importante preservar el idioma maya.",
      isText: true,
      question: {
        questionText:
          "En tus propias palabras, explica por qué es importante preservar y promover el idioma maya en la sociedad contemporánea.",
      },
    },

    {
      group: "1",
      title: "Evolución del Idioma Maya",
      description:
        "Ordena las fases clave en la evolución del idioma maya en orden cronológico.",
      isSelectOrder: true,
      question: {
        questionText:
          "Ordena las siguientes fases en la evolución del idioma maya en orden cronológico:",
        options: [
          "Desarrollo indígena precolombino del idioma",
          "Estandarización del idioma en el periodo Clásico",
          "Cambios lingüísticos post-contacto",
          "Esfuerzos modernos de revitalización y preservación",
        ],
        answer: [
          "Desarrollo indígena precolombino del idioma",
          "Estandarización del idioma en el periodo Clásico",
          "Cambios lingüísticos post-contacto",
          "Esfuerzos modernos de revitalización y preservación",
        ],
      },
    },

    {
      group: "2",
      title: "Figuras Mitológicas Mayas",
      description:
        "Selecciona las deidades y figuras mitológicas centrales en la mitología maya.",
      isMultipleAnswerChoice: true,
      question: {
        questionText:
          "¿Cuáles de las siguientes figuras son prominentes en la mitología maya?",
        options: ["Itzamna", "Ixchel", "Kukulkan", "Zeus"],
        answer: ["Itzamna", "Ixchel", "Kukulkan"],
      },
    },

    {
      group: "2",
      title: "Famoso Mito de la Creación Maya",
      description:
        "Identifica el renombrado mito de la creación que es fundamental en la literatura maya.",
      isMultipleChoice: true,
      question: {
        questionText:
          "¿Qué texto se considera el auténtico mito de la creación maya?",
        options: ["Popol Vuh", "Chilam Balam", "Códice Maya", "Crónicas Mayas"],
        answer: "Popol Vuh",
      },
    },

    {
      group: "2",
      title: "Nombre del Inframundo",
      description:
        "Nombra el inframundo mitológico presente en la mitología maya.",
      isSingleLineText: true,
      question: {
        questionText: "¿Cuál es el nombre del inframundo en la mitología maya?",
        placeholder: "Escribe el nombre...",
        answer: "Xibalba",
      },
    },

    {
      group: "2",
      title: "Estructura del Mito Maya",
      description:
        "Completa la línea que refleja un inicio tradicional de un mito maya.",
      isCodeCompletion: true,
      question: {
        questionText:
          "Completa el espacio: Los mitos mayas a menudo comienzan con la frase 'Al principio, ____.'",
        options: [
          "el mundo estaba oscuro",
          "no había nada",
          "los dioses hablaron",
          "todo era uno",
        ],
        answer: "los dioses hablaron",
        placeholder: "Escribe la frase que falta...",
      },
    },

    {
      group: "2",
      title: "Interpretación de los Mitos Mayas",
      description: "Discute la importancia cultural de la mitología maya.",
      isText: true,
      question: {
        questionText:
          "En tus propias palabras, explica cómo la mitología maya influyó en la vida diaria y las creencias del pueblo maya.",
      },
    },

    {
      group: "2",
      title: "Evolución de la Mitología Maya",
      description:
        "Ordena las fases del desarrollo de la mitología maya en el orden cronológico correcto.",
      isSelectOrder: true,
      question: {
        questionText:
          "Ordena las siguientes fases de la mitología maya en orden cronológico:",
        options: [
          "Tradiciones orales entre las primeras comunidades indígenas",
          "Creación de narrativas mitológicas durante el período Preclásico",
          "Estandarización de mitos durante el período Clásico",
          "Reinterpretaciones post-contacto y resurgimientos modernos",
        ],
        answer: [
          "Tradiciones orales entre las primeras comunidades indígenas",
          "Creación de narrativas mitológicas durante el período Preclásico",
          "Estandarización de mitos durante el período Clásico",
          "Reinterpretaciones post-contacto y resurgimientos modernos",
        ],
      },
    },

    {
      group: "3",
      title: "Códices Mayas",
      description:
        "Identifica los manuscritos auténticos sobrevivientes de la civilización maya.",
      isMultipleAnswerChoice: true,
      question: {
        questionText:
          "¿Cuáles de los siguientes son reconocidos como códices mayas auténticos que han sobrevivido?",
        options: [
          "Códice de Dresde",
          "Códice de Madrid",
          "Códice de París",
          "Códice de Grolier",
        ],
        answer: ["Códice de Dresde", "Códice de Madrid", "Códice de París"],
      },
    },

    {
      group: "3",
      title: "Materiales de Escritura",
      description:
        "Selecciona el material principal que usaban los mayas para crear códices.",
      isMultipleChoice: true,
      question: {
        questionText:
          "¿Qué material utilizaban principalmente los mayas antiguos para crear sus códices?",
        options: [
          "Papel de corteza",
          "Papiro",
          "Pergamino",
          "Tablillas de piedra",
        ],
        answer: "Papel de corteza",
      },
    },

    {
      group: "3",
      title: "Nombre de Códice Famoso",
      description: "Nombra un códice maya auténtico que haya sobrevivido.",
      isSingleLineText: true,
      question: {
        questionText:
          "Proporciona el nombre de un códice maya auténtico que haya sobrevivido hasta la actualidad.",
        placeholder: "Escribe el nombre del códice...",
        answer: "Códice de Dresde",
      },
    },

    {
      group: "3",
      title: "Completar Título del Códice",
      description: "Completa la afirmación con el nombre adecuado del códice.",
      isCodeCompletion: true,
      question: {
        questionText:
          "Completa el espacio: El Códice ______ es famoso por sus detalladas tablas astronómicas.",
        options: ["Dresde", "Madrid", "París", "Grolier"],
        answer: "Dresde",
        placeholder: "Escribe el nombre del códice que falta...",
      },
    },

    {
      group: "3",
      title: "Importancia de los Códices Mayas",
      description:
        "Discute la importancia de los códices en la preservación de la historia maya.",
      isText: true,
      question: {
        questionText:
          "En tus propias palabras, explica por qué los códices mayas son fundamentales para comprender la cultura e historia de los mayas.",
      },
    },

    {
      group: "3",
      title: "Proceso de Creación de un Códice",
      description:
        "Ordena los pasos involucrados en la creación de un códice maya en el orden correcto.",
      isSelectOrder: true,
      question: {
        questionText:
          "Ordena los siguientes pasos en el proceso de creación de un códice maya en el orden correcto:",
        options: [
          "Recoge materiales naturales y prepara la corteza",
          "Mezcla pigmentos y muele minerales",
          "Aplica jeroglíficos e ilustraciones en la corteza",
          "Une las páginas para formar un códice",
        ],
        answer: [
          "Recoge materiales naturales y prepara la corteza",
          "Mezcla pigmentos y muele minerales",
          "Aplica jeroglíficos e ilustraciones en la corteza",
          "Une las páginas para formar un códice",
        ],
      },
    },

    {
      group: "4",
      title: "Símbolos Numerales Mayas",
      description:
        "Selecciona los símbolos que se usan en el sistema numeral maya.",
      isMultipleAnswerChoice: true,
      question: {
        questionText:
          "¿Cuáles de los siguientes símbolos se usan tradicionalmente en el sistema numeral maya?",
        options: ["un punto", "una barra", "una concha", "un zigzag"],
        answer: ["un punto", "una barra", "una concha"],
      },
    },

    {
      group: "4",
      title: "Base Numeral Maya",
      description:
        "Identifica la base numérica empleada por los mayas antiguos.",
      isMultipleChoice: true,
      question: {
        questionText:
          "¿Qué base numeral usaban los mayas en su sistema de conteo?",
        options: ["Base 10", "Base 20", "Base 12", "Base 60"],
        answer: "Base 20",
      },
    },

    {
      group: "4",
      title: "Valor de una Barra",
      description:
        "Determina el valor numérico representado por una barra en el sistema numeral maya.",
      isSingleLineText: true,
      question: {
        questionText:
          "En el sistema numeral maya, ¿qué valor numérico representa una barra?",
        placeholder: "Escribe el número...",
        answer: "5",
      },
    },

    {
      group: "4",
      title: "Representación del Cero en el Maya",
      description:
        "Completa la afirmación sobre la representación del cero en el sistema numeral maya.",
      isCodeCompletion: true,
      question: {
        questionText:
          "Completa el espacio: En el sistema numeral maya, el cero se representa por una ___.",
        options: ["punto", "barra", "concha", "círculo"],
        answer: "concha",
        placeholder: "Escribe el término que falta...",
      },
    },

    {
      group: "4",
      title: "Impacto del Sistema Numeral Maya",
      description:
        "Explica la importancia histórica y científica del sistema numeral maya.",
      isText: true,
      question: {
        questionText:
          "En tus propias palabras, discute cómo el sistema numeral maya contribuyó a los avances en matemáticas y astronomía.",
      },
    },

    {
      group: "4",
      title: "Ordenando los Desarrollos del Sistema Numeral Maya",
      description:
        "Ordena los desarrollos clave en la evolución del sistema numeral maya en el orden histórico correcto.",
      isSelectOrder: true,
      question: {
        questionText:
          "Ordena los siguientes desarrollos en el sistema numeral maya en el orden en que ocurrieron:",
        options: [
          "Desarrollo de los símbolos básicos de punto y barra",
          "Introducción del concepto de cero",
          "Refinamiento hacia un sistema vigesimal (base 20)",
          "Integración del sistema numeral en los cálculos calendáricos",
        ],
        answer: [
          "Desarrollo de los símbolos básicos de punto y barra",
          "Introducción del concepto de cero",
          "Refinamiento hacia un sistema vigesimal (base 20)",
          "Integración del sistema numeral en los cálculos calendáricos",
        ],
      },
    },

    {
      group: "5",
      title: "Componentes del Calendario Maya",
      description:
        "Selecciona todos los elementos que son partes integrales del sistema calendárico maya.",
      isMultipleAnswerChoice: true,
      question: {
        questionText:
          "¿Cuáles de los siguientes son componentes del sistema calendárico maya?",
        options: ["Tzolk'in", "Haab'", "Long Count", "Fases Lunares"],
        answer: ["Tzolk'in", "Haab'", "Long Count"],
      },
    },

    {
      group: "5",
      title: "Identificando el Calendario Ritual",
      description:
        "Selecciona el calendario que utilizaban los mayas para rituales y adivinación.",
      isMultipleChoice: true,
      question: {
        questionText:
          "¿Qué calendario era utilizado principalmente por los mayas para rituales y adivinación?",
        options: ["Tzolk'in", "Haab'", "Long Count", "Calendario Solar"],
        answer: "Tzolk'in",
      },
    },

    {
      group: "5",
      title: "Calendario Solar Maya",
      description:
        "Nombra el calendario solar de 365 días utilizado por los mayas.",
      isSingleLineText: true,
      question: {
        questionText:
          "¿Cuál es el nombre del calendario solar de 365 días utilizado por los mayas?",
        placeholder: "Escribe el nombre del calendario...",
        answer: "Haab'",
      },
    },

    {
      group: "5",
      title: "Calendario de Cuenta Larga Maya",
      description:
        "Completa la afirmación respecto a la función del calendario de Cuenta Larga maya.",
      isCodeCompletion: true,
      question: {
        questionText:
          "Completa el espacio: El calendario de Cuenta Larga maya fue desarrollado para registrar períodos de tiempo ______.",
        options: ["cortos", "extendidos", "cíclicos", "largos"],
        answer: "largos",
        placeholder: "Escribe la palabra que falta...",
      },
    },

    {
      group: "5",
      title: "Importancia del Calendario Maya",
      description:
        "Explica la importancia cultural y práctica del sistema calendárico maya.",
      isText: true,
      question: {
        questionText:
          "En tus propias palabras, describe por qué el sistema calendárico maya fue central en la cultura y la vida diaria de los mayas.",
      },
    },

    {
      group: "5",
      title: "Cronología de los Desarrollos del Calendario Maya",
      description:
        "Ordena los hitos en el desarrollo del sistema calendárico maya en el orden histórico correcto.",
      isSelectOrder: true,
      question: {
        questionText:
          "Ordena los siguientes hitos en la evolución del sistema calendárico maya en orden cronológico:",
        options: [
          "Creación del Tzolk'in (calendario ritual de 260 días)",
          "Desarrollo del Haab' (calendario solar de 365 días)",
          "Integración de ambos calendarios en el sistema de Cuenta Larga",
          "Refinamiento de los cálculos calendáricos para los ciclos agrícolas",
        ],
        answer: [
          "Creación del Tzolk'in (calendario ritual de 260 días)",
          "Desarrollo del Haab' (calendario solar de 365 días)",
          "Integración de ambos calendarios en el sistema de Cuenta Larga",
          "Refinamiento de los cálculos calendáricos para los ciclos agrícolas",
        ],
      },
    },

    {
      group: "6",
      title: "Observaciones Astronómicas Mayas",
      description:
        "Selecciona los fenómenos astronómicos que los mayas antiguos registraron.",
      isMultipleAnswerChoice: true,
      question: {
        questionText:
          "¿Cuáles de los siguientes fenómenos astronómicos fueron observados y registrados por los mayas?",
        options: [
          "Eclipses solares",
          "Eclipses lunares",
          "Lluvias de meteoros",
          "Ciclo de Venus",
        ],
        answer: ["Eclipses solares", "Eclipses lunares", "Ciclo de Venus"],
      },
    },

    {
      group: "6",
      title: "Enfoque en Venus",
      description:
        "Identifica el planeta que jugó un papel crítico en la astronomía maya.",
      isMultipleChoice: true,
      question: {
        questionText:
          "¿Qué planeta fue el más significativo en las observaciones astronómicas de los mayas?",
        options: ["Venus", "Marte", "Júpiter", "Saturno"],
        answer: "Venus",
      },
    },

    {
      group: "6",
      title: "Duración del Ciclo de Venus",
      description:
        "Determina la duración del ciclo de Venus según los registros de la astronomía maya.",
      isSingleLineText: true,
      question: {
        questionText:
          "Aproximadamente, ¿cuántos días dura el ciclo de Venus en los registros astronómicos mayas?",
        placeholder: "Escribe el número de días...",
        answer: "584",
      },
    },

    {
      group: "6",
      title: "Importancia de Venus",
      description:
        "Completa la afirmación sobre el papel cultural de Venus en la sociedad maya.",
      isCodeCompletion: true,
      question: {
        questionText:
          "Completa el espacio: Los mayas seguían meticulosamente a Venus porque creían que significaba ______.",
        options: ["paz", "guerra", "fertilidad", "cosecha"],
        answer: "guerra",
        placeholder: "Escribe el concepto que falta...",
      },
    },

    {
      group: "6",
      title: "Impacto de la Astronomía Maya",
      description:
        "Explica la importancia cultural y ritual de la astronomía en la sociedad maya.",
      isText: true,
      question: {
        questionText:
          "En tus propias palabras, describe cómo las observaciones astronómicas influyeron en la cultura y las prácticas rituales mayas.",
      },
    },

    {
      group: "6",
      title: "Registro de Eventos Astronómicos",
      description:
        "Ordena los pasos en el proceso que usaban los mayas para registrar eventos astronómicos.",
      isSelectOrder: true,
      question: {
        questionText:
          "Ordena los siguientes pasos en el orden en que los mayas registraban eventos astronómicos:",
        options: [
          "Observación de cuerpos celestes",
          "Registro de posiciones planetarias",
          "Correlación con datos calendáricos",
          "Integración en prácticas rituales",
        ],
        answer: [
          "Observación de cuerpos celestes",
          "Registro de posiciones planetarias",
          "Correlación con datos calendáricos",
          "Integración en prácticas rituales",
        ],
      },
    },

    {
      group: "7",
      title: "Bienes Comerciales Mayas",
      description:
        "Selecciona los objetos que se usaban comúnmente como moneda o bienes de intercambio en la sociedad maya.",
      isMultipleAnswerChoice: true,
      question: {
        questionText:
          "¿Cuáles de los siguientes objetos se usaron como bienes de intercambio por los mayas?",
        options: ["frijoles de cacao", "jade", "obsidiana", "monedas de plata"],
        answer: ["frijoles de cacao", "jade", "obsidiana"],
      },
    },

    {
      group: "7",
      title: "Cultivo Básico",
      description:
        "Identifica el cultivo básico que fue central en la agricultura y la economía maya.",
      isMultipleChoice: true,
      question: {
        questionText:
          "¿Qué cultivo fue un componente fundamental de la economía maya?",
        options: ["Maíz", "Trigo", "Arroz", "Cebada"],
        answer: "Maíz",
      },
    },

    {
      group: "7",
      title: "Mercancía Importante",
      description:
        "Nombra una mercancía que fue vital para el comercio en la sociedad maya antigua.",
      isSingleLineText: true,
      question: {
        questionText:
          "Proporciona el nombre de una mercancía que jugó un papel significativo en el comercio maya.",
        placeholder: "Escribe el nombre de la mercancía...",
        answer: "jade",
      },
    },

    {
      group: "7",
      title: "Frase de Intercambio Económico",
      description:
        "Completa la afirmación sobre las prácticas de intercambio económico maya.",
      isCodeCompletion: true,
      question: {
        questionText:
          "Completa el espacio: Los mayas usaban un sistema de trueque y ____ para facilitar el comercio.",
        options: ["moneda", "intercambio", "comercio", "trueque"],
        answer: "intercambio",
        placeholder: "Escribe la palabra que falta...",
      },
    },

    {
      group: "7",
      title: "Rol del Comercio en la Sociedad Maya",
      description:
        "Discute cómo el comercio influyó en el desarrollo económico y cultural de los mayas.",
      isText: true,
      question: {
        questionText:
          "En tus propias palabras, explica la importancia del comercio en la configuración de la sociedad maya.",
      },
    },

    {
      group: "7",
      title: "Evolución de las Redes Comerciales Mayas",
      description:
        "Ordena los desarrollos clave en las redes comerciales mayas en el orden histórico correcto.",
      isSelectOrder: true,
      question: {
        questionText:
          "Ordena los siguientes hitos en la evolución de las redes comerciales mayas en orden cronológico:",
        options: [
          "Trueque local entre comunidades vecinas",
          "Desarrollo de rutas comerciales de larga distancia",
          "Integración de rutas comerciales marítimas",
          "Establecimiento de mercados especializados",
        ],
        answer: [
          "Trueque local entre comunidades vecinas",
          "Desarrollo de rutas comerciales de larga distancia",
          "Integración de rutas comerciales marítimas",
          "Establecimiento de mercados especializados",
        ],
      },
    },

    {
      group: "8",
      title: "Ciudades-Estado Mayas Prominentes",
      description:
        "Selecciona las ciudades-estado mayas que fueron centros de poder político.",
      isMultipleAnswerChoice: true,
      question: {
        questionText:
          "¿Cuáles de las siguientes fueron ciudades-estado mayas prominentes?",
        options: ["Tikal", "Palenque", "Chichén Itzá", "Teotihuacan"],
        answer: ["Tikal", "Palenque", "Chichén Itzá"],
      },
    },

    {
      group: "8",
      title: "Título del Gobernante Maya",
      description:
        "Identifica el título otorgado a los gobernantes de las ciudades-estado mayas.",
      isMultipleChoice: true,
      question: {
        questionText:
          "¿Qué título se usaba comúnmente para un gobernante en las ciudades-estado mayas?",
        options: ["Ajaw", "K'uhul Ajaw", "Batab", "Sajal"],
        answer: "Ajaw",
      },
    },

    {
      group: "8",
      title: "Gobernante Maya Notable",
      description: "Nombra un gobernante prominente de una ciudad-estado maya.",
      isSingleLineText: true,
      question: {
        questionText:
          "¿Quién es un gobernante reconocido de la civilización maya (por ejemplo, de Palenque o Tikal)?",
        placeholder: "Escribe el nombre del gobernante...",
        answer: "Pakal el Grande",
      },
    },

    {
      group: "8",
      title: "Estructura de Liderazgo Maya",
      description:
        "Completa la afirmación sobre la estructura política de las ciudades-estado mayas.",
      isCodeCompletion: true,
      question: {
        questionText:
          "Completa el espacio: En la sociedad maya, el líder de una ciudad-estado era conocido como el ______.",
        options: ["Ajaw", "Batab", "K'uhul Ajaw", "Sajal"],
        answer: "Ajaw",
        placeholder: "Escribe el título que falta...",
      },
    },

    {
      group: "8",
      title: "Organización de las Ciudades-Estado Mayas",
      description:
        "Discute la organización política y el liderazgo de las ciudades-estado mayas.",
      isText: true,
      question: {
        questionText:
          "En tus propias palabras, explica cómo estaban organizadas políticamente las ciudades-estado mayas y el papel que desempeñaban sus gobernantes en la administración.",
      },
    },

    {
      group: "8",
      title: "Cronología de los Desarrollos Políticos Mayas",
      description:
        "Ordena los siguientes eventos en la evolución de la organización política maya.",
      isSelectOrder: true,
      question: {
        questionText:
          "Ordena estos hitos en la evolución política de la civilización maya en orden cronológico:",
        options: [
          "Aparición de ciudades-estado independientes",
          "Desarrollo de un liderazgo jerárquico",
          "Formación de alianzas entre ciudades-estado",
          "Declive debido a conflictos internos y competencia",
        ],
        answer: [
          "Aparición de ciudades-estado independientes",
          "Desarrollo de un liderazgo jerárquico",
          "Formación de alianzas entre ciudades-estado",
          "Declive debido a conflictos internos y competencia",
        ],
      },
    },

    {
      group: "9",
      title: "Costumbres Sociales Mayas",
      description:
        "Selecciona las costumbres sociales que jugaron un papel importante en la vida maya.",
      isMultipleAnswerChoice: true,
      question: {
        questionText:
          "¿Cuáles de las siguientes fueron costumbres sociales importantes entre los mayas?",
        options: [
          "Reciprocidad",
          "Hospitalidad",
          "Individualismo",
          "Rituales comunitarios",
        ],
        answer: ["Reciprocidad", "Hospitalidad", "Rituales comunitarios"],
      },
    },

    {
      group: "9",
      title: "Estructura Social Maya",
      description:
        "Identifica la estructura social característica de la sociedad maya.",
      isMultipleChoice: true,
      question: {
        questionText:
          "¿Qué término describe mejor la organización social de los mayas antiguos?",
        options: ["Egalitaria", "Jerárquica", "Nómada", "Tribal"],
        answer: "Jerárquica",
      },
    },

    {
      group: "9",
      title: "Valor Social Fundamental",
      description:
        "Nombra un valor fundamental que fue central en la vida comunitaria maya.",
      isSingleLineText: true,
      question: {
        questionText:
          "¿Cuál es un valor social fundamental en la cultura maya?",
        placeholder: "Escribe un valor social...",
        answer: "Reciprocidad",
      },
    },

    {
      group: "9",
      title: "Declaración de Cohesión Social",
      description:
        "Completa la afirmación sobre cómo se mantenía la cohesión social en la sociedad maya.",
      isCodeCompletion: true,
      question: {
        questionText:
          "Completa el espacio: En la sociedad maya, los fuertes lazos comunitarios se mantenían a través de ______.",
        options: ["rituales", "comercio", "reciprocidad", "gobernanza"],
        answer: "reciprocidad",
        placeholder: "Escribe el término que falta...",
      },
    },

    {
      group: "9",
      title: "Impacto de las Prácticas Sociales",
      description:
        "Discute el papel de las prácticas sociales en la vida cotidiana de los mayas.",
      isText: true,
      question: {
        questionText:
          "En tus propias palabras, explica cómo prácticas como el trabajo comunitario y el intercambio recíproco influyeron en la vida cotidiana en las comunidades mayas.",
      },
    },

    {
      group: "9",
      title: "Evolución de las Instituciones Sociales Mayas",
      description:
        "Ordena los desarrollos clave en la organización social maya en el orden en que surgieron.",
      isSelectOrder: true,
      question: {
        questionText:
          "Ordena los siguientes hitos en la evolución de las instituciones sociales mayas en orden cronológico:",
        options: [
          "Establecimiento de grupos de parentesco",
          "Desarrollo de sistemas de trabajo comunal",
          "Formación de gremios comerciales",
          "Creación de rituales ceremoniales",
        ],
        answer: [
          "Establecimiento de grupos de parentesco",
          "Desarrollo de sistemas de trabajo comunal",
          "Formación de gremios comerciales",
          "Creación de rituales ceremoniales",
        ],
      },
    },

    {
      group: "10",
      title: "Materiales del Arte Maya",
      description:
        "Selecciona los materiales que se usaban comúnmente en la creación del arte maya.",
      isMultipleAnswerChoice: true,
      question: {
        questionText:
          "¿Cuáles de los siguientes materiales eran frecuentemente utilizados por los artistas mayas?",
        options: ["Jade", "Obsídiana", "Turquesa", "Mármol"],
        answer: ["Jade", "Obsídiana", "Turquesa"],
      },
    },

    {
      group: "10",
      title: "Iconografía en el Arte Maya",
      description:
        "Identifica el símbolo más fuertemente asociado con la expresión artística maya.",
      isMultipleChoice: true,
      question: {
        questionText:
          "¿Qué símbolo es el más emblemático en el arte y la iconografía maya?",
        options: ["Jaguar", "Serpiente", "Águila", "Pez"],
        answer: "Jaguar",
      },
    },

    {
      group: "10",
      title: "Obra de Arte Maya Famosa",
      description:
        "Nombra un ejemplo renombrado de arte maya o un monumento conocido.",
      isSingleLineText: true,
      question: {
        questionText:
          "Proporciona el nombre de una pieza famosa de arte maya o una escultura monumental.",
        placeholder: "Escribe el nombre de la obra de arte...",
        answer: "Stela 31",
      },
    },

    {
      group: "10",
      title: "Técnicas Artísticas",
      description:
        "Completa la afirmación sobre una técnica artística comúnmente utilizada por los artistas mayas.",
      isCodeCompletion: true,
      question: {
        questionText:
          "Completa el espacio: Los artistas mayas a menudo usaban ______ para crear contrastes de color vivos en sus murales.",
        options: [
          "pigmentos naturales",
          "pinturas al óleo",
          "acuarelas",
          "acrílicos",
        ],
        answer: "pigmentos naturales",
        placeholder: "Escribe el término que falta...",
      },
    },

    {
      group: "10",
      title: "Importancia Cultural del Arte Maya",
      description:
        "Discute el impacto del arte maya en la identidad cultural de la civilización.",
      isText: true,
      question: {
        questionText:
          "En tus propias palabras, explica cómo el arte maya refleja la cultura, la religión y la estructura social de la civilización maya.",
      },
    },

    {
      group: "10",
      title: "Evolución de los Estilos Artísticos Mayas",
      description:
        "Ordena las etapas en la evolución del arte maya en el orden histórico correcto.",
      isSelectOrder: true,
      question: {
        questionText:
          "Ordena las siguientes etapas del desarrollo artístico maya en orden cronológico:",
        options: [
          "Arte simbólico preclásico",
          "Muralismo del periodo Clásico",
          "Cambios iconográficos del Postclásico",
          "Interpretaciones modernas",
        ],
        answer: [
          "Arte simbólico preclásico",
          "Muralismo del periodo Clásico",
          "Cambios iconográficos del Postclásico",
          "Interpretaciones modernas",
        ],
      },
    },

    {
      group: "11",
      title: "Prácticas Rituales Mayas",
      description:
        "Selecciona las prácticas que fueron integrales en las ceremonias religiosas mayas.",
      isMultipleAnswerChoice: true,
      question: {
        questionText:
          "¿Cuáles de las siguientes prácticas fueron centrales en los rituales religiosos mayas?",
        options: [
          "Sangrado ritual",
          "Sacrificio humano",
          "Juego de pelota ritual",
          "Festín",
        ],
        answer: [
          "Sangrado ritual",
          "Sacrificio humano",
          "Juego de pelota ritual",
        ],
      },
    },

    {
      group: "11",
      title: "Sitio Sagrado Maya",
      description:
        "Identifica una característica natural que era considerada sagrada en la religión maya.",
      isMultipleChoice: true,
      question: {
        questionText:
          "¿Qué característica natural era a menudo considerada sagrada en la tradición religiosa maya?",
        options: ["Cenote", "Volcán", "Desierto", "Llanura"],
        answer: "Cenote",
      },
    },

    {
      group: "11",
      title: "Deidad Maya",
      description: "Nombra una deidad prominente adorada en la religión maya.",
      isSingleLineText: true,
      question: {
        questionText:
          "Proporciona el nombre de una deidad principal del panteón maya.",
        placeholder: "Escribe el nombre de la deidad...",
        answer: "Ixchel",
      },
    },

    {
      group: "11",
      title: "Completar Actividad Ritual",
      description:
        "Completa la afirmación sobre una actividad ritual común en las ceremonias mayas.",
      isCodeCompletion: true,
      question: {
        questionText:
          "Completa el espacio: Durante los rituales mayas, los participantes a menudo practicaban ______ como acto de sangrado ritual.",
        options: ["autoflagelación", "cantos", "danza", "ofrecer regalos"],
        answer: "autoflagelación",
        placeholder: "Escribe el término que falta...",
      },
    },

    {
      group: "11",
      title: "Importancia de la Religión Maya",
      description:
        "Explica el impacto de las creencias religiosas en la sociedad maya.",
      isText: true,
      question: {
        questionText:
          "En tus propias palabras, explica cómo las prácticas y creencias religiosas mayas influyeron en su vida diaria y organización social.",
      },
    },

    {
      group: "11",
      title: "Secuencia de una Ceremonia Religiosa Maya",
      description:
        "Ordena los pasos de una ceremonia religiosa maya típica en el orden correcto.",
      isSelectOrder: true,
      question: {
        questionText:
          "Ordena los siguientes pasos en el orden en que típicamente ocurrían durante una ceremonia religiosa maya:",
        options: [
          "Preparación y purificación",
          "Invocación de deidades",
          "Realización de actos rituales (p.ej., sangrado ritual)",
          "Ofrenda y festín comunitario",
        ],
        answer: [
          "Preparación y purificación",
          "Invocación de deidades",
          "Realización de actos rituales (p.ej., sangrado ritual)",
          "Ofrenda y festín comunitario",
        ],
      },
    },

    {
      group: "12",
      title: "Factores que Contribuyeron al Colapso Maya",
      description:
        "Selecciona los factores que se cree que contribuyeron al colapso de la civilización maya Clásica.",
      isMultipleAnswerChoice: true,
      question: {
        questionText:
          "¿Cuáles de los siguientes factores se cree que jugaron un papel en el colapso de la civilización maya Clásica?",
        options: [
          "Degradación ambiental",
          "Guerra",
          "Sequía prolongada",
          "Invasión europea",
        ],
        answer: ["Degradación ambiental", "Guerra", "Sequía prolongada"],
      },
    },

    {
      group: "12",
      title: "Ciudad Maya Clásica Más Grande",
      description:
        "Identifica la ciudad que a menudo se reconoce como uno de los centros más grandes durante el período Clásico maya.",
      isMultipleChoice: true,
      question: {
        questionText:
          "¿Qué ciudad se considera una de las más grandes e influyentes del período Clásico maya?",
        options: ["Tikal", "Palenque", "Copán", "Calakmul"],
        answer: "Tikal",
      },
    },

    {
      group: "12",
      title: "Cronología del Colapso Clásico",
      description:
        "Proporciona una respuesta concisa respecto a la cronología aproximada del colapso maya Clásico.",
      isSingleLineText: true,
      question: {
        questionText:
          "¿En qué siglo ocurrió principalmente el colapso de la civilización maya Clásica?",
        placeholder: "Escribe el siglo (por ejemplo, 9º)...",
        answer: "siglo 9",
      },
    },

    {
      group: "12",
      title: "Identificación del Período de Auge",
      description:
        "Completa la afirmación respecto al período de auge de la civilización maya.",
      isCodeCompletion: true,
      question: {
        questionText:
          "Completa el espacio: El período ______ marca el auge de la civilización maya Clásica.",
        options: ["Preclásico", "Clásico", "Posclásico", "Colonial"],
        answer: "Clásico",
        placeholder: "Escribe el período correcto...",
      },
    },

    {
      group: "12",
      title: "Importancia del Colapso Maya",
      description:
        "Discute las implicaciones históricas más amplias del colapso de la civilización maya Clásica.",
      isText: true,
      question: {
        questionText:
          "En tus propias palabras, explica la importancia del colapso maya Clásico y su impacto en la historia mesoamericana posterior.",
      },
    },

    {
      group: "12",
      title: "Períodos Cronológicos de la Historia Maya",
      description:
        "Ordena los períodos clave de la historia maya en el orden cronológico correcto.",
      isSelectOrder: true,
      question: {
        questionText:
          "Ordena los siguientes períodos de la historia maya en orden cronológico:",
        options: ["Preclásico", "Clásico", "Posclásico", "Colonial"],
        answer: ["Preclásico", "Clásico", "Posclásico", "Colonial"],
      },
    },

    {
      group: "13",
      title: "Influencias del Legado Maya",
      description:
        "Selecciona los campos en los que las innovaciones mayas continúan teniendo impacto.",
      isMultipleAnswerChoice: true,
      question: {
        questionText:
          "¿Cuáles de los siguientes campos han sido notablemente influenciados por las innovaciones mayas?",
        options: ["Astronomía", "Arquitectura", "Matemáticas", "Medicina"],
        answer: ["Astronomía", "Arquitectura", "Matemáticas"],
      },
    },

    {
      group: "13",
      title: "Inspiración Arquitectónica Maya",
      description:
        "Identifica una característica arquitectónica moderna influenciada por los principios de diseño maya.",
      isMultipleChoice: true,
      question: {
        questionText:
          "¿Qué característica arquitectónica moderna refleja mejor las influencias del diseño maya?",
        options: [
          "Estructuras inspiradas en pirámides",
          "Rascacielos de vidrio",
          "Fachadas neoclásicas",
          "Diseños minimalistas modernos",
        ],
        answer: "Estructuras inspiradas en pirámides",
      },
    },

    {
      group: "13",
      title: "Legado Duradero del Calendario",
      description:
        "Nombra el sistema calendárico maya que continúa influyendo en las percepciones modernas del tiempo.",
      isSingleLineText: true,
      question: {
        questionText:
          "Proporciona el nombre del sistema calendárico maya conocido por su método de cuenta larga.",
        placeholder: "Escribe el nombre del calendario...",
        answer: "Cuenta Larga",
      },
    },

    {
      group: "13",
      title: "Reflejos Modernos del Legado Maya",
      description:
        "Completa la afirmación que conecta las innovaciones mayas con la sociedad moderna.",
      isCodeCompletion: true,
      question: {
        questionText:
          "Completa el espacio: El legado duradero de los mayas es evidente hoy a través de ______, demostrando su sofisticada comprensión del tiempo y el espacio.",
        options: [
          "agricultura sostenible",
          "observaciones astronómicas",
          "sistemas calendáricos complejos",
          "inscripciones jeroglíficas",
        ],
        answer: "sistemas calendáricos complejos",
        placeholder: "Escribe la frase que falta...",
      },
    },

    {
      group: "13",
      title: "Impacto de los Logros Mayas",
      description:
        "Discute el impacto duradero de los logros mayas en la cultura moderna.",
      isText: true,
      question: {
        questionText:
          "En tus propias palabras, explica cómo los logros de la civilización maya continúan influyendo en la ciencia, el arte y el pensamiento cultural modernos.",
      },
    },

    {
      group: "13",
      title: "Cronología del Legado Maya",
      description:
        "Ordena los hitos clave que ilustran la evolución del legado maya.",
      isSelectOrder: true,
      question: {
        questionText:
          "Ordena los siguientes hitos en la evolución del legado maya en orden cronológico:",
        options: [
          "Innovaciones antiguas en matemáticas y astronomía",
          "Desarrollo de una escritura sofisticada y códices",
          "Influencia en culturas mesoamericanas posteriores",
          "Resurgimiento moderno e investigación académica sobre los logros mayas",
        ],
        answer: [
          "Innovaciones antiguas en matemáticas y astronomía",
          "Desarrollo de una escritura sofisticada y códices",
          "Influencia en culturas mesoamericanas posteriores",
          "Resurgimiento moderno e investigación académica sobre los logros mayas",
        ],
      },
    },
  ],
};

export const lectureSummaries = {
  en: {
    tutorial: {
      videoSrc: "", //string url
      content: <div>Hello world</div>, //jsx
      challengeQuestion: "",
    },
    1: {},
    2: {},
    3: {},
    4: {},
    5: {},
    6: {},
  },
  es: {
    tutorial: {},
    1: {},
    2: {},
    3: {},
    4: {},
    5: {},
    6: {},
  },
};

export const generatedSteps = [];

export const tutorial_interface = [
  {
    group: "",
    title: "",
    description: "",
    isMultipleChoice: true,
    question: {
      questionText: "",
      options: ["", "", "", ""],
      answer: "",
    },
  },
  {
    group: "",
    title: "",
    description: "",
    isSelectOrder: true,
    question: {
      questionText: "",
      options: ["", "", "", ""],
      answer: ["", "", "", ""],
    },
  },
  {
    group: "",
    title: "",
    description: "",
    isMultipleAnswerChoice: true,
    question: {
      questionText: "",
      options: ["", "", "", "", "", ""],
      answer: ["", "", ""],
    },
  },
  {
    group: "",
    title: "",
    description: "",
    isCodeCompletion: true,
    question: {
      questionText: "",
      options: [``, ``, ``, ``],
      answer: ``,
    },
  },
  {
    group: "tutorial",
    title: "",
    description: "",
    isCode: true,
    isTerminal: false,
    question: {
      questionText: "",
    },
  },
  {
    group: "tutorial",
    title: "",
    description: "",
    isSingleLineText: true,
    question: {
      questionText: "",
      placeholder: "",
      answer: "",
    },
  },
  {
    group: "tutorial",
    title: "",
    description: "",
    isText: true,
    question: {
      questionText: "",
    },
  },
  {
    group: "tutorial",
    title: "",
    description: "",
    isCode: true,
    isTerminal: true,
    question: {
      questionText: "",
    },
  },
  {
    group: "tutorial",
    title: "",
    isConversationReview: true,
    description: "",
    question: {
      questionText: "",
      range: [1, 8],
    },
  },
];
