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

import "../../../../../assets/public/css/style.scss";
import "../../../../../assets/public/css/_girlsVersion.scss";

import IntroRibbon from "../../../../../assets/public/images/intro-ribbon.png";
import IntroUser from "../../../../../assets/public/images/intro-user-girl.png";
import woman_image from "../../../../../assets/public/images/woman-image.jpg";
import why_wrapper_img from "../../../../../assets/public/images/why-human-girl.png";

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
        <WhyWrapper
          title="چرا آموزشگاه بعثت رو انتخاب کنم؟"
          text="
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
            در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
            نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
            جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را
            برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در
            زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و
            دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد
            وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات
            پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
          "
          image={why_wrapper_img}
        ></WhyWrapper>
        <TeacherWrapper
          title="بهترین اساتید ایران"
          description="بهترین ها در تمامی پایه های تحصیلی"
          text="
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
          استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
          در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
          نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
          کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
          جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای
          طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
          فارسی ایجاد کرد.
        "
        ></TeacherWrapper>
        <TimeWrapper
          title="ساعت پخش کلاس های مقاطع تحصیلی"
          link="#"
          link_text="لیست کلاس های مقاطع تحصیلی"
        ></TimeWrapper>
        <FreeWrapper
          image={woman_image}
          video_btn_title="نمایش ویدیو"
          video_btn_link="#"
          title="تدریس رایگان"
          sub_title="رایگان تجربه کن...!"
          text="
لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
"
          btn_link="#"
          btn_title="کلاس های رایگان"
        ></FreeWrapper>
        <AmountWrapper></AmountWrapper>
        <RankingWrapper
          title_box="رتبه های برتر آموزشگاه بعثت"
          title="ما بهترین ها رو آموزش میدهیم"
          desc=">آموزشگاه بعثت آزمون خود را داده است"
          text="
لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
"
          slider_title="بهترین رتبه های کنکور سراسری کشوری"
        ></RankingWrapper>
        <CommentWrapper title="نظرتون چیه؟"></CommentWrapper>
        <SocialWrapper title="آموزشگاه بعثت در رسانه ها"></SocialWrapper>
      </div>
      <Footer />
    </div>
  );
}
export default GirlPage;
