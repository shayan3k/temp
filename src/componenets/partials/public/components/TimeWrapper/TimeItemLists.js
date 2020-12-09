import React from "react";
import { Link } from "react-router-dom";
import { getPersianDate } from "../../../../../utils/shared";

function TimeItemLists(props) {
  return (
    <div className="item">
      <div className="time-item">
        <div className="title-box">
          <span>{props.item.course_id.title}</span>
        </div>
        <h3>
          <Link
            to={`/single-course/${props.item.course_id._id}`}
            key={props.item.course_id._id}
          >
            {props.item.subject}
          </Link>
        </h3>
        <small> تاریخ برگذاری: {getPersianDate(props.item.start_time)} </small>
      </div>
    </div>
  );
}

export default TimeItemLists;
