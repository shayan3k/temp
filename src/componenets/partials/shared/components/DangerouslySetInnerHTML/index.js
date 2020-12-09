import React from "react";
import Linkify from "react-linkify";

export default function index(props) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: props.substring
          ? props.message.substring(0, props.substring) + "..."
          : props.message,
      }}
    ></div>
  );
}
