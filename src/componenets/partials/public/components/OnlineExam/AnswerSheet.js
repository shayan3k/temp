import React, { useState, useEffect } from "react";
import Axios from "axios";
import AnswerItems from "./AnswerItems";
import { Redirect } from "react-router-dom";

export default function AnswerSheet(props) {
  const { examId, question_count, courseId } = props;
  const [answer, setAnswer] = useState([]);
  const [disabledButton, setDisabledButton] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [isRedirect, setIsRedirect] = useState(false);

  useEffect(() => {
    handelDefaultAnswer();
  }, []);

  useEffect(() => {
    if (props.clock) handleFomSubmit();
  }, [props.clock]);

  const handleFomSubmit = (e) => {
    e.preventDefault();
    setDisabledButton(true);
    let data = new FormData();
    data.append("exam_id", examId);
    data.append("question_answer", JSON.stringify(answer));

    // for (var key of data.entries()) {
    //   console.log(key[0] + ", " + key[1]);
    // }

    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_SUBMIT_COURSE_EXAM,
      method: "POST",
      withCredentials: true,
      data,
    })
      .then((res) => {
        try {
          // console.log(res.data);
          if (res.data.err === true) {
            setErrorMessage(res.data.message); //جواب دادن به همه سوالات الزامی است
          }
          if (res.data.success === true) {
            setIsRedirect(true);
          }
        } catch (e) {
          // console.log(e);
        }
      })
      .catch((e) => {
        // console.log(e);
      })
      .finally(() => {
        setDisabledButton(false);
      });
  };

  // input sample for answer
  // const input = [
  //   {
  //     index: 1,  // question_index
  //     answer: 2,
  //   },
  //   {
  //     index: 2,
  //     answer: 2,
  //   },
  // ];

  // CONVERT ANSWERS TO ABOVE FORMAT
  let defaultInput = [...answer];
  const handelDefaultAnswer = () => {
    for (let index = 1; index <= props.question_count; index++) {
      defaultInput.push({ index: `${index}`, answer: "0" });
    }
    setAnswer(defaultInput);
  };

  const hanleSetAnswer = (e) => {
    const { name, value } = e.target;
    answer.map((item) => {
      if (item.index === name) {
        item.answer = value;
      }
    });
    setAnswer(answer);
  };

  // eejad answer_item be teadad soalat
  const answerItems = [];
  for (let index = 1; index <= question_count; index++) {
    answerItems.push(
      <AnswerItems
        key={index}
        title={`جواب سوال ${index}`}
        index={index}
        hanleSetAnswer={hanleSetAnswer}
      />
    );
  }

  if (isRedirect) return <Redirect to={`/student/all-report-card`} />;

  return (
    <>
      {errorMessage && (
        <div className="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      )}

      {question_count !== 0 && (
        <form onSubmit={handleFomSubmit}>
          {answerItems}
          <button className="btn btn-success" disabled={disabledButton}>
            ثبت و ارسال پاسخنامه
          </button>
        </form>
      )}
      {question_count === 0 && (
        <div className="alert alert-danger" role="alert">
          برای امتحان مورد نظر پاسخنامه ثبت نشده است
        </div>
      )}
    </>
  );
}
