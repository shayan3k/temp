import React, { useState, useEffect } from "react";
import Axios from "axios";
function Box2() {
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
      });
  };
  // console.log("statisticInfo", statisticInfo);
  return (
    <div className="col-md-4">
      <div className="title-box">
        <div data-ripple="ripple">
          <i className="fas fa-home"></i>
          <span>دانش آموزان</span>
        </div>
      </div>
      <div className="content-box">
        <div className="dots">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <h5>مجموع ثبت نام ها</h5>
        <strong className="blue-color">
          <span>{statisticInfo ? statisticInfo.userCount : 0}</span> نفر
        </strong>
        <hr />
        <h5>تعداد دروس</h5>
        <strong className="blue-color">
          <span>{statisticInfo ? statisticInfo.courseCount : 0}</span> درس
        </strong>
        <hr />
        <h5>تعداد جلسات</h5>
        <strong className="blue-color">
          <span>{statisticInfo ? statisticInfo.sessionCount : 0}</span> جلسه
        </strong>
      </div>
    </div>
  );
}
export default Box2;
