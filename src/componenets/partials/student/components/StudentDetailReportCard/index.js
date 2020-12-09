import React, { useState, useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

function StudentDetailReportCard(props) {
  const reportId = props.match.params.reportId;
  const examId = props.match.params.examId;

  const [reportCardInfo, setReportCardInfo] = useState([]);
  const [answerInfo, setAnswerInfo] = useState([]);
  const [userInfo, setUserInfo] = useState("");
  const [examInfo, setExamInfo] = useState("");

  useEffect(() => {
    getSingleExamRecord();
    getExamQuestionnaire();
  }, []);

  const getSingleExamRecord = () => {
    let data = new FormData();
    data.append("id", reportId.toString());
    // for (var key of data.entries()) {
    //   console.log(key[0] + ", " + key[1]);
    // }
    axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_SINGLE_EXAM_RECORD,
      withCredentials: true,
      method: "post",
      data,
    })
      .then((res) => {
        try {
          // console.log(res.data);
          setUserInfo(res.data.data.user);
          setExamInfo(res.data.data.exam_id);
          setReportCardInfo(res.data.data ? res.data.data : []);
        } catch (e) {}
      })
      .finally(() => {});
  };

  //گرفتن پاسخنامه
  const getExamQuestionnaire = () => {
    let data = new FormData();
    data.append("id", examId.toString());
    // for (var key of data.entries()) {
    //   console.log(key[0] + ", " + key[1]);
    // }
    axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_GET_EXAM_QUESTIONNAIRE,
      withCredentials: true,
      method: "post",
      data,
    }).then((res) => {
      try {
        // console.log(res.data.data);
        setAnswerInfo(res.data.data ? res.data.data : []);
      } catch (e) {}
    });
  };

  return (
    <div>
      <section className="wrapper">
        <h2 className="section-title">
          جزییات کارنامه
          <hr />
        </h2>
        <div className="container-fluid">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col col-md-6">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item"> نام داوطلب </li>
                    <li className="list-group-item"> نام پدر</li>
                    <li className="list-group-item"> نام مدرسه </li>
                    <li className="list-group-item"> پاسخ صحیح </li>
                    <li className="list-group-item"> پاسخ غلط </li>
                    <li className="list-group-item"> بدون پاسخ </li>
                    <li className="list-group-item">
                      {" "}
                      نمره کسب شده با احتساب نمره منفی{" "}
                    </li>
                  </ul>
                </div>
                <div className="col col-md-6">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      {userInfo.name} {userInfo.lastname}
                    </li>
                    <li className="list-group-item">{userInfo.father_name}</li>
                    <li className="list-group-item">{userInfo.school}</li>
                    <li className="list-group-item">
                      {reportCardInfo.correct_question}
                    </li>
                    <li className="list-group-item">
                      {reportCardInfo.wrong_question}
                    </li>
                    <li className="list-group-item">
                      {reportCardInfo.blank_question}
                    </li>
                    <li
                      className={`list-group-item ${
                        reportCardInfo.total_point >= examInfo.pass_point
                          ? "text-success"
                          : "text-danger"
                      }`}
                    >
                      {reportCardInfo.total_point}
                      {reportCardInfo.total_point >= examInfo.pass_point
                        ? " (قبول) "
                        : " (مردود) "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="card mt-3">
            <div className="card-body">
              <div className="row">
                <div className="col col-md-6">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item"> عنوان امتحان </li>
                    <li className="list-group-item">نوع امتحان</li>
                    <li className="list-group-item"> تعداد کل سوالات</li>
                    <li className="list-group-item"> نمره منفی </li>
                    <li className="list-group-item"> نمره قبولی </li>
                    <li className="list-group-item"> نمره کل </li>
                  </ul>
                </div>
                <div className="col col-md-6">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item"> {examInfo.title} </li>
                    <li className="list-group-item">{examInfo.category}</li>
                    <li className="list-group-item">
                      {reportCardInfo.total_question}
                    </li>
                    <li className="list-group-item">
                      {examInfo.negative_type === "no-negative"
                        ? "ندارد"
                        : "دارد"}
                    </li>
                    <li className="list-group-item">{examInfo.pass_point}</li>
                    <li className="list-group-item">{examInfo.total_point}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {examInfo.is_show_key === true && (
            <>
              <h4 className="section-title mt-5">
                پاسخنامه
                <hr />
              </h4>
              <div className="card mt-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col col-md-6">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item"> شماره سوال </li>
                        {answerInfo.length > 0 &&
                          answerInfo.map((item, index) => (
                            <li key={index} className="list-group-item">
                              {" "}
                              {item.index}
                            </li>
                          ))}
                      </ul>
                    </div>
                    <div className="col col-md-6">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item"> پاسخ صحیح </li>
                        {answerInfo.length > 0 &&
                          answerInfo.map((item, index) => (
                            <li key={index} className="list-group-item">
                              {" "}
                              {item.answer}
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
export default withRouter(StudentDetailReportCard);
