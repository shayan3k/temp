import React, { useState, useEffect } from "react";
import Axios from "axios";
import { withRouter, Redirect } from "react-router-dom";
import { notificationAlert } from "../../../../../utils/shared";
import GetAllExam from "../../../shared/components/GetAllExam";
function CreateExamQuestionnaire({ ...props }) {
  const examQuestionId = props.match.params.id;

  const [examId, setExamId] = useState(
    props.match.params.examId ? props.match.params.examId : ""
  );
  const [index, setIndex] = useState("");
  const [answer, setAnswer] = useState("");

  const [disabledButton, setDisabledButton] = useState(false);
  const [isRedirect, setIsRedirect] = useState(false);
  const [isRedirect404, setIsRedirect404] = useState(false);

  useEffect(() => {
    if (examQuestionId) {
      getSingleExamQuestionnaire();
    }
  }, []);

  const getSingleExamQuestionnaire = () => {
    let data = new FormData();
    if (examQuestionId) {
      data.append("id", examQuestionId);
    }
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_ADMIN_GET_SINGLE_EXAM_QUESTIONNARE,
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      method: "POST",
      data,
    })
      .then((res) => {
        if (res.data.err === true) {
          setIsRedirect404(true);
        }
        setExamId(res.data.data.exam_id);
        setIndex(res.data.data.index);
        setAnswer(res.data.data.answer);
      })
      .catch((e) => {
        // console.log(e);
      });
  };

  const handleFormOnSubmit = (e) => {
    e.preventDefault();
    setDisabledButton(true);
    let data = new FormData();

    if (examQuestionId) {
      data.append("id", examQuestionId);
    } else {
      data.append("exam_id", examId);
    }

    data.append("index", index);
    data.append("answer", answer);

    // for (var key of data.entries()) {
    //   console.log(key[0] + ", " + key[1]);
    // }

    const myUrl = examQuestionId
      ? process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_UPDATE_EXAM_QUESTIONNAIRE
      : process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_CREATE_EXAM_QUESTIONNAIRE;
    // console.log(myUrl);

    Axios({
      url: myUrl,
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      method: "POST",
      data,
    })
      .then((res) => {
        // console.log(res.data);
        notificationAlert(
          res.data.success === false ? "خطا !" : "انجام شد!",
          res.data.message,
          res.data.success === false ? "error" : "success"
        );
        if (res.data.success === true) setIsRedirect(true);
      })
      .catch((e) => {
        // console.log(e);
      })
      .finally(() => {
        setDisabledButton(false);
      });
  };

  if (isRedirect404) return <Redirect to="/404" />;

  if (isRedirect)
    return <Redirect to={`/admin/get-exam-questionnaire/${examId}`} />;
  return (
    <section className="form-wrapper has-icon wrapper">
      <h2 className="section-title">
        {examQuestionId ? "ویرایش سوال" : "افزودن سوال"}
      </h2>
      <form className="row" onSubmit={handleFormOnSubmit}>
        <div className="col-md-6 form-group">
          <label htmlFor="index">
            شماره سوال <i className="icon-user"></i>
          </label>
          <input
            className="form-control"
            type="number"
            name="index"
            id="index"
            value={index}
            placeholder="شماره سوال"
            onChange={(e) => {
              setIndex(e.target.value);
            }}
          />
        </div>

        <GetAllExam disabled={true} examId={examId} setExamId={setExamId} />

        <div className="col-md-6 form-group">
          <label htmlFor="negative_type">
            پاسخ<i className="icon-map"></i>
          </label>
          <select
            name="negative_type"
            id="negative_type"
            className="form-control"
            onChange={(e) => setAnswer(e.target.value)}
            value={answer}
          >
            <option value="DEFAULT">انتخاب کنید</option>
            <option value="1"> گزینه 1</option>
            <option value="2"> گزینه 2</option>
            <option value="3"> گزینه 3</option>
            <option value="4"> گزینه 4</option>
          </select>
        </div>

        <div className="col-12 col-md-12 form-group">
          <button
            type="submit"
            disabled={disabledButton}
            className="btn btn-success submit-exam py-3 px-4"
          >
            {examQuestionId ? "ویرایش سوال" : "ثبت سوال"}
          </button>
        </div>
      </form>
    </section>
  );
}
export default withRouter(CreateExamQuestionnaire);
