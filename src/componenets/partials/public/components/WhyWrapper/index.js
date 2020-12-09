import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../../../../../assets/public/css/index/_whyWrapper.scss";
import WhyWrapperListItemes from "./WhyWrapperListItemes";
import icone_img1 from "../../../../../assets/public/images/why-icons/01.png";
import icone_img2 from "../../../../../assets/public/images/why-icons/02.png";
import icone_img3 from "../../../../../assets/public/images/why-icons/03.png";
import icone_img4 from "../../../../../assets/public/images/why-icons/04.png";
import icone_img5 from "../../../../../assets/public/images/why-icons/05.png";
import icone_img6 from "../../../../../assets/public/images/why-icons/06.png";
function WhyWrapper() {
  const [secondaryInfo, setSecondaryInfo] = useState({
    secondary_image: "",
  });

  useEffect(() => {
    getIntroSection();
  }, []);

  const getIntroSection = () => {
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_HOME_GET_SECONDARY_SECTION,
      method: "POST",
      withCredentials: true,
    })
      .then((res) => {
        try {
          // console.log(res.data.data);
          setSecondaryInfo(res.data.data);
        } catch (e) {
          // console.log(e);
        }
      })
      .catch((e) => {
        // console.log(e);
      });
  };

  return (
    <section className="why-wrapper wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-9 col-lg-8">
            <div className="title-box">
              <h2>{secondaryInfo.secondary_title}</h2>
              <p
                dangerouslySetInnerHTML={{
                  __html: secondaryInfo.secondary_text,
                }}
              ></p>
            </div>
            <ul>
              <WhyWrapperListItemes
                image={icone_img1}
                title="مدیریت زمان دانش آموز"
              ></WhyWrapperListItemes>
              <WhyWrapperListItemes
                image={icone_img2}
                title="ارتباط با برترین اساتید ایران"
              ></WhyWrapperListItemes>
              <WhyWrapperListItemes
                image={icone_img3}
                title="پشتیبانی دانش آموزان"
              ></WhyWrapperListItemes>
              <WhyWrapperListItemes
                image={icone_img4}
                title="امکان دیدن آموزش ها به صورت آفلاین"
              ></WhyWrapperListItemes>
              <WhyWrapperListItemes
                image={icone_img5}
                title="به صرفه و پرداخت اقساطی"
              ></WhyWrapperListItemes>
              <WhyWrapperListItemes
                image={icone_img6}
                title="امکان پرسش و پاسخ از استاد"
              ></WhyWrapperListItemes>
            </ul>
          </div>
        </div>
      </div>
      <img
        src={
          process.env.REACT_APP_IMAGE_URL +
          "/" +
          process.env.REACT_APP_ADMIN_WEBCONTROL_IMAGE_PATH +
          secondaryInfo.secondary_image
        }
        alt="manshoure danesh"
        className="humanObj"
      />
    </section>
  );
}

export default WhyWrapper;
