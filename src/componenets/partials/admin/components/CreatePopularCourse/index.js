import React, { useState, useEffect } from "react";
import Axios from "axios";
import { withRouter, Redirect } from "react-router-dom";
import { notificationAlert } from "../../../../../utils/shared";
import GetAllCourse from "../../../shared/components/GetAllCourse";
function CreatePopularCourse({ ...props }) {
  const popularCourseId = props.match.params.id;

  const [index, setIndex] = useState("");
  const [courseId, setCourseId] = useState("");

  const [isRedirect, setIsRedirect] = useState(false);
  const [isRedirect404, setIsRedirect404] = useState(false);
  const [disabledButton, setDisabledButton] = useState("");
  useEffect(() => {
    setDisabledButton(false);
    if (popularCourseId) {
      getSinglePopularCourse();
    }
  }, []);

  const getSinglePopularCourse = () => {
    let data = new FormData();
    if (popularCourseId) {
      data.append("id", popularCourseId);
    }
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_WEB_CONTROL_GET_SINGLE_POPULAR_COURSE,
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      method: "POST",
      data,
    })
      .then((res) => {
        // console.log(res.data.data);
        if (res.data.err === true) {
          setIsRedirect404(true);
        }
        setIndex(res.data.data.index);
        setCourseId(res.data.data.course_id);
      })
      .catch((e) => {
        // console.log(e);
      });
  };

  const handleFormOnSubmit = (e) => {
    e.preventDefault();
    setDisabledButton(true);
    let data = new FormData();
    if (popularCourseId) {
      data.append("id", popularCourseId);
    }

    data.append("index", index);
    data.append("course_id", courseId);
    const myUrl = popularCourseId
      ? process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_WEB_CONTROL_UPDATE_POPULAR_COURSE
      : process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_WEB_CONTROL_CREATE_POPULAR_COURSE;

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

  if (isRedirect) return <Redirect to="/admin/get-popular-course" />;
  return (
    <section className="form-wrapper has-icon wrapper">
      <h2 className="section-title">
        {popularCourseId ? "ویرایش درس محبوب" : "افزودن درس محبوب"}
      </h2>
      <form className="row" onSubmit={handleFormOnSubmit}>
        <GetAllCourse courseId={courseId} setCourseId={setCourseId} />
        <div className="col-md-6 form-group">
          <label htmlFor="title">
            ایندکس <i className="icon-user"></i>
          </label>
          <input
            className="form-control"
            type="number"
            name="title"
            id="title"
            value={index}
            placeholder="ایندکس"
            onChange={(e) => {
              setIndex(e.target.value);
            }}
          />
        </div>

        <div className="col-12 col-md-12 form-group">
          <button
            type="submit"
            disabled={disabledButton}
            className="btn btn-success submit-popularCourse py-3 px-4"
          >
            {popularCourseId ? "ویرایش " : "ثبت اطلاعات"}
          </button>
        </div>
      </form>
    </section>
  );
}
export default withRouter(CreatePopularCourse);
