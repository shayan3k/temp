import React from "react";
import moment from "moment";
// import './Message.css';

import ReactEmoji from "react-emoji";

const Message = ({ message: { text, user, time }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div className="messageContainer justifyEnd">
      <p className="sentText pr-10">{trimmedName}</p>
      <div className="messageBox backgroundBlue">
        <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
      </div>
      <p className="sentText pl-10 ">{moment(time).format("h:mm")}</p>
    </div>
  ) : (
    <div className="messageContainer justifyStart">
      <p className="sentText pl-10 ">{moment(time).format("h:mm")}</p>
      <div className="messageBox backgroundLight">
        <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
      </div>
      <p className="sentText pl-10 ">{user}</p>
    </div>
  );
};

export default Message;
