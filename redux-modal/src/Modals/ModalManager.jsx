import React from "react";
import { connect } from "react-redux";

import TestModal from "./TestModal";

const modalLookup = {
  TestModal
};

const mapStateToProps = state => ({
  currentModal: state.modals
});

const ModalManager = (props) => {
  const { currentModal } = props;
  let renderedModal;

  if (currentModal) {
    const { modalType, modalProps } = currentModal;
    const ModalComponent = modalLookup[modalType];
    renderedModal = <ModalComponent {...modalProps} />;
  }
  return <span>{renderedModal}</span>;
};

export default connect(mapStateToProps)(ModalManager);
