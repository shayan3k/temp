import React, { useState, useEffect } from "react";
import Axios from "axios";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageTitle from "../../components/PageTitle";
import DangerouslySetInnerHTML from "../../../shared/components/DangerouslySetInnerHTML";

import "../../../../../assets/public/css/style.scss";
import Logo from "../../../../../assets/public/images/logo.png";

export default function AboutPage() {
  const [aboutUs, setAboutUs] = useState("");
  const breadItemsArray = [
    { title: "درباره ما", link: "/about" },
    { title: "صفحه اصلی", link: "/" },
  ];
  useEffect(() => {
    getAboutSection();
  }, []);

  const getAboutSection = () => {
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_HOME_GET_ABOUT_SECTION,
      method: "POST",
      withCredentials: true,
    })
      .then((res) => {
        try {
          // console.log(res.data.data);
          setAboutUs(res.data.data.about_us);
        } catch (e) {
          // console.log(e);
        }
      })
      .catch((e) => {
        // console.log(e);
      });
  };

  return (
    <div className="girls-page">
      <Header />
      <div className="pages-main">
        <PageTitle
          pageImage={"bg_about.png"}
          breadItemsArray={breadItemsArray}
          pageTitle="درباره ما"
          imageUrl={
            process.env.REACT_APP_IMAGE_URL +
            "/" +
            process.env.REACT_APP_ADMIN_WEBCONTROL_IMAGE_PATH
          }
        />
        <section className="about-wrapper wrapper">
          <div className="container">
            <DangerouslySetInnerHTML message={aboutUs} />
          </div>
        </section>
        .
        {/* <AboutWrapper
          content={`
                        <h2>درباره منشور دانش</h2>
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                        <p>&nbsp;</p>
                        <h2>مزایای استفاده از منشور دانش</h2>
                        <ul>
                            <li>اولین آیتم شما در این قسمت</li>
                            <li>ایول چه باحاله، واسم جالب بود</li>
                            <li>اینکه الان <b>string</b> داره به <b>jsx</b> تبدیل میشه</li>
                            <li>امیدوارم این قضیه کاربردی باشه :))))</li>
                        </ul>
                    `}
        /> */}
        {/* Vase HTML Editor ke beshe content e bala ro edit kard, `CKeditor` ro pishnahad mikonm */}
      </div>
      <Footer />
    </div>
  );
}
