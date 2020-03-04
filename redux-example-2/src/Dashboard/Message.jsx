import React from "react";
import { List } from "semantic-ui-react";
import './Message.css'

const Message = props => {
  const { myUserName } = props
  const { userName, msgDate, msgTime, body } = props.message;

  return (
    <List.Item>
      <div className={userName === myUserName ? "message self" : "message other"}>
        <div>
          <span className="message-header user">{userName}</span>
          <span className="message-header">
            on {msgDate} at {msgTime}
          </span>
        </div>
        <div>{body}</div>
      </div>
    </List.Item>
  );
};

export default Message;
