import React from "react";
import { Link } from "react-router-dom";

function TeacherListItems({ ...props }) {
  return (
    <tr>
      <td>
        <img
          src={
            `${process.env.REACT_APP_IMAGE_URL}/${process.env.REACT_APP_ADMIN_TEACHER_IMAGE_PATH}` +
            props.image
          }
          alt={props.full_name}
          title={props.full_name}
        />
      </td>
      <td>
        {props.name} {props.lastname}
      </td>
      <td>{props.sex}</td>
      <td>{props.diploma}</td>
      <td>
        <Link
          to={`/admin/update-teacher/${props.id}`}
          className="btn btn-primary hint--top"
          aria-label="ویرایش"
        >
          <i className="icon-pencil ml-1"></i>
          ویرایش
        </Link>
      </td>
    </tr>
  );
}
export default TeacherListItems;
