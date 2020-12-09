import React, { useState, useEffect } from "react";
import Axios from "axios";
import { notificationAlert } from "../../../../../utils/shared";
import { Link } from "react-router-dom";
export default function ActiveExams() {
  const [examInfo, setExamInfo] = useState("");
  const [answer, setAnswer] = useState([]);

  useEffect(() => {
    getActiveExams();
  }, []);

  const getActiveExams = () => {
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_USER_GET_ACTIVE_EXAM,
      method: "POST",
      withCredentials: true,
    }).then((res) => {
      try {
        // console.log(res.data.data);
        let input = [...answer];
        for (let i = 1; i <= res.data.data.question_count; i++) {
          input.push({ index: `${i}`, answer: "0" });
        }
        setAnswer(input);

        setExamInfo(res.data.data.exam_id);
      } catch (e) {
        // console.log(e);
      }
    });
  };

  const handleTerminateExam = () => {
    let data = new FormData();
    data.append("exam_id", examInfo._id);
    data.append("question_answer", JSON.stringify(answer));

    for (var key of data.entries()) {
      console.log(key[0] + ", " + key[1]);
    }

    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_SUBMIT_COURSE_EXAM,
      method: "POST",
      data,
      withCredentials: true,
    }).then((res) => {
      console.log(res.data);
      try {
        notificationAlert(
          res.data.success === false ? "خطا !" : "انجام شد!",
          res.data.message,
          res.data.success === false ? "error" : "success"
        );
        if (res.data.success) setExamInfo("");
      } catch (e) {
        // console.log(e);
      }
    });
  };

  console.log(examInfo);
  if (examInfo) {
    return (
      <div>
        <div className="alert alert-danger " role="alert">
          شما یک امتحان فعال با عنوان {examInfo.title} دارید و تا خاتمه ی این
          امتحان قادر به شروع امتحان دیگری نمی باشید.{" "}
          <button
            type="button"
            className="btn btn-danger mx-2"
            onClick={handleTerminateExam}
          >
            خاتمه امتحان
          </button>
          <Link
            to={`/single-exam/undefined/${examInfo._id}`}
            className="btn btn-primary mx-2"
          >
            ادامه امتحان
          </Link>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
