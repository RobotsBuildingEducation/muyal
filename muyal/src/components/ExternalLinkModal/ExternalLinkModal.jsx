import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Text,
  Checkbox,
  Button,
  ModalCloseButton,
  Link,
} from "@chakra-ui/react";

const ExternalLinkModal = ({
  isOpen,
  onClose,
  dontShowAgain,
  setDontShowAgain,
  onConfirm,
  translation,
  userLanguage,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {translation[userLanguage]["modal.externalLinkTitle"]}
          <ModalCloseButton />
        </ModalHeader>
        <ModalBody>
          <Text>{translation[userLanguage]["modal.externalLinkBody"]}</Text>
          <Checkbox
            colorScheme="green"
            mt={4}
            isChecked={dontShowAgain}
            onChange={(e) => setDontShowAgain(e.target.checked)}
          >
            {translation[userLanguage]["modal.dontShowAgain"]}
          </Checkbox>
          <br />
          <br />
          <Link
            onMouseDown={onConfirm}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                onConfirm();
              }
            }}
            textDecoration={"underline"}
          >
            {translation[userLanguage]["modal.continue"]}
          </Link>
        </ModalBody>

        <ModalFooter>
          <Button
            onMouseDown={onClose}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                onClose();
              }
            }}
            mr={3}
          >
            {translation[userLanguage]["modal.cancel"]}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ExternalLinkModal;
