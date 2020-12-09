import React from "react";
import { Link } from "react-router-dom";
import { getPersianDate } from "../../../../../utils/shared";
function AssignmentItems({ ...props }) {
  return (
    <tr>
      <td>
        {props.item.session_id.course_id &&
          props.item.session_id.course_id.title}
      </td>
      <td>{props.item.session_id.subject}</td>
      <td>
        {" "}
        {props.item.user_id.name} {props.item.user_id.lastname}{" "}
      </td>
      <td>{getPersianDate(props.item.createdAt)}</td>
      <td>
        <Link
          to={`/admin/get-single-assignment/${props.item._id}`}
          className="btn btn-success pt-2 hint--top"
          aria-label="مشاهده"
        >
          <i className="icon-pencil"></i>
        </Link>

        <button
          className="btn btn-danger pt-2 hint--top"
          aria-label="حذف"
          onClick={(e) => {
            props.DeleteItem(props.item._id);
          }}
        >
          <i className="icon-trash"></i>
        </button>
      </td>
    </tr>
  );
}
export default AssignmentItems;
