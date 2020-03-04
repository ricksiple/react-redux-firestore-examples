import cuid from "cuid";

const actionTypes = {
  SEND: "SEND"
};

const dateFormat = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric"
});
const timeFormat = new Intl.DateTimeFormat("en-US", {
  hour: "numeric",
  minute: "2-digit"
});

const actionHandlers = {
  sendAction: (state, action) => {
    const dt = new Date();

    const message = {
      userName: action.userName,
      msgDate: dateFormat.format(dt),
      msgTime: timeFormat.format(dt),
      body: action.body,
      id: cuid()
    };
    return { messages: [message, ...state.messages] };
  }
};

const actionCreators = {
  rdxSend: (userName, body) => {
    return {
      type: actionTypes.SEND,
      userName: userName,
      body: body,
      fn: actionHandlers.sendAction
    };
  }
};

export default actionCreators;
