import React, { useState, useEffect } from "react";
import Axios from "axios";
import { withRouter, Redirect } from "react-router-dom";
import { notificationAlert } from "../../../../../utils/shared";
import DropZoneUploaderSingle from "../../../shared/components/DropZoneUploaderSingle";

function CreateTopRank({ ...props }) {
  const topRankId = props.match.params.id;

  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");

  const [file, setFile] = useState("");
  const [image, setImage] = useState("default.png");
  const [disabledButton, setDisabledButton] = useState("");

  const [isRedirect, setIsRedirect] = useState(false);
  const [isRedirect404, setIsRedirect404] = useState(false);

  useEffect(() => {
    if (topRankId) {
      getSingleTopRank();
    }
  }, []);

  const getSingleTopRank = () => {
    let data = new FormData();
    if (topRankId) {
      data.append("id", topRankId);
    }
    console.log(
      process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_WEB_CONTROL_GET_SINGLE_TOP_RANK
    );
    for (var key of data.entries()) {
      console.log(key[0] + ", " + key[1]);
    }
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_WEB_CONTROL_GET_SINGLE_TOP_RANK,
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
        setSubtitle(res.data.data.subtitle);
        setImage(res.data.data.image);
      })
      .catch((e) => {
        // console.log(e);
      });
  };

  const handleFormOnSubmit = (e) => {
    e.preventDefault();
    setDisabledButton(true);
    let data = new FormData();
    if (topRankId) {
      data.append("id", topRankId);
    }

    data.append("title", title);
    data.append("subtitle", subtitle);
    if (file) {
      data.append("image", file);
    }

    // for (var key of data.entries()) {
    //   console.log(key[0] + ", " + key[1]);
    // }

    const myUrl = topRankId
      ? process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_WEB_CONTROL_UPDATE_TOP_RANK
      : process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_WEB_CONTROL_CREATE_TOP_RANK;

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

  if (isRedirect) return <Redirect to="/admin/get-top-rank" />;
  return (
    <section className="form-wrapper has-icon wrapper">
      <h2 className="section-title">
        {topRankId ? "ویرایش رتبه برتر" : "افزودن رتبه برتر"}
      </h2>
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
            value={title}
            placeholder="عنوان"
            onChange={(e) => {
              setTitle(e.target.value);
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
            name="title"
            id="title"
            value={subtitle}
            placeholder=" عنوان فرعی"
            onChange={(e) => {
              setSubtitle(e.target.value);
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
              process.env.REACT_APP_ADMIN_TOP_RANK_IMAGE_PATH +
              image
            }
          />
        </div>
        <div className="col-12 col-md-12 form-group">
          <button
            type="submit"
            disabled={disabledButton}
            className="btn btn-primary submit-category"
          >
            {topRankId ? "ویرایش " : "ثبت "}
          </button>
        </div>
      </form>
    </section>
  );
}
export default withRouter(CreateTopRank);
