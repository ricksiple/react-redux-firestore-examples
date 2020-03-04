import cuid from "cuid";

const initialState = {
  messages: [
    {
      userName: "Bob",
      msgDate: "Dec 5",
      msgTime: "3:21 pm",
      body: "Hey, yourself...",
      id: cuid()
    },
    {
      userName: "Alice",
      msgDate: "Dec 5",
      msgTime: "3:19 pm",
      body: "Hey",
      id: cuid()
    }
  ]
};

export const reducer = (state = initialState, action) => {
  // ternary operator needed because first action is always system generated '@@INIT' action
  return action.fn ? action.fn(state, action) : state;
};
