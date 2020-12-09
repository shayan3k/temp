import React, { useState, useEffect } from "react";
import Axios from "axios";
import { notificationAlert } from "../../../../../utils/shared";
import "../../../../../assets/public/css/pages/_contactWrapper.scss";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactWrapper() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [contactInfo, setContactInfo] = useState("");

  const [disabledButton, setDisabledButton] = useState(false);

  useEffect(() => {
    getContactInformation();
  }, []);

  const getContactInformation = () => {
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_HOME_GET_CONTACT_INFORMATION,
      withCredentials: true,
      method: "POST",
    }).then((res) => {
      // console.log(res.data.data);
      setContactInfo(res.data.data);
    });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();

    setDisabledButton(true);
    let data = new FormData();
    data.append("name", name);
    data.append("email", email);
    data.append("subject", subject);
    data.append("text", text);
    data.append("phone_number", phoneNumber);

    // for (var key of data.entries()) {
    //   console.log(key[0] + ", " + key[1]);
    // }

    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_HOME_SUBMIT_CONTACT_US,
      withCredentials: true,

      method: "POST",
      data: data,
    })
      .then((res) => {
        notificationAlert(
          res.data.success === false ? "خطا !" : "انجام شد!",
          res.data.message,
          res.data.success === false ? "error" : "success"
        );
      })
      .finally(() => {
        setDisabledButton(false);
      });
  };

  function onChange(value) {
    // console.log("Captcha value:", value);
  }

  return (
    <section className="contact-wrapper">
      <div className="wrapper">
        <div className="container">
          <div className="row">
            <div className="col-6 col-md-3">
              <div className="contact-box">
                <i className="fas fa-map-marker-alt"></i>
                <p className="h4">دفتر مرکزی</p>
                <p>{contactInfo.address}</p>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="contact-box">
                <i className="fas fa-phone"></i>
                <p className="h4">شماره تماس</p>
                <p>
                  <a
                    href={`tel:${contactInfo.phone_number}`}
                    className="ltr-text"
                    rel="nofollow"
                  >
                    {contactInfo.phone_number}
                  </a>
                </p>
                <p>
                  <a
                    href={`tel:${contactInfo.land_line}`}
                    className="ltr-text"
                    rel="nofollow"
                  >
                    {contactInfo.land_line}
                  </a>
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="contact-box">
                <i className="fas fa-fax"></i>
                <p className="h4">فکس</p>
                <p>
                  <a
                    href={`tel:${contactInfo.fax_number}`}
                    className="ltr-text"
                    rel="nofollow"
                  >
                    {contactInfo.fax_number}
                  </a>
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="contact-box">
                <i className="fas fa-home"></i>
                <p className="h4">ایمیل</p>
                <p>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="ltr-text"
                    rel="nofollow"
                  >
                    {contactInfo.email}
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:support@manshourplus.ir"
                    className="ltr-text"
                    rel="nofollow"
                  >
                    support@manshourplus.ir
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="wrapper white-bg-color">
        <div className="container">
          <form className="row" onSubmit={handleFormSubmit}>
            <div className="col-md-6 form-group">
              <label htmlFor="name">نام و نام خانوادگی</label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="col-md-6 form-group">
              <label htmlFor="phonenumber">شماره تماس</label>
              <input
                type="text"
                className="form-control"
                name="phonenumber"
                id="phonenumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="col-md-6 form-group">
              <label htmlFor="email">ایمیل</label>
              <input
                type="text"
                className="form-control"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="col-md-6 form-group">
              <label htmlFor="subject">موضوع</label>
              <input
                type="text"
                className="form-control"
                name="subject"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div className="col-12 form-group">
              <label htmlFor="text">متن پیام شما</label>
              <textarea
                className="form-control"
                name="text"
                id="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
              ></textarea>
            </div>
            <div className="col-12 form-group">
              <ReCAPTCHA
                sitekey="6LftFMAZAAAAAKE46HWUSVM4tE_4n6tiQUDSobk6"
                onChange={onChange}
                hl="fa"
              />
            </div>
            <div className="col-12 form-group">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={disabledButton}
              >
                ثبت و ارسال
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
