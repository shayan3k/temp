import React from "react";
import PropTypes from "prop-types";
function RankingWrapperItems({ ...props }) {
  return (
    <li>
      <i className="fas fa-school"></i>
      <h5>{props.title}</h5>
      <p>{props.text}</p>
    </li>
  );
}
RankingWrapperItems.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
export default RankingWrapperItems;
