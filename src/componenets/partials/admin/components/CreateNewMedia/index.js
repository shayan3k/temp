import React, { useState, useEffect } from "react";
import Axios from "axios";
import { withRouter, Redirect } from "react-router-dom";
import { notificationAlert } from "../../../../../utils/shared";
import DropZoneUploaderSingle from "../../../shared/components/DropZoneUploaderSingle";

function CreateNewMedia({ ...props }) {
  const mediaId = props.match.params.id;

  const [link, setLink] = useState("");

  const [file, setFile] = useState("");
  const [disabledButton, setDisabledButton] = useState(false);
  const [image, setImage] = useState("default.png");
  const [isRedirect, setIsRedirect] = useState(false);
  const [isRedirect404, setIsRedirect404] = useState(false);

  useEffect(() => {
    if (mediaId) {
      getSingleCategory();
    }
  }, []);

  const getSingleCategory = () => {
    let data = new FormData();
    if (mediaId) {
      data.append("id", mediaId);
    }
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_WEB_CONTROL_GET_SINGLE_MEDIA,
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
        setLink(res.data.data.link);
        setImage(res.data.data.image);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleFormOnSubmit = (e) => {
    e.preventDefault();
    setDisabledButton(true);
    let data = new FormData();
    if (mediaId) {
      data.append("id", mediaId);
    }

    data.append("link", link);
    if (file) {
      data.append("image", file);
    }

    for (var key of data.entries()) {
      console.log(key[0] + ", " + key[1]);
    }

    const myUrl = mediaId
      ? process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_WEB_CONTROL_UPDATE_SINGLE_MEDIA
      : process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_WEB_CONTROL_CREATE_NEW_MEDIA;

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

  if (isRedirect) return <Redirect to="/admin/get-all-media" />;

  return (
    <section className="form-wrapper has-icon wrapper">
      <h2 className="section-title">
        {mediaId ? "ویرایش رسانه" : "افزودن رسانه"}
      </h2>
      <form className="row" onSubmit={handleFormOnSubmit}>
        <div className="col-md-6 form-group">
          <label htmlFor="link">
            لینک <i className="icon-user"></i>
          </label>
          <input
            className="form-control"
            type="text"
            name="link"
            id="link"
            value={link}
            placeholder="لینک"
            onChange={(e) => {
              setLink(e.target.value);
            }}
          />
        </div>

        <div className="col-12 col-lg-6 form-group">
          <label htmlFor="avatar">آپلود آواتار</label>
          <DropZoneUploaderSingle
            file={file}
            setFile={setFile}
            prevImageUrl={
              process.env.REACT_APP_IMAGE_URL +
              "/" +
              process.env.REACT_APP_ADMIN_MEIDA_IMAGE_PATH +
              image
            }
          />
        </div>

        <div className="col-12 form-group">
          <button
            type="submit"
            disabled={disabledButton}
            className="btn btn-success py-3 px-4 submit-teacher"
          >
            {mediaId ? "ویرایش رسانه" : "ثبت رسانه"}
          </button>
        </div>
      </form>
    </section>
  );
}
export default withRouter(CreateNewMedia);
