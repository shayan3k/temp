import React, { useState, useEffect } from "react";
import Axios from "axios";
import { NavLink } from "react-router-dom";
import DangerouslySetInnerHTML from "../../../shared/components/DangerouslySetInnerHTML";
function AboutInformation({ ...props }) {
  const [aboutInfo, setAboutInfo] = useState([]);

  useEffect(() => {
    getAboutInfo();
  }, []);

  const getAboutInfo = () => {
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_HOME_GET_ABOUT_SECTION,
      method: "POST",
      withCredentials: true,
    }).then((res) => {
      try {
        setAboutInfo(res.data.data ? res.data.data : []);
      } catch (e) {
        // console.log(e);
      }
    });
  };
  return (
    <div className="about-info text-center mb-5 pb-4 pb-md-5">
      <NavLink to="/">
        <img src={process.env.REACT_APP_BACKEND_URL + "logo.png"} alt="logo" />
      </NavLink>
      <a href="#" target="_blank" className="">
        <img
          src={process.env.REACT_APP_IMAGE_URL + "/" + "namad.png"}
          style={{ height: "100%" }}
        />
      </a>
      {!!aboutInfo.about_us && (
        <DangerouslySetInnerHTML message={aboutInfo.about_us} substring={240} />
      )}
    </div>
  );
}
export default AboutInformation;
