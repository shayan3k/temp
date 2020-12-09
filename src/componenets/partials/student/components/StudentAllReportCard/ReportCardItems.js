import React from "react";
import { Link } from "react-router-dom";
function DepositItems({ ...props }) {
  return (
    <tr>
      <td>
        {props.username} {props.userLastname}
      </td>
      <td>{props.item.exam_id.title}</td>
      <td>{props.item.total_question}</td>
      <td>{props.item.total_point}</td>

      <td>
        <Link
          to={`/student/detail-report-card/${props.item._id}/${props.item.exam_id._id}`}
          className="btn btn-success pt-2 hint--top"
          aria-label="مشاهده"
        >
          <i className="icon-pencil"></i>
        </Link>
      </td>
    </tr>
  );
}
export default DepositItems;
