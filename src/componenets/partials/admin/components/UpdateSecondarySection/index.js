import React, { useState, useEffect } from "react";
import Axios from "axios";
import { notificationAlert } from "../../../../../utils/shared";
import Textarea from "../../../shared/components/Textarea";
import DropZoneUploaderSingle from "../../../shared/components/DropZoneUploaderSingle";

function UpdateSecondarySection() {
  const [secondaryTitle, setSecondaryTitle] = useState("");
  const [secondaryText, setSecondaryText] = useState("");
  const [image, setImage] = useState("default_secondary.png");
  const [file, setFile] = useState("");

  const [disabledButton, setDisabledButton] = useState(false);

  useEffect(() => {
    getSecondarySection();
  }, []);

  const getSecondarySection = () => {
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_HOME_GET_SECONDARY_SECTION,
      method: "POST",
      withCredentials: true,
    })
      .then((res) => {
        console.log(res.data);
        try {
          setSecondaryTitle(res.data.data.secondary_title);
          setSecondaryText(res.data.data.secondary_text);
          setImage(res.data.data.secondary_image);
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
    data.append("secondary_title", secondaryTitle);
    data.append("secondary_text", secondaryText);
    if (file) {
      data.append("secondary_image", file);
    }

    // for (var key of data.entries()) {
    //   console.log(key[0] + ", " + key[1]);
    // }

    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_WEB_CONTROL_UPDATE_SECONDARY_SECTION,
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
        getSecondarySection();
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
      <h2 className="section-title">ویرایش اطلاعات بخش دوم</h2>
      <form className="row" onSubmit={handleFormOnSubmit}>
        <div className="col-md-12 form-group">
          <label htmlFor="title">
            عنوان <i className="icon-user"></i>
          </label>
          <input
            className="form-control"
            type="text"
            name="sub_title"
            id="sub_title"
            value={secondaryTitle}
            placeholder="عنوان"
            onChange={(e) => {
              setSecondaryTitle(e.target.value);
            }}
          />
        </div>
        <div className="col-md-12 form-group">
          <Textarea
            className="form-control"
            setMessage={setSecondaryText}
            message={secondaryText}
          ></Textarea>
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
export default UpdateSecondarySection;
