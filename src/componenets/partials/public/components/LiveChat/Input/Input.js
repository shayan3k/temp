import React from "react";

// import './Input.css';

const Input = ({ setMessage, sendMessage, message }) => (
  <form className="form">
    <button className="sendButton" onClick={(e) => sendMessage(e)}>
      ثبت
    </button>
    <input
      className="input"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={(event) =>
        event.key === "Enter" ? sendMessage(event) : null
      }
    />
  </form>
);

export default Input;
