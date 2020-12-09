import React from "react";
import { Link } from "react-router-dom";
function TeacherItemList({ ...props }) {
  return (
    <div className="item">
      <div className="teacher-item">
        <Link to={`/single-teacher/${props.teacher_id}`}>
          <img
            src={
              process.env.REACT_APP_IMAGE_URL +
              "/" +
              process.env.REACT_APP_ADMIN_TEACHER_IMAGE_PATH +
              props.image
            }
            alt={props.teacher_name}
            title={props.teacher_name}
          />
          <p className="title">{props.teacher_name}</p>
          <p className="desc">{props.description}</p>
        </Link>
      </div>
    </div>
  );
}
export default TeacherItemList;
