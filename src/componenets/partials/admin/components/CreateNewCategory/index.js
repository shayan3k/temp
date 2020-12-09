import React, { useState, useEffect } from "react";
import Axios from "axios";
import { withRouter, Redirect } from "react-router-dom";
import { notificationAlert } from "../../../../../utils/shared";
function CreateNewCategory({ ...props }) {
  let categoryId = props.match.params.id;
  const [title, setTitle] = useState("");
  const [isRedirect, setIsRedirect] = useState(false);
  const [isRedirect404, setIsRedirect404] = useState(false);
  const [disabledButton, setDisabledButton] = useState("");

  useEffect(() => {
    setDisabledButton(false);
    if (categoryId) {
      getSingleCategory();
    }
    return () => {
      setTitle("");
      setIsRedirect(false);
      setIsRedirect404(false);
      setDisabledButton("");
    };
  }, []);

  const getSingleCategory = () => {
    let data = new FormData();
    if (categoryId) {
      data.append("id", categoryId);
    }
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_WEB_CONTROL_GET_SINGLE_CATEGORY,
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
        // console.log(e);
      });
  };

  const handleFormOnSubmit = (e) => {
    e.preventDefault();
    setDisabledButton(true);
    let data = new FormData();
    if (categoryId) {
      data.append("id", categoryId);
    }

    data.append("title", title);
    const myUrl = categoryId
      ? process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_WEB_CONTROL_UPDATE_SINGLE_CATEGORY
      : process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_WEB_CONTROL_CREATE_NEW_CATEGORY;

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
  if (isRedirect) return <Redirect to="/admin/get-all-category" />;

  return (
    <div className="container-fluid">
      <section className="form-wrapper has-icon wrapper">
        <h2 className="section-title">
          {categoryId ? "ویرایش دسته" : "افزودن دسته"}
        </h2>
        <div className="container-fluid">
          <form className="row" onSubmit={handleFormOnSubmit}>
            <div className="col-md-6 form-group">
              <label htmlFor="title">
                نام دسته <i className="icon-list"></i>
              </label>
              <input
                className="form-control"
                type="text"
                name="title"
                id="title"
                rows="4"
                value={title}
                placeholder="نام دسته بندی را بنویسید..."
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>

            <div className="col-12 col-md-12 form-group">
              <button
                type="submit"
                disabled={disabledButton}
                className="btn btn-primary submit-category "
              >
                {categoryId ? "ویرایش دسته" : "ثبت دسته"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
export default withRouter(CreateNewCategory);
