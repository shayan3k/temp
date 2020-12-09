import React from "react";

export default function NewAlert(props) {
  //Used for User National Id Upload to show the status
  return (
    <div
      className={"alert alert-" + props.status + " alert-dismissible fade show"}
      role="alert"
    >
      <strong> {props.children}</strong>
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
}
