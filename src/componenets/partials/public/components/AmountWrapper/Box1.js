import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import { getPersianDate2 } from "../../../../../utils/shared";
function Box1() {
  const [futureInfo, setFutureInfo] = useState("");

  useEffect(() => {
    getStatisticSection();
  }, []);

  const getStatisticSection = () => {
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_HOME_GET_FUTURE_SECTION,
      method: "POST",
      withCredentials: true,
    })
      .then((res) => {
        try {
          var size = 3;
          var items = res.data.data.slice(0, size).map((i) => i);
          // console.log(items);
          setFutureInfo(items);
        } catch (e) {
          // console.log(e);
        }
      })
      .catch((e) => {
        // console.log(e);
      });
  };
  return (
    <div className="col-md-4">
      <div className="title-box">
        <div data-ripple="ripple">
          <i className="fas fa-home"></i>
          <span>کلاس های آتی</span>
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
        {futureInfo.length > 0 &&
          futureInfo.map((item, index) => (
            <div key={index}>
              <h5>{item.course_id.title}</h5>
              <p> تاریخ شروع : {getPersianDate2(item.start_time)}</p>
              {item.price === 0 && <p>رایگان</p>}
              {item.price !== 0 && <p> قیمت : {item.price} تومان </p>}
              <Link
                to={`/single-course/${item.course_id._id}`}
                className="btn btn-primary py-2 px-4"
                data-ripple="ripple"
              >
                شرکت در کلاس
              </Link>
              <hr />
            </div>
          ))}
      </div>
    </div>
  );
}
export default Box1;
