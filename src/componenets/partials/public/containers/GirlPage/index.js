import React from "react";
import Header from "../../components/Header";
import IntroWrapper from "../../components/IntroWrapper";
import WhyWrapper from "../../components/WhyWrapper";
import TeacherWrapper from "../../components/TeacherWrapper";
import TimeWrapper from "../../components/TimeWrapper";
import FreeWrapper from "../../components/FreeWrapper";
import AmountWrapper from "../../components/AmountWrapper";
import RankingWrapper from "../../components/RankingWrapper";
import CommentWrapper from "../../components/CommentWrapper";
import SocialWrapper from "../../components/SocialWrapper";
import Footer from "../../components/Footer";
import CountDown from "../../components/CountDown";

import "../../../../../assets/public/css/style.scss";
import "../../../../../assets/public/css/_girlsVersion.scss";

import IntroRibbon from "../../../../../assets/public/images/intro-ribbon.png";
import IntroUser from "../../../../../assets/public/images/intro-user-girl.png";
// import woman_image from "../../../../../assets/public/images/woman-image.jpg";
// import why_wrapper_img from "../../../../../assets/public/images/why-human-girl.png";

function GirlPage() {
  return (
    <div className="girls-page">
      <Header />
      <div className="main">
        <IntroWrapper
          IntroUser={IntroUser}
          IntroRibbon={IntroRibbon}
          ImagePosition="left"
          title="آموزشگاه بعثت"
          btnClass="btn-primary"
        ></IntroWrapper>

        <WhyWrapper />

        <TeacherWrapper />

        <TimeWrapper sectionTitle="تایتل" />

        <FreeWrapper />

        <AmountWrapper />

        <CountDown />

        <RankingWrapper
          title_box="رتبه های برتر آموزشگاه بعثت"
          title="ما بهترین ها رو آموزش میدهیم"
        ></RankingWrapper>

        <CommentWrapper title="نظرتون چیه؟"></CommentWrapper>

        {/* <CoursesList sectionTitle="درس های محبوب" /> */}
        {/* از پلاگینی که برای کروسل استفاده میکنید، توی این قسمت استفاده کنید */}

        <SocialWrapper title="آموزشگاه بعثت در رسانه ها"></SocialWrapper>
      </div>

      <Footer />
    </div>
  );
}
export default GirlPage;
