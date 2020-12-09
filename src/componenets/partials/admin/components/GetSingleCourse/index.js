import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link, withRouter, Redirect } from "react-router-dom";
import SessionItems from "./SessionItems";
import { notificationAlert } from "../../../../../utils/shared";
function GetSingleCourse(props) {
  const courseId = props.match.params.id;
  const [sessionList, setSessionList] = useState([]);
  const [isRedirect404, setIsRedirect404] = useState(false);

  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    geCourseSession();
  }, []);

  const geCourseSession = () => {
    setIsLoaded(false);

    let data = new FormData();
    data.append("id", courseId);
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_ADMIN_GET_SINGLE_COURSE,
      method: "POST",
      data,
      withCredentials: true,
    })
      .then((res) => {
        try {
          // console.log(res.data.data);
          if (res.data.err === true) {
            setIsRedirect404(true);
          }
          setSessionList(res.data.data.sessions ? res.data.data.sessions : []);
        } catch (e) {
          // console.log(e);
        }
      })
      .catch((e) => console.log(e.message))
      .finally(() => setIsLoaded(true));
  };
  //DELETE Session
  const deleteCourseSession = (id) => {
    let data = new FormData();
    data.append("id", id);
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_ADMIN_DELETE_COURSE_SESSION,
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      method: "POST",
      data,
    })
      .then((res) => {
        geCourseSession();
        notificationAlert(
          res.data.success === false ? "خطا !" : "انجام شد!",
          res.data.message,
          res.data.success === false ? "error" : "success"
        );
      })
      .finally(() => {
        return false;
      });
  };
  if (isRedirect404) return <Redirect to="/404" />;

  return (
    <div className="container-fluid">
      <section className="form-wrapper has-icon wrapper">
        <h2 className="section-title">لیست جلسه ها</h2>
        <Link
          to={`/admin/create-course-session/${courseId}`}
          className="btn btn-primary"
        >
          ثبت جلسه جدید
        </Link>
        <hr />
        <div className="container-fluid">
          {isLoaded ? (
            sessionList.length > 0 ? (
              <table className="table table-bordered table-striped text-center">
                <thead className="thead-light">
                  <tr>
                    <th scope="col"> ایندکس </th>
                    <th scope="col">نام جلسه </th>
                    <th scope="col"> زمان شروع </th>
                    <th scope="col"> مدت زمان جلسه </th>
                    <th scope="col"> قیمت </th>
                    <th scope="col">ویرایش / حذف</th>
                  </tr>
                </thead>
                <tbody>
                  {sessionList.map((item, index) => (
                    <SessionItems
                      key={index}
                      item={item}
                      DeleteItem={deleteCourseSession}
                    />
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="alert alert-danger" role="alert">
                برای این درس جلسه ای ثبت نشده است.
              </div>
            )
          ) : (
            <div className="alert alert-danger" role="alert">
              در حال بارگذاری...
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
export default withRouter(GetSingleCourse);
