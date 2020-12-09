import React, { useState, useEffect } from "react";
import Axios from "axios";
import { withRouter, Redirect } from "react-router-dom";
import { notificationAlert } from "../../../../../utils/shared";
import Textarea from "../../../shared/components/Textarea";
import DropZoneUploaderSingle from "../../../shared/components/DropZoneUploaderSingle";

function CreateNewTestimonial({ ...props }) {
  const testimonialId = props.match.params.id;

  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [index, setIndex] = useState("");

  const [file, setFile] = useState("");
  const [image, setImage] = useState("default.png");
  const [disabledButton, setDisabledButton] = useState(false);

  const [isRedirect, setIsRedirect] = useState(false);
  const [isRedirect404, setIsRedirect404] = useState(false);

  useEffect(() => {
    if (testimonialId) {
      getSingleTestimonial();
    }
  }, []);

  const getSingleTestimonial = () => {
    let data = new FormData();
    if (testimonialId) {
      data.append("id", testimonialId);
    }
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_WEB_CONTROL_GET_SINGLE_TESTIMONIAL,
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      method: "POST",
      data,
    })
      .then((res) => {
        // console.log(res.data);
        if (res.data.err === true) {
          setIsRedirect404(true);
        }
        setName(res.data.data.name);
        setText(res.data.data.text);
        setIndex(res.data.data.index);
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
    if (testimonialId) {
      data.append("id", testimonialId);
    }

    data.append("name", name);
    data.append("text", text);
    data.append("index", index);
    data.append("image", file);

    // for (var key of data.entries()) {
    //   console.log(key[0] + ", " + key[1]);
    // }

    const myUrl = testimonialId
      ? process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_WEB_CONTROL_UPDATE_SINGLE_TESTIMONIAL
      : process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_WEB_CONTROL_CREATE_NEW_TESTIMONIAL;

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
        try {
          notificationAlert(
            res.data.success === false ? "خطا !" : "انجام شد!",
            res.data.message,
            res.data.success === false ? "error" : "success"
          );
          if (res.data.success === true) setIsRedirect(true);
        } catch (e) {
          // console.log(e);
        }
      })
      .catch((e) => {
        // console.log(e);
      })
      .finally(() => {
        setDisabledButton(false);
      });
  };
  if (isRedirect404) return <Redirect to="/404" />;
  if (isRedirect) return <Redirect to="/admin/get-all-testimonial" />;

  return (
    <section className="form-wrapper has-icon wrapper">
      <h2 className="section-title">
        {testimonialId ? "ویرایش نظر" : "افزودن نظر"}
      </h2>
      <form className="row" onSubmit={handleFormOnSubmit}>
        <div className="col-md-6 form-group">
          <label htmlFor="name">
            نام کاربر <i className="icon-user"></i>
          </label>
          <input
            className="form-control"
            type="text"
            name="name"
            id="name"
            value={name}
            placeholder="نام کاربر"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div className="col-md-6 form-group">
          <label htmlFor="index">
            ایندکس <i className="icon-user"></i>
          </label>
          <input
            className="form-control"
            type="number"
            name="index"
            id="index"
            value={index}
            onChange={(e) => setIndex(e.target.value)}
            placeholder="ایندکس"
          />
        </div>

        <div className="col-md-6 form-group">
          <label htmlFor="text">
            متن پیام <i className="icon-user-follow"></i>
          </label>
          <Textarea
            className="form-control"
            setMessage={setText}
            message={text}
          ></Textarea>
        </div>
        <div className="col-12 col-lg-6 form-group">
          <label htmlFor="avatar">آپلود آواتار</label>
          <DropZoneUploaderSingle
            file={file}
            setFile={setFile}
            prevImageUrl={
              process.env.REACT_APP_IMAGE_URL +
              "/" +
              process.env.REACT_APP_ADMIN_TESTIMONIAL_IMAGE_PATH +
              image
            }
          />
        </div>
        <div className="col-12 col-md-12 form-group">
          <button
            type="submit"
            disabled={disabledButton}
            className="btn btn-primary submit-testimonial"
          >
            {testimonialId ? "ویرایش" : "ثبت "}
          </button>
        </div>
      </form>
    </section>
  );
}
export default withRouter(CreateNewTestimonial);
