import React, { useState, useEffect } from "react";
import Axios from "axios";
import ImprovedLink from "../../../../../utils/ImprovedLink";
import DangerouslySetInnerHTML from "../../../shared/components/DangerouslySetInnerHTML";
import "../../../../../assets/public/css/index/_freeWrapper.scss";
function FreeWrapper() {
  const [freeInfo, setFreeInfo] = useState("");

  useEffect(() => {
    getFreeSection();
  }, []);

  const getFreeSection = () => {
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_HOME_GET_FREE_SECTION,
      method: "POST",
      withCredentials: true,
    })
      .then((res) => {
        try {
          // console.log(res.data.data);
          setFreeInfo(res.data.data);
        } catch (e) {
          // console.log(e);
        }
      })
      .catch((e) => {
        // console.log(e);
      })
      .finally(() => { });
  };

  return (
    <section className="free-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="video-box">
              <div className="r1_iframe_embed">
                <span
                  dangerouslySetInnerHTML={{ __html: freeInfo.free_video_link }}
                ></span>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="title-box">
              <span>{freeInfo.free_title}</span>
            </div>
            <h2 className="display-4">{freeInfo.free_subtitle}</h2>
            <DangerouslySetInnerHTML message={freeInfo.free_text} />
            <ImprovedLink
              to={`${freeInfo.free_btn_link}`}
              className="btn btn-light py-3 px-4"
              data-ripple="ripple"
            >
              {freeInfo.free_btn_text}
            </ImprovedLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FreeWrapper;
