import React, { useState, useEffect } from "react";
import Axios from "axios";
import { withRouter, Redirect } from "react-router-dom";
import { notificationAlert } from "../../../../../utils/shared";
function CreateSocialMedia({ ...props }) {
  const socialId = props.match.params.id;

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [link, setLink] = useState("");

  const [disabledButton, setDisabledButton] = useState("");

  const [isRedirect, setIsRedirect] = useState(false);
  const [isRedirect404, setIsRedirect404] = useState(false);

  useEffect(() => {
    if (socialId) {
      getSingleCategory();
    }
  }, []);

  const getSingleCategory = () => {
    let data = new FormData();
    if (socialId) {
      data.append("id", socialId);
    }
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_WEB_CONTROL_GET_SINGLE_SOCIAL_MEDIA,
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
        setName(res.data.data.name);
        setType(res.data.data.type);
        setLink(res.data.data.link);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleFormOnSubmit = (e) => {
    e.preventDefault();
    setDisabledButton(true);
    let data = new FormData();
    if (socialId) {
      data.append("id", socialId);
    }

    data.append("name", name);
    data.append("type", type);
    data.append("link", link);

    // for (var key of data.entries()) {
    //   console.log(key[0] + ", " + key[1]);
    // }

    const myUrl = socialId
      ? process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_WEB_CONTROL_UPDATE_SOCIAL_MEDIA
      : process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_WEB_CONTROL_CREATE_SOCIAL_MEDIA;

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

  if (isRedirect) return <Redirect to="/admin/get-social-media" />;

  return (
    <section className="form-wrapper has-icon wrapper">
      <h2 className="section-title">
        {socialId ? "ویرایش شبکه اجتماعی" : "افزودن شبکه اجتماعی"}
      </h2>
      <form className="row" onSubmit={handleFormOnSubmit}>
        <div className="col-md-6 form-group">
          <label htmlFor="name">
            نام <i className="icon-user"></i>
          </label>
          <input
            className="form-control"
            type="text"
            name="name"
            id="name"
            value={name}
            placeholder="نام"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div className="col-md-6 form-group">
          <label htmlFor="type">
            نوع <i className="icon-user"></i>
          </label>
          <input
            className="form-control"
            type="text"
            name="type"
            id="type"
            value={type}
            placeholder="نوع"
            onChange={(e) => {
              setType(e.target.value);
            }}
          />
        </div>

        <div className="col-md-12 form-group">
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

        <div className="col-12 col-md-12 form-group">
          <button
            type="submit"
            disabled={disabledButton}
            className="btn btn-success submit-category py-3 px-4"
          >
            {socialId ? "ویرایش " : "ثبت اطلاعات"}
          </button>
        </div>
      </form>
    </section>
  );
}
export default withRouter(CreateSocialMedia);
