import React, { useState, useEffect } from "react";
import Axios from "axios";
import { notificationAlert } from "../../../../../utils/shared";
import Textarea from "../../../shared/components/Textarea";
function UpdateTeacherSection() {
  const [popularTeacherTitle, setPopularTeacherTitle] = useState("");
  const [popularTeacherSubtitle, setPopularTeacherSubtitle] = useState("");
  const [popularTeacherText, setPopularTeacherText] = useState("");

  const [disabledButton, setDisabledButton] = useState("");

  useEffect(() => {
    getTeacherSection();
  }, []);

  const getTeacherSection = () => {
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_HOME_GET_TEACHER_SECTION,
      method: "POST",
      withCredentials: true,
    })
      .then((res) => {
        try {
          // console.log(res.data.data);
          setPopularTeacherTitle(res.data.data.teacher_title);
          setPopularTeacherSubtitle(res.data.data.teacher_subtitle);
          setPopularTeacherText(res.data.data.teacher_text);
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
    data.append("teacher_title", popularTeacherTitle);
    data.append("teacher_subtitle", popularTeacherSubtitle);
    data.append("teacher_text", popularTeacherText);

    // for (var key of data.entries()) {
    //   console.log(key[0] + ", " + key[1]);
    // }

    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_WEB_CONTROL_UPDATE_TEACHER_SECTION,
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
      <h2 className="section-title">ویرایش اطلاعات بهترین اساتید</h2>
      <form className="row" onSubmit={handleFormOnSubmit}>
        <div className="col-md-6 form-group">
          <label htmlFor="title">
            عنوان <i className="icon-user"></i>
          </label>
          <input
            className="form-control"
            type="text"
            name="title"
            id="title"
            value={popularTeacherTitle}
            placeholder="عنوان"
            onChange={(e) => {
              setPopularTeacherTitle(e.target.value);
            }}
          />
        </div>

        <div className="col-md-6 form-group">
          <label htmlFor="sub_title">
            عنوان فرعی <i className="icon-user"></i>
          </label>
          <input
            className="form-control"
            type="text"
            name="sub_title"
            id="sub_title"
            value={popularTeacherSubtitle}
            placeholder="عنوان فرعی"
            onChange={(e) => {
              setPopularTeacherSubtitle(e.target.value);
            }}
          />
        </div>

        <div className="col-md-12 form-group">
          <Textarea
            className="form-control"
            setMessage={setPopularTeacherText}
            message={popularTeacherText}
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
export default UpdateTeacherSection;
