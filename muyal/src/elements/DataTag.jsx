import { Tag } from "@chakra-ui/react";
import { translation } from "../utility/translation";

export const DataTags = ({
  isPatreon,
  isRox,
  isProgramAI,
  isNew,
  grade = null,
  userLanguage,
}) => {
  console.log("grade typeof", typeof grade);
  return (
    <>
      {isRox ? (
        <Tag size="sm" variant="solid" colorScheme="purple" m={1}>
          Rox
        </Tag>
      ) : null}
      {isPatreon ? (
        <Tag size="sm" variant="solid" colorScheme="teal" m={1}>
          Patreon
        </Tag>
      ) : null}
      {isProgramAI ? (
        <Tag size="sm" variant="solid" colorScheme="green" m={1}>
          Robots Building Education
        </Tag>
      ) : null}
      {isNew ? (
        <Tag
          size="sm"
          variant="solid"
          colorScheme="cyan"
          m={1}
          height="fit-content"
        >
          {translation[localStorage.getItem("userLanguage")]["label.new"]}
        </Tag>
      ) : null}
      {grade ? (
        <Tag
          size="sm"
          variant="solid"
          bg={
            grade === translation[userLanguage]["tags.grade"] + "100"
              ? "green.100"
              : "green.100"
          }
          color={
            grade === translation[userLanguage]["tags.grade"] + "100"
              ? "green"
              : "#F484A6"
          }
        >
          {grade}
        </Tag>
      ) : null}

      {grade ? null : (
        <>
          {" "}
          <br /> <br />
        </>
      )}
    </>
  );
};
