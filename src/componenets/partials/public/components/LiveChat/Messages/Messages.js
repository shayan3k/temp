import React, { useRef, useEffect } from "react";
import Message from "./Message/Message";

const Messages = (props) => {
  const theRef = useRef(null);

  const scrollToBottom = () => {
    if (theRef.current) theRef.current.scrollTop = Number.MAX_SAFE_INTEGER;
    // console.log(theRef);
  };
  useEffect(scrollToBottom, [props]);

  return (
    <div className="messages" ref={theRef}>
      {props.messages.map((message, i) => (
        <div key={i}>
          <Message message={message} name={props.name} />
        </div>
      ))}
    </div>
  );
};

export default Messages;
