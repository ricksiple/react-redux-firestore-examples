import React from "react";
import { Modal } from "semantic-ui-react";

const AnotherModal = (props) => {
  const {onClose} = props;
  return (
    <Modal closeIcon="close" open={true} onClose={onClose}>
      <Modal.Header>Test Modal</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <p>Another Test Modal...nothing to see here</p>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default AnotherModal;
