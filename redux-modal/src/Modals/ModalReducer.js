const initialState = null;

const types = {
  MODAL_OPEN: "MODAL_OPEN",
  MODAL_CLOSE: "MODAL_CLOSE"
};

export const actions = {
  openModal: (modalType, modalProps) => ({
    type: types.MODAL_OPEN,
    modalType: modalType,
    modalProps: modalProps
  }),
  closeModal: () => ({ type: types.MODAL_CLOSE })
};

const handlers = {
  openModal: (state, modalType, modalProps) => {
    return {
      modalType,
      modalProps
    };
  },
  closeModal: state => {
    return null;
  }
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.MODAL_OPEN:
      return handlers.openModal(state, action.modalType, action.modalProps);
    case types.MODAL_CLOSE:
      return handlers.closeModal(state);
    default:
      return state;
  }
};

export default reducer;
