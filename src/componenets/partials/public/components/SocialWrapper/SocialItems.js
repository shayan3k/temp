import React from "react";
import ImprovedLink from "../../../../../utils/ImprovedLink";
import PropTypes from "prop-types";
function SocialItems({ ...props }) {
  return (
    <div className="item">
      <ImprovedLink to={`${props.link}`}>
        <img src={props.social_img} alt="manshouredanesh" />
      </ImprovedLink>
    </div>
  );
}
SocialItems.propTypes = {
  social_img: PropTypes.string.isRequired,
};
export default SocialItems;
