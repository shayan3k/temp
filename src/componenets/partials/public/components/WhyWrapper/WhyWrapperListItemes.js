import React from "react";
import PropTypes from "prop-types";
function WhyWrapperListItemes({ ...props }) {
  return (
    <li>
      <img src={props.image} alt="icon" title="icon" />
      <h4>{props.title}</h4>
    </li>
  );
}
WhyWrapperListItemes.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
export default WhyWrapperListItemes;
