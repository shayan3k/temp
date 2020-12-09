import React, { useState, useEffect } from "react";
import Axios from "axios";
import { notificationAlert } from "../../../../../utils/shared";
function UpdateContactDetail() {
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [landLine, setLandLine] = useState("");
  const [faxNumber, setFaxNumber] = useState("");
  const [email, setEmail] = useState("");

  const [disabledButton, setDisabledButton] = useState("");
  useEffect(() => {
    getContactSection();
  }, []);

  const getContactSection = () => {
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_HOME_GET_CONTACT_INFORMATION,
      method: "POST",
      withCredentials: true,
    })
      .then((res) => {
        try {
          setAddress(res.data.data.address);
          setPhoneNumber(res.data.data.phone_number);
          setLandLine(res.data.data.land_line);
          setFaxNumber(res.data.data.fax_number);
          setEmail(res.data.data.email);
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
    data.append("address", address);
    data.append("phone_number", phoneNumber);
    data.append("land_line", landLine);
    data.append("fax_number", faxNumber);
    data.append("email", email);

    // for (var key of data.entries()) {
    //   console.log(key[0] + ", " + key[1]);
    // }

    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_WEB_CONTROL_UPDATE_CONTACT_INFORMATION,
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
      <h2 className="section-title">ویرایش تماس با ما </h2>
      <form className="row" onSubmit={handleFormOnSubmit}>
        <div className="col-md-6 form-group">
          <label htmlFor="title">
            آدرس <i className="icon-user"></i>
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="آدرس"
            onChange={(e) => setAddress(e.target.value)}
            value={address}
          />
        </div>
        <div className="col-md-6 form-group">
          <label htmlFor="title">
            موبایل <i className="icon-user"></i>
          </label>
          <input
            type="number"
            className="form-control"
            placeholder="موبایل"
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={phoneNumber}
          />
        </div>
        <div className="col-md-6 form-group">
          <label htmlFor="title">
            تلفن ثابت <i className="icon-user"></i>
          </label>
          <input
            type="number"
            className="form-control"
            placeholder="تلفن ثابت"
            onChange={(e) => setLandLine(e.target.value)}
            value={landLine}
          />
        </div>
        <div className="col-md-6 form-group">
          <label htmlFor="title">
            فکس <i className="icon-user"></i>
          </label>
          <input
            type="number"
            className="form-control"
            placeholder="فکس"
            onChange={(e) => setFaxNumber(e.target.value)}
            value={faxNumber}
          />
        </div>

        <div className="col-md-6 form-group">
          <label htmlFor="title">
            ایمیل <i className="icon-user"></i>
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="ایمیل"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
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
export default UpdateContactDetail;
