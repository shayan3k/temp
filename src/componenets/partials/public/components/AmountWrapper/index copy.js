import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../../../../../assets/public/css/index/_amoutWrapper.scss";
import AmountWrapperItems from "./AmountWrapperItems";
function AmountWrapper() {
  const [statisticInfo, setStatisticInfo] = useState("");

  useEffect(() => {
    getStatisticSection();
  }, []);

  const getStatisticSection = () => {
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_HOME_GET_STATISTIC_SECTION,
      method: "POST",
      withCredentials: true,
    })
      .then((res) => {
        try {
          // console.log(res.data.data);
          setStatisticInfo(res.data.data);
        } catch (e) {
          // console.log(e);
        }
      })
      .catch((e) => {
        // console.log(e);
      })
      .finally(() => {});
  };

  return (
    <section className="amount-wrapper">
      <div className="container">
        <div className="row">
          <AmountWrapperItems
            title="کلاس آتی"
            sub_title1="کلاس ریاضی ۳"
            description1="استاد منشور دانش"
            btn_link1="#"
            sub_title2="کلاس علوم 12"
            description2="استاد منشور دانش"
            btn_link2="#"
          ></AmountWrapperItems>
          <AmountWrapperItems
            title="دانش آموزان"
            sub_title1="مجموع ثبت نام ها"
            count1={statisticInfo.userCount}
            sub_title2="تعداد دروس"
            count2={statisticInfo.courseCount}
            sub_title3="تعداد جلسات"
            count3={statisticInfo.sessionCount}
          ></AmountWrapperItems>
          <AmountWrapperItems
            title="کلاس های آنلاین"
            sub_title1="کلاس ریاضی ۳"
            description1="استاد منشور دانش"
            btn_link1="#"
            sub_title2="کلاس علوم 12"
            description2="استاد منشور دانش"
            btn_link2="#"
          ></AmountWrapperItems>
        </div>
      </div>
    </section>
  );
}
export default AmountWrapper;
