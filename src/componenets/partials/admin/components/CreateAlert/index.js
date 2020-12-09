import React, { useState, useEffect } from "react";
import Axios from "axios";
import Textarea from "../../../shared/components/Textarea";
import { notificationAlert } from "../../../../../utils/shared";
import { withRouter, Redirect } from "react-router-dom";
function Index({ ...props }) {
  const alertId = props.match.params.id;

  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");
  const [isRedirect, setIsRedirect] = useState(false);
  const [disabledButton, setDisabledButton] = useState(false);

  const [isRedirect404, setIsRedirect404] = useState(false);

  useEffect(() => {
    if (alertId) {
      getSingleAlert();
    }
  }, []);

  const getSingleAlert = () => {
    let data = new FormData();
    if (alertId) {
      data.append("id", alertId);
    }
    // for (var key of data.entries()) {
    //   console.log(key[0] + ", " + key[1]);
    // }
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_ADMIN_GET_SINGLE_ALERT,
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
        setTitle(res.data.data.title);
        setSubtitle(res.data.data.subtitle);
        setStatus(res.data.data.status);
        setMessage(res.data.data.message);
      })
      .catch((e) => {
        // console.log(e);
      });
  };

  const handleFormSubmitBtn = (e) => {
    e.preventDefault();

    setDisabledButton(true);

    let data = new FormData();
    if (alertId) {
      data.append("id", alertId);
    }
    data.append("title", title);
    data.append("subtitle", subtitle);
    data.append("status", status);
    data.append("message", message);

    // for (var key of data.entries()) {
    //    console.log(key[0] + ", " + key[1]);
    // }
    const myUrl = alertId
      ? process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_UPDATE_SINGLE_ALERT
      : process.env.REACT_APP_BACKEND_URL + process.env.REACT_APP_CREATE_ALERT;

    Axios({
      url: myUrl,
      withCredentials: true,

      method: "POST",
      data: data,
    })
      .then((res) => {
        // console.log(res.data);
        notificationAlert(
          res.data.success === false ? "خطا !" : "انجام شد!",
          res.data.message,
          res.data.success === false ? "error" : "success"
        );
        if (res.data.success) setIsRedirect(true);
      })
      .finally(() => {
        // Do the clean up in finally
        setDisabledButton(false);
      });
  };

  if (isRedirect404) return <Redirect to="/404" />;
  if (isRedirect) return <Redirect to="/admin/alert-list" />;

  return (
    <section className="form-wrapper wrapper">
      <h2 className="section-title">
        {alertId ? "ویرایش اطلاعیه" : "ثبت اطلاعیه جدید"}{" "}
      </h2>
      <form onSubmit={handleFormSubmitBtn}>
        <div className="row">
          <div className="col-12 col-md-8 my-2">
            <input
              type="text"
              className="form-control"
              placeholder="عنوان اطلاعیه"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              value={title}
            />
          </div>
          <div className="col-8 my-2">
            <input
              type="text"
              className="form-control"
              placeholder="عنوان فرعی اطلاعیه"
              onChange={(e) => setSubtitle(e.target.value)}
              value={subtitle}
            />
          </div>
          <div className="col-8 my-2">
            <select
              className="form-control"
              onChange={(e) => setStatus(e.target.value)}
              value={status}
            >
              <option value="0">انتخاب کنید</option>
              <option value="warning">warning</option>
              <option value="danger">danger</option>
              <option value="primary">primary</option>
              <option value="secondary">secondary</option>
              <option value="dark">dark</option>
              <option value="success">success</option>
              <option value="light">light</option>
            </select>
          </div>
          <div className="col-8 my-2">
            <Textarea
              className="form-control"
              setMessage={setMessage}
              message={message}
            ></Textarea>
          </div>
          <div className="col-12">
            <button
              type="submit"
              className="btn btn-success py-3 px-4"
              id="custom-button-create-alert-submit"
              data-ripple="ripple"
              disabled={disabledButton}
            >
              {alertId ? "ویرایش" : "ثبت اطلاعات"}
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
export default withRouter(Index);
