import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import {
  getPersianFullDate,
  notificationAlert,
} from "../../../../../utils/shared";

export default function ExamRowItems(props) {
  console.log(props);
  const [isRedirectExamSingle, setIsRedirectExamSingle] = useState(false);
  const [examId, setExamId] = useState(false);

  const checkExamStartTime = (e) => {
    let exam_date = e.target.value;
    let duration = e.target.attributes.getNamedItem("duration").value;
    let exam_id = e.target.attributes.getNamedItem("exam_id").value;
    setExamId(exam_id);
    let date = new Date();
    let currentDate = date.toISOString();

    let firstDate = new Date(exam_date),
      secondDate = new Date(currentDate),
      firstDateInSeconds = firstDate.getTime() / 1000,
      secondDateInSeconds = secondDate.getTime() / 1000,
      difference = Math.abs(firstDateInSeconds - secondDateInSeconds);
    if (secondDateInSeconds < firstDateInSeconds) {
      if (difference > 43200) {
        let time = Math.floor(difference / 3600);
        notificationAlert(
          "خطا !",
          `${time}  ساعت تا شروع امتحان مانده، لطفا در زمان مورد نظر مراجعه نمایید.`,
          "error"
        );
      } else if (difference > 3600) {
        let time = Math.floor(difference / 60);
        notificationAlert(
          "خطا !",
          `${time}  دقیقه تا شروع امتحان مانده، لطفا در زمان مورد نظر مراجعه نمایید.`,
          "error"
        );
      } else if (difference > 60) {
        let time = Math.floor(difference);
        notificationAlert(
          "خطا !",
          `${time}  ثانیه تا شروع امتحان مانده، لطفا در زمان مورد نظر مراجعه نمایید.`,
          "error"
        );
      }
    } else if (secondDateInSeconds > firstDateInSeconds + duration * 60) {
      notificationAlert("خطا !", "متاسفانه زمان امتحان منقضی شده", "error");
    } else if (
      firstDateInSeconds <= secondDateInSeconds &&
      secondDateInSeconds <= firstDateInSeconds + duration * 60
    ) {
      setIsRedirectExamSingle(true);
      // props.history.push(`/single-exam/${exam_id}`);
    }
  };
  if (isRedirectExamSingle)
    return <Redirect to={`/single-exam/${props.courseId}/${examId}`} />;

  return (
    <ul>
      <li>
        {/* <Link to={`/single-exam/${item.id}`}>{item.title}</Link> */}
        {props.title}
      </li>
      <li>
        <p className="hint--bottom"> نوع {props.category} </p>
      </li>
      <li>
        <p> {props.duration} دقیقه </p>
      </li>
      <li>
        <p> {getPersianFullDate(props.start_time)} </p>
      </li>
      <li>
        <button
          className="btn btn-success btn-sm"
          value={props.start_time}
          duration={props.duration}
          exam_id={props.id}
          onClick={checkExamStartTime}
        >
          شروع امتحان
        </button>
      </li>
    </ul>
  );
}
