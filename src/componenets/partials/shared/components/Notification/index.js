import React from "react";
import PropTypes from "prop-types";
function Notification({ ...props }) {
  return (
    <button id="showInfo" className={`btn btn-${props.type}`}>
      {props.text}
    </button>
  );
}
Notification.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
export default Notification;
