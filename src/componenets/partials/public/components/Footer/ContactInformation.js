import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
function ContactInformation() {
  const [contactInfo, setContactInfo] = useState([]);

  useEffect(() => {
    getContactInfo();
  }, []);

  const getContactInfo = () => {
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_HOME_GET_CONTACT_INFORMATION,
      method: "POST",
      withCredentials: true,
    }).then((res) => {
      try {
        // console.log(res.data.data);
        setContactInfo(res.data.data ? res.data.data : []);
      } catch (e) {
        // console.log(e);
      }
    });
  };
  return (
    <div className="col-sm-6 col-md-4">
      <div className="single-footer-widget footer_2">
        <h4>تماس با ما</h4>
        <div className="contact_info">
          <p>
            <span>آدرس :</span>
            {contactInfo.address}
          </p>
          <p>
            <span>شماره همراه : </span>
            <Link
              className="footer-link ltr-text"
              to={`tel:${contactInfo.phone_number}`}
            >
              {contactInfo.phone_number}
            </Link>
          </p>
          <p>
            <span> فکس : </span>
            <Link
              className="footer-link ltr-text"
              to={`tel:${contactInfo.fax_number}`}
            >
              {contactInfo.fax_number}
            </Link>
          </p>
          <p>
            <span>تلفن ثابت : </span>
            <Link
              className="footer-link ltr-text"
              to={`tel:${contactInfo.land_line}`}
            >
              {contactInfo.land_line}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
export default ContactInformation;
