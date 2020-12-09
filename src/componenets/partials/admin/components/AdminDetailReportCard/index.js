import React, { useState, useEffect } from "react";
import axios from "axios";
import { withRouter, Redirect } from "react-router-dom";

function AdminDetailReportCard(props) {
  const examId = props.match.params.id;
  const [reportCardInfo, setReportCardInfo] = useState([]);
  const [userInfo, setUserInfo] = useState("");
  const [examInfo, setExamInfo] = useState("");
  const [isRedirect404, setIsRedirect404] = useState(false);

  useEffect(() => {
    getSingleExamRecord();
  }, []);

  const getSingleExamRecord = () => {
    let data = new FormData();
    data.append("id", examId);
    // for (var key of data.entries()) {
    //   console.log(key[0] + ", " + key[1]);
    // }
    axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_ADMIN_SINGLE_EXAM_RECORD,
      withCredentials: true,
      method: "post",
      data,
    })
      .then((res) => {
        try {
          console.log(res.data);
          if (res.data.err === true) {
            setIsRedirect404(true);
          }
          setUserInfo(res.data.data.user);
          setExamInfo(res.data.data.exam_id);
          setReportCardInfo(res.data.data ? res.data.data : []);
        } catch (e) {}
      })
      .finally(() => {});
  };

  if (isRedirect404) return <Redirect to="/404" />;

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
        </div>
      </section>
    </div>
  );
}
export default withRouter(AdminDetailReportCard);
