import React, { useState, useEffect } from "react";
import Axios from "axios";
import { withRouter, Redirect } from "react-router-dom";
import { notificationAlert } from "../../../../../utils/shared";
import GetAllTeachers from "../../../shared/components/GetAllTeachers";
function CreatePopularTeacher({ ...props }) {
  const popularTeacherId = props.match.params.id;

  const [index, setIndex] = useState("");
  const [teacherId, setTeacherId] = useState("");

  const [isRedirect, setIsRedirect] = useState(false);
  const [isRedirect404, setIsRedirect404] = useState(false);
  const [disabledButton, setDisabledButton] = useState("");
  useEffect(() => {
    if (popularTeacherId) {
      getSingleCategory();
    }
  }, []);

  const getSingleCategory = () => {
    let data = new FormData();
    if (popularTeacherId) {
      data.append("id", popularTeacherId);
    }
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_WEB_CONTROL_GET_SINGLE_POPULAR_TEACHER,
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
        setTeacherId(res.data.data.teacher_id);
      })
      .catch((e) => {
        // console.log(e);
      });
  };

  const handleFormOnSubmit = (e) => {
    e.preventDefault();
    setDisabledButton(true);
    let data = new FormData();
    if (popularTeacherId) {
      data.append("id", popularTeacherId);
    }

    data.append("index", index);
    data.append("teacher_id", teacherId);

    // for (var key of data.entries()) {
    //   console.log(key[0] + ", " + key[1]);
    // }
    const myUrl = popularTeacherId
      ? process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_WEB_CONTROL_UPDATE_POPULAR_TEACHER
      : process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_WEB_CONTROL_CREATE_POPULAR_TEACHER;

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
  if (isRedirect) return <Redirect to="/admin/get-popular-teacher" />;
  return (
    <div className="container-fluid">
      <section className="form-wrapper has-icon wrapper">
        <h2 className="section-title">
          {popularTeacherId ? "ویرایش استاد محبوب" : "افزودن استاد محبوب"}
        </h2>
        <div className="container-fluid">
          <form className="row" onSubmit={handleFormOnSubmit}>
            <GetAllTeachers teacherId={teacherId} setTeacherId={setTeacherId} />

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
                className="btn btn-primary submit-popularTeacher"
              >
                {popularTeacherId ? "ویرایش " : "ثبت"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
export default withRouter(CreatePopularTeacher);
