import React from "react";
import Message from "./Message";
import { List } from "semantic-ui-react";

const MessageList = props => {
  const { myUserName, messages } = props;
  return (
    <List>
      {messages.map(msg => (
        <Message key={msg.id} myUserName={myUserName} message={msg} />
      ))}
    </List>
  );
};

export default MessageList;
