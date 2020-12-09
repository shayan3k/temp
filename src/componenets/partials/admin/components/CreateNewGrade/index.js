import React, { useState, useEffect } from "react";
import Axios from "axios";
import { withRouter, Redirect } from "react-router-dom";
import { notificationAlert } from "../../../../../utils/shared";
function CreateNewGrade({ ...props }) {
  const gradeId = props.match.params.id;

  const [title, setTitle] = useState("");
  const [isRedirect, setIsRedirect] = useState(false);
  const [isRedirect404, setIsRedirect404] = useState(false);

  const [disabledButton, setDisabledButton] = useState("");

  useEffect(() => {
    setDisabledButton(false);
    if (gradeId) {
      getSingleGrade();
    }
  }, []);

  const getSingleGrade = () => {
    let data = new FormData();
    if (gradeId) {
      data.append("id", gradeId);
    }
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_WEB_CONTROL_GET_SINGLE_GRADE,
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
        setTitle(res.data.data.title);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleFormOnSubmit = (e) => {
    e.preventDefault();
    setDisabledButton(true);
    let data = new FormData();
    if (gradeId) {
      data.append("id", gradeId);
    }

    data.append("title", title);
    const myUrl = gradeId
      ? process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_WEB_CONTROL_UPDATE_SINGLE_GRADE
      : process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_WEB_CONTROL_CREATE_NEW_GRADE;

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
  if (isRedirect) return <Redirect to="/admin/get-all-grade" />;

  return (
    <div className="container-fluid">
      <section className="form-wrapper has-icon wrapper">
        <h2 className="section-title">
          {gradeId ? "ویرایش پایه" : "افزودن پایه"}
        </h2>
        <div className="container-fluid">
          <form className="row" onSubmit={handleFormOnSubmit}>
            <div className="col-md-6 form-group">
              <label htmlFor="title">
                نام پایه <i className="icon-user"></i>
              </label>
              <input
                className="form-control"
                type="text"
                name="title"
                id="title"
                rows="10"
                value={title}
                placeholder="نام پایه"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>

            <div className="col-12 col-md-12 form-group">
              <button
                type="submit"
                disabled={disabledButton}
                className="btn btn-primary submit-category"
              >
                {gradeId ? "ویرایش پایه" : "ثبت پایه"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
export default withRouter(CreateNewGrade);
