import React, { useState, useEffect } from "react";
import Axios from "axios";
import ImprovedLink from "../../../../../utils/ImprovedLink";
import "../../../../../assets/public/css/index/_introWrapper.scss";
function IntroWrapper({ ...props }) {
  const [introInfo, setIntroInfo] = useState({
    // intro_image: "default_intro.png",
    intro_image: "",
  });

  useEffect(() => {
    getIntroSection();
  }, []);

  const getIntroSection = () => {
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_HOME_GET_INTRO_SECTION,
      method: "POST",
      withCredentials: true,
    })
      .then((res) => {
        try {
          // console.log(res.data.data);
          setIntroInfo(res.data.data);
        } catch (e) {
          // console.log(e);
        }
      })
      .catch((e) => {
        // console.log(e);
      });
  };

  return (
    <section className="intro-wrapper">
      <div className="container">
        <div className="row">
          {props.ImagePosition === "right" && (
            <div className="col-md-5">
              <img
                src={
                  process.env.REACT_APP_IMAGE_URL +
                  "/" +
                  process.env.REACT_APP_ADMIN_WEBCONTROL_IMAGE_PATH +
                  introInfo.intro_image
                }
                alt={introInfo.title}
                title={introInfo.title}
                className="human-intro-image"
              />
            </div>
          )}

          <div className="col-md-7">
            <div className="content">
              <h1>
                اینجا <span>{props.title}</span> است
              </h1>
              <h2>{introInfo.intro_subtitle}</h2>

              <ImprovedLink
                to={`${introInfo.intro_link}`}
                className={`btn ${props.btnClass}`}
                data-ripple="ripple"
              >
                {introInfo.intro_button}
              </ImprovedLink>
            </div>
          </div>
          {props.ImagePosition === "left" && (
            <div className="col-md-5">
              {/* <img src={props.IntroUser} alt="user" title="user" /> */}
              <img
                src={
                  `${process.env.REACT_APP_IMAGE_URL}/${process.env.REACT_APP_ADMIN_WEBCONTROL_IMAGE_PATH}` +
                  introInfo.intro_image
                }
                alt={introInfo.title}
                title={introInfo.title}
              />
            </div>
          )}
        </div>
      </div>
      <img
        className="ribbon"
        src={props.IntroRibbon}
        alt="ribbon"
        title="ribbon"
      />
    </section>
  );
}
export default IntroWrapper;
