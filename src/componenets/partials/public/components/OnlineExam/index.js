import React, { useState, useEffect } from "react";
import Axios from "axios";

import "../../../../../assets/public/css/pages/_onlineExam.scss";

import ExamMetaData from "./ExamMetaData";
import AnswerSheet from "./AnswerSheet";
import { withRouter, Redirect } from "react-router-dom";
import Exams from "./Exams";
import { notificationAlert } from "../../../../../utils/shared";

function OnlineExam(props) {
  const examId = props.match.params.examId;
  const courseId = props.match.params.courseId;

  const [examInfo, setExamInfo] = useState([]);
  const [courseInfo, setCourseInfo] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [warningMessage, setWarningMessage] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  const [isRedirect, setIsRedirect] = useState(false);

  const [display, setDisplay] = useState("");

  useEffect(() => {
    handleStartExam();
    getSingleExam();
    userSigin();
  }, []);

  const startTimer = (duration) => {
    let timer = duration,
      minutes,
      seconds;
    setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      setDisplay(minutes + ":" + seconds);

      if (timer === 0 || timer < 0) {
        setErrorMessage("زمان امتحان به اتمام رسیده است.");
        window.location.reload();
      }

      if (--timer < 0) {
        timer = duration;
      }
    }, 1000);
  };

  const getSingleExam = () => {
    let data = new FormData();
    data.append("exam_id", examId);
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_HOME_GET_SINGLE_EXAM,
      method: "POST",
      withCredentials: true,
      data,
    })
      .then((res) => {
        try {
          // console.log(res.data.data);
          setExamInfo(res.data.data ? res.data.data : []);
          // startTimer(res.data.data.duration * 60);
          setCourseInfo(res.data.data.course_id ? res.data.data.course_id : []);
        } catch (e) {
          // console.log(e);
        }
      })
      .catch((e) => {
        // console.log(e);
      });
  };

  const userSigin = () => {
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_GET_USER_INFORMATION,
      withCredentials: true,
      method: "POST",
    }).then((res) => {
      try {
        setUserInfo(res.data.data);
      } catch (e) {}
    });
  };

  const handleTerminateExam = (exam_id, answer) => {
    let data = new FormData();
    data.append("exam_id", exam_id);
    data.append("question_answer", JSON.stringify(answer));

    // for (var key of data.entries()) {
    //   console.log(key[0] + ", " + key[1]);
    // }

    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_SUBMIT_COURSE_EXAM,
      method: "POST",
      data,
      withCredentials: true,
    }).then((res) => {
      // console.log(res.data);
      try {
        notificationAlert(
          res.data.success === false ? "خطا !" : "انجام شد!",
          res.data.message,
          res.data.success === false ? "error" : "success"
        );
        if (res.data.success) setIsRedirect(true);
      } catch (e) {
        // console.log(e);
      }
    });
  };

  const handleStartExam = () => {
    let data = new FormData();
    data.append("exam_id", examId);
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_START_COURSE_EXAM,
      method: "POST",
      withCredentials: true,
      data,
    })
      .then((res) => {
        try {
          // console.log("this", res.data.data);
          if (res.data.success === true) {
            let firstDate = new Date(Date.parse(res.data.data.start_time)),
              secondDate = new Date(),
              firstDateInSeconds = firstDate.getTime() / 1000,
              secondDateInSeconds = secondDate.getTime() / 1000,
              difference = Math.floor(
                Math.abs(secondDateInSeconds - firstDateInSeconds)
              );
            if (difference > 60) {
              // console.log(difference + " secound");
            } else if (difference > 3600) {
              // console.log(difference / 60 + " minutes");
            } else if (difference > 43200) {
              // console.log(difference / 3600 + " hours");
            }
            // console.log(difference);
            // console.log(res.data.data.exam_id.duration * 60);
            let remaining_time =
              res.data.data.exam_id.duration * 60 - difference;
            if (remaining_time <= 0) {
              // زمان امتحان به اتمام رسیده است
              let answer = [];
              for (let i = 1; i <= res.data.data.total_question; i++) {
                answer.push({ index: `${i}`, answer: "0" });
              }
              handleTerminateExam(res.data.data.exam_id._id, answer);
            } else if (remaining_time === 300) {
              setWarningMessage(
                "کمتر از 5 دقیقه به اتمام امتحان باقی مانده، لطفا قبل از اتمام پاسخ نامه خود را ارسال کنید، در غیر این صورت نمره صفر برای شما در نظر گرفته میشود."
              );

              startTimer(remaining_time);
            } else {
              // console.log(remaining_time);
              startTimer(remaining_time);
            }
            // startTimer(res.data.data.exam_id.duration * 60);
          } else if (res.data.err === true) {
            setErrorMessage(res.data.message);
          }
        } catch (e) {
          // console.log(e);
        }
      })
      .catch((e) => {
        // console.log(e);
      })
      .finally(() => {
        setIsLoaded(true);
      });
  };

  if (isRedirect) return <Redirect to={`/student/all-report-card`} />;

  return (
    <section className="azmoon-wrapper">
      <div className="azmoon-aside">
        <div className="w18">
          <h2>پاسخ نامه</h2>
          <ExamMetaData
            examInfo={examInfo}
            courseInfo={courseInfo}
            userInfo={userInfo}
          />
          {!errorMessage && isLoaded && (
            <AnswerSheet
              examId={examInfo._id}
              courseId={courseId}
              question_count={examInfo.question_count}
            />
          )}
        </div>
      </div>

      <div className="azmoon-box">
        <div className="test-time">
          مدت زمان آزمون <span>{examInfo.duration} دقیقه</span> - زمان باقی
          مانده <span id="countdown">{display}</span> دقیقه
        </div>

        <div className="text-center">
          {warningMessage && (
            <>
              <br />
              <br />
              <div className="alert alert-warning" role="alert">
                warningMessage
              </div>
            </>
          )}

          {errorMessage && (
            <>
              <br />
              <br />
              <div className="alert alert-danger" role="alert">
                {errorMessage}
              </div>
            </>
          )}
        </div>
        {!errorMessage && isLoaded && <Exams examInfo={examInfo} />}
      </div>
    </section>
  );
}
export default withRouter(OnlineExam);
