import React, { useState, useEffect } from "react";
import Axios from "axios";
import { notificationAlert } from "../../../../../utils/shared";
import Textarea from "../../../shared/components/Textarea";
function UpdateFreeSection() {
  const [freeTitle, setFreeTitle] = useState("");
  const [freeSubtitle, setFreeSubtitle] = useState("");
  const [freeText, setFreeText] = useState("");
  const [freeBtnText, setFreeBtnText] = useState("");
  const [freeBtnLink, setFreeBtnLink] = useState("");
  const [freeVideoLink, setFreeVideoLink] = useState("");

  const [disabledButton, setDisabledButton] = useState("");

  useEffect(() => {
    getIntroSection();
    setDisabledButton(false);
  }, []);

  const getIntroSection = () => {
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_HOME_GET_FREE_SECTION,
      method: "POST",
      withCredentials: true,
    })
      .then((res) => {
        try {
          // console.log(res.data.data);
          setFreeTitle(res.data.data.free_title);
          setFreeSubtitle(res.data.data.free_subtitle);
          setFreeText(res.data.data.free_text);
          setFreeBtnText(res.data.data.free_btn_text);
          setFreeBtnLink(res.data.data.free_btn_link);
          setFreeVideoLink(res.data.data.free_video_link);
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
    data.append("free_title", freeTitle);
    data.append("free_subtitle", freeSubtitle);
    data.append("free_text", freeText);
    data.append("free_btn_text", freeBtnText);
    data.append("free_btn_link", freeBtnLink);
    data.append("free_video_link", freeVideoLink);

    for (var key of data.entries()) {
      console.log(key[0] + ", " + key[1]);
    }

    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_WEB_CONTROL_UPDATE_FREE_SECTION,
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      method: "POST",
      data,
    })
      .then((res) => {
        console.log(res.data);
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
      <h2 className="section-title">ویرایش اطلاعات بخش رایگان</h2>
      <form className="row" onSubmit={handleFormOnSubmit}>
        <div className="col-md-6 form-group">
          <label htmlFor="title">
            عنوان <i className="icon-user"></i>
          </label>
          <input
            className="form-control"
            type="text"
            name="sub_title"
            id="sub_title"
            value={freeTitle}
            placeholder="عنوان"
            onChange={(e) => {
              setFreeTitle(e.target.value);
            }}
          />
        </div>

        <div className="col-md-6 form-group">
          <label htmlFor="title">
            عنوان فرعی <i className="icon-user"></i>
          </label>
          <input
            className="form-control"
            type="text"
            name="btn_text"
            id="btn_text"
            value={freeSubtitle}
            placeholder="عنوان فرعی"
            onChange={(e) => {
              setFreeSubtitle(e.target.value);
            }}
          />
        </div>

        <div className="col-md-6 form-group">
          <label htmlFor="title">
            متن دکمه <i className="icon-user"></i>
          </label>
          <input
            className="form-control"
            type="text"
            name="btn_text"
            id="btn_text"
            value={freeBtnText}
            placeholder="متن دکمه"
            onChange={(e) => {
              setFreeBtnText(e.target.value);
            }}
          />
        </div>

        <div className="col-md-6 form-group">
          <label htmlFor="title">
            لینک دکمه <i className="icon-user"></i>
          </label>
          <input
            className="form-control"
            type="text"
            name="btn_text"
            id="btn_text"
            value={freeBtnLink}
            placeholder="لینک دکمه"
            onChange={(e) => {
              setFreeBtnLink(e.target.value);
            }}
          />
        </div>

        <div className="col-md-12 form-group">
          <label htmlFor="title">
            لینک ویدئو <i className="icon-user"></i>
          </label>
          <input
            className="form-control"
            type="text"
            name="btn_text"
            id="btn_text"
            value={freeVideoLink}
            placeholder="لینک ویدئو"
            onChange={(e) => {
              setFreeVideoLink(e.target.value);
            }}
          />
        </div>
        <div className="col-md-12 form-group">
          <Textarea
            className="form-control"
            setMessage={setFreeText}
            message={freeText}
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
export default UpdateFreeSection;
