import React, { useState, useEffect } from "react";
import axios from "axios";
import { getPersianDateWithSeconds } from "../../../../../utils/shared";
import { withRouter, Redirect } from "react-router-dom";

function AdminGetSingleAssignment(props) {
  const assignmentId = props.match.params.id;
  const [assignmentInfo, setAssignmentInfo] = useState([]);
  const [sessionInfo, setSessionInfo] = useState([]);
  const [namename, setUsername] = useState("");
  const [lastname, setLastname] = useState("");
  const [isRedirect404, setIsRedirect404] = useState(false);

  useEffect(() => {
    getAllAssignment();
    userSigin();
  }, []);

  const getAllAssignment = () => {
    let data = new FormData();
    data.append("id", assignmentId);
    axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_ADMIN_GET_SINGLE_ASSIGNMENT,
      withCredentials: true,
      method: "post",
      data,
    }).then((res) => {
      try {
        // console.log(res.data.data);
        if (res.data.err === true) {
          setIsRedirect404(true);
        }
        setAssignmentInfo(res.data.data ? res.data.data : []);
        setSessionInfo(res.data.data.session_id);
      } catch (e) {}
    });
  };
  const userSigin = () => {
    axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_GET_USER_INFORMATION,
      withCredentials: true,
      method: "POST",
    }).then((res) => {
      try {
        setUsername(res.data.data.name);
        setLastname(res.data.data.lastname);
      } catch (e) {}
    });
  };

  if (isRedirect404) return <Redirect to="/404" />;

  return (
    <div>
      <div>
        <section className="wrapper">
          <h2 className="section-title">
            تکلیف {namename} {lastname}
          </h2>
          <hr />
          <div className="container-fluid">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col col-md-12 py-3 my-3">
                    <img
                      src={
                        `${process.env.REACT_APP_IMAGE_URL}/${process.env.REACT_APP_USER_UPLOAD_ASSIGNMENT}` +
                        assignmentInfo.image
                      }
                      className="rounded mx-auto d-block"
                      alt={assignmentInfo.session_id}
                    />
                  </div>

                  <div className="col col-md-6">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item"> عنوان درس </li>
                      <li className="list-group-item"> عنوان جلسه </li>
                      <li className="list-group-item"> نام استاد </li>
                      <li className="list-group-item"> تاریخ ارسال </li>
                    </ul>
                  </div>
                  <div className="col col-md-6">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        {sessionInfo.course_id && sessionInfo.course_id.title}
                      </li>
                      <li className="list-group-item">
                        {sessionInfo && sessionInfo.subject}
                      </li>
                      <li className="list-group-item">
                        {sessionInfo.course_id &&
                          sessionInfo.course_id.teacher_id.name}{" "}
                        {sessionInfo.course_id &&
                          sessionInfo.course_id.teacher_id.lastname}
                      </li>

                      <li className="list-group-item">
                        {getPersianDateWithSeconds(assignmentInfo.createdAt)}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
export default withRouter(AdminGetSingleAssignment);
