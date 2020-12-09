import React, { useState, useEffect } from "react";
import Axios from "axios";
import { withRouter, Redirect } from "react-router-dom";
import { notificationAlert } from "../../../../../utils/shared";
import Textarea from "../../../shared/components/Textarea";
import DropZoneUploaderSingle from "../../../shared/components/DropZoneUploaderSingle";

function CreateNewTeacher({ ...props }) {
  const teacherId = props.match.params.id;
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [sex, setSex] = useState("");
  const [diploma, setDiploma] = useState("");
  const [cv, setCv] = useState("");
  const [image, setImage] = useState("default.png");

  const [file, setFile] = useState("");
  const [disabledButton, setDisabledButton] = useState(false);

  const [isRedirect, setIsRedirect] = useState(false);
  const [isRedirect404, setIsRedirect404] = useState(false);

  useEffect(() => {
    if (teacherId) {
      getSingleTeacher();
    }
  }, []);

  const getSingleTeacher = () => {
    let data = new FormData();
    if (teacherId) {
      data.append("id", teacherId);
    }
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_ADMIN_GET_SINGLE_TEACHER,
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
        setName(res.data.data.name);
        setLastname(res.data.data.lastname);
        setSex(res.data.data.sex);
        setDiploma(res.data.data.diploma);
        setCv(res.data.data.cv);
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
    if (teacherId) {
      data.append("id", teacherId);
    }

    data.append("name", name);
    data.append("lastname", lastname);
    data.append("sex", sex);
    data.append("diploma", diploma);
    data.append("cv", cv);
    if (file) data.append("image", file);

    for (var key of data.entries()) {
      console.log(key[0] + ", " + key[1]);
    }

    const myUrl = teacherId
      ? process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_UPDATE_SINGLE_TEACHER
      : process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_CREATE_NEW_TEACHER;

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
  if (isRedirect) return <Redirect to="/admin/get-all-teacher" />;

  return (
    <section className="form-wrapper has-icon wrapper">
      <h2 className="section-title">
        {teacherId ? "ویرایش استاد" : "افزودن استاد"}
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
            placeholder="نام استاد"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="col-md-6 form-group">
          <label htmlFor="lastname">
            نام خانوادگی <i className="icon-user-follow"></i>
          </label>
          <input
            className="form-control"
            type="text"
            name="lastname"
            id="lastname"
            value={lastname}
            placeholder="نام خانوادگی استاد"
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>
        <div className="col-md-6 form-group">
          <label htmlFor="sex">
            جنسیت<i className="icon-map"></i>
          </label>

          <select
            name="sex"
            id="sex"
            className="form-control"
            onChange={(e) => setSex(e.target.value)}
            // defaultValue={sex}
            value={sex}
          >
            <option value="DEFAULT">انتخاب کنید</option>
            <option value="مرد">مرد</option>
            <option value="زن">زن</option>
          </select>
        </div>
        <div className="col-md-6 form-group">
          <label htmlFor="diploma">
            مدرک تحصیلی <i className="icon-user"></i>
          </label>
          <input
            className="form-control"
            type="text"
            name="diploma"
            id="diploma"
            value={diploma}
            onChange={(e) => setDiploma(e.target.value)}
            placeholder="مدرک تحصیلی استاد"
          />
        </div>
        <div className="col-md-12 form-group">
          <div>
            <label htmlFor="cv">
              رزومه <i className="icon-user"></i>
            </label>
            <Textarea
              className="form-control"
              setMessage={setCv}
              message={cv}
            ></Textarea>
          </div>
        </div>
        <div className="col-12 col-lg-6 form-group">
          <label htmlFor="avatar">آپلود آواتار</label>
          <DropZoneUploaderSingle
            file={file}
            setFile={setFile}
            prevImageUrl={
              process.env.REACT_APP_IMAGE_URL +
              "/" +
              process.env.REACT_APP_ADMIN_TEACHER_IMAGE_PATH +
              image
            }
          />
        </div>{" "}
        <div className="col-12 col-md-12 form-group">
          <button
            type="submit"
            disabled={disabledButton}
            className="btn btn-success py-3 px-4 submit-teacher"
          >
            {teacherId ? "ویرایش استاد" : "ثبت استاد"}
          </button>
        </div>
      </form>
    </section>
  );
}
export default withRouter(CreateNewTeacher);
