import React, { useState } from "react";
import Axios from "axios";
import { notificationAlert } from "../../../../../utils/shared";
import DropZoneUploaderSingle from "../../../shared/components/DropZoneUploaderSingle";
import {
  Name,
  LastName,
  UserImage,
  TriggerIsAuthenticated,
} from "../../../../../services/Recoils";
import { useRecoilState } from "recoil";

function AdminUpdateAdminInformation() {
  const [name, setName] = useRecoilState(Name);
  const [lastname, setLastname] = useRecoilState(LastName);
  const [image] = useRecoilState(UserImage);
  const [triggerIsAuthenticated, setTriggerIsAuthenticated] = useRecoilState(
    TriggerIsAuthenticated
  );

  const [file, setFile] = useState("");
  const [disabledButton, setDisabledButton] = useState(false);

  const handleFormOnSubmit = (e) => {
    e.preventDefault();
    setDisabledButton(true);
    let data = new FormData();
    data.append("name", name);
    data.append("lastname", lastname);
    if (file) data.append("image", file);

    // for (var key of data.entries()) {
    //   console.log(key[0] + ", " + key[1]);
    // }

    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_ADMIN_UPDATE_ADMIN_INFORMATION,
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      method: "POST",
      data,
    })
      .then((res) => {
        // console.log(res.data);
        try {
          notificationAlert(
            res.data.success === false ? "خطا !" : "انجام شد!",
            res.data.message,
            res.data.success === false ? "error" : "success"
          );
          setTriggerIsAuthenticated(!triggerIsAuthenticated);
          setFile("");
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

  return (
    <section className="form-wrapper has-icon wrapper">
      <h2 className="section-title">ویرایش حساب کاربری</h2>
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
            placeholder="نام "
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div className="col-md-6 form-group">
          <label htmlFor="index">
            نام خانوادگی <i className="icon-user"></i>
          </label>
          <input
            className="form-control"
            type="text"
            name="index"
            id="index"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            placeholder="نام خانوادگی"
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
              process.env.REACT_APP_USER_IMAGE_PATH +
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
            ویرایش
          </button>
        </div>
      </form>
    </section>
  );
}
export default AdminUpdateAdminInformation;
