import React, { useState, useEffect } from "react";
import Axios from "axios";
import { notificationAlert } from "../../../../../utils/shared";
import Textarea from "../../../shared/components/Textarea";
function UpdateAboutUs() {
  const [aboutUs, setAboutUs] = useState("");
  const [disabledButton, setDisabledButton] = useState("");
  useEffect(() => {
    getAboutSection();
    setDisabledButton(false);
  }, []);

  const getAboutSection = () => {
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_HOME_GET_ABOUT_SECTION,
      method: "POST",
      withCredentials: true,
    })
      .then((res) => {
        try {
          // console.log(res.data.data);
          setAboutUs(res.data.data.about_us);
        } catch (e) {
          // console.log(e);
        }
      })
      .catch((e) => {
        // console.log(e);
      });
  };

  const handleFormOnSubmit = (e) => {
    e.preventDefault();
    setDisabledButton(true);

    let data = new FormData();
    data.append("about_us", aboutUs);
    // for (var key of data.entries()) {
    //   console.log(key[0] + ", " + key[1]);
    // }
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_WEB_CONTROL_UPDATE_ABOUT_SRCTION,
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
      })
      .catch((e) => {
        // console.log(e);
      })
      .finally(() => {
        setDisabledButton(false);
      });
  };

  return (
    <section className="form-wrapper has-icon wrapper">
      <h2 className="section-title">ویرایش درباره ما </h2>
      <form className="row" onSubmit={handleFormOnSubmit}>
        <div className="col-md-12 form-group">
          <label htmlFor="title">
            متن درباره ما <i className="icon-user"></i>
          </label>
          <Textarea
            className="form-control"
            setMessage={setAboutUs}
            message={aboutUs}
          ></Textarea>
        </div>

        <div className="col-12 col-md-12 form-group">
          <button
            type="submit"
            disabled={disabledButton}
            className="btn btn-success submit-category"
          >
            ویرایش اطلاعات
          </button>
        </div>
      </form>
    </section>
  );
}
export default UpdateAboutUs;
