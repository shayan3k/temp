import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function TeacherSingle({ ...props }) {
  // console.log(props);
  return (
    <div className={props.col}>
      <div className="teacher-item">
        <Link to={`/single-teacher/${props.id}`}>
          <div className="image">
            <img
              src={
                `${process.env.REACT_APP_IMAGE_URL}/${process.env.REACT_APP_ADMIN_TEACHER_IMAGE_PATH}` +
                props.image
              }
              alt={props.lastname}
              title={props.lastname}
            />
            {/* <img src={props.image} alt={props.name} title={props.name} /> */}
          </div>
          <h5>{props.name}</h5>
          <p>{props.diploma}</p>
        </Link>
      </div>
    </div>
  );
}

TeacherSingle.propTypes = {
  col: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  diploma: PropTypes.string.isRequired,
};

export default TeacherSingle;
