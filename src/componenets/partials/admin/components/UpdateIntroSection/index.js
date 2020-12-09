import React, { useState, useEffect } from "react";
import Axios from "axios";
import { notificationAlert } from "../../../../../utils/shared";
import DropZoneUploaderSingle from "../../../shared/components/DropZoneUploaderSingle";

function UpdateIntroSection() {
  const [introSubtitle, setIntroSubtitle] = useState("");
  const [introButton, setIntroButton] = useState("");
  const [introLink, setIntroLink] = useState("");
  const [image, setImage] = useState("default_intro.png");
  const [file, setFile] = useState("");

  const [disabledButton, setDisabledButton] = useState("");

  useEffect(() => {
    getIntroSection();
    setDisabledButton(false);
  }, []);

  const getIntroSection = () => {
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_HOME_GET_INTRO_SECTION,
      method: "POST",
      withCredentials: true,
    })
      .then((res) => {
        try {
          setIntroSubtitle(res.data.data.intro_subtitle);
          setIntroButton(res.data.data.intro_button);
          setIntroLink(res.data.data.intro_link);
          setImage(res.data.data.intro_image);
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
    data.append("intro_subtitle", introSubtitle);
    data.append("intro_button", introButton);
    data.append("intro_link", introLink);
    data.append("intro_image", file);

    // for (var key of data.entries()) {
    //   console.log(key[0] + ", " + key[1]);
    // }

    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_WEB_CONTROL_UPDATE_INTRO_SECTION,
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
        getIntroSection();
        setFile("");
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
      <h2 className="section-title">ویرایش اطلاعات اسلایدر</h2>
      <form className="row" onSubmit={handleFormOnSubmit}>
        <div className="col-md-6 form-group">
          <label htmlFor="title">
            عنوان فرعی <i className="icon-user"></i>
          </label>
          <input
            className="form-control"
            type="text"
            name="sub_title"
            id="sub_title"
            value={introSubtitle}
            placeholder="عنوان فرعی"
            onChange={(e) => {
              setIntroSubtitle(e.target.value);
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
            value={introButton}
            placeholder="متن دکمه"
            onChange={(e) => {
              setIntroButton(e.target.value);
            }}
          />
        </div>

        <div className="col-md-12 form-group">
          <label htmlFor="title">
            لینک دکمه <i className="icon-user"></i>
          </label>
          <input
            className="form-control"
            type="text"
            name="btn_link"
            id="btn_link"
            value={introLink}
            placeholder="لینک دکمه"
            onChange={(e) => {
              setIntroLink(e.target.value);
            }}
          />
        </div>

        <div className="col-12 col-lg-6 form-group">
          <label htmlFor="avatar">آپلود عکس</label>
          <DropZoneUploaderSingle
            file={file}
            setFile={setFile}
            prevImageUrl={
              process.env.REACT_APP_IMAGE_URL +
              "/" +
              process.env.REACT_APP_ADMIN_WEBCONTROL_IMAGE_PATH +
              image
            }
          />
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
export default UpdateIntroSection;
