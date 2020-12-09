import React from "react";
import PropTypes from "prop-types";
import { getPersianDate } from "../../../../../utils/shared";
import DangerouslySetInnerHTML from "../../../shared/components/DangerouslySetInnerHTML";
function CommentItems({ ...props }) {
  return (
    <div className="comment-item">
      <div className="image">
        <img
          src={
            process.env.REACT_APP_IMAGE_URL +
            "/" +
            process.env.REACT_APP_ADMIN_TESTIMONIAL_IMAGE_PATH +
            props.student_img
          }
          alt="student"
          title="student"
        />
      </div>
      <div className="content">
        <ul className="head">
          <li className="title"><i className="fas fa-user"></i> <span>{props.student_name}</span></li>
          <li className="date"><i className="fas fa-clock"></i> <span>{getPersianDate(props.createdAt)}</span></li>
        </ul>
        <DangerouslySetInnerHTML message={props.comment_text} />
      </div>
    </div>
  );
}
CommentItems.propTypes = {
  student_img: PropTypes.string.isRequired,
  student_name: PropTypes.string.isRequired,
  comment_text: PropTypes.string.isRequired,
};
export default CommentItems;
