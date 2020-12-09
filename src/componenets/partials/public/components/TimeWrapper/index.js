import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import TimeItemLists from "./TimeItemLists";
import Carousel from "react-elastic-carousel";
import "../../../../../assets/public/css/index/_timeWrapper.scss";

// get-future-section

function TimeWrapper() {
  const [timeInfo, setTimeInfo] = useState("");

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 1 },
    { width: 650, itemsToShow: 3 },
    { width: 850, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 4 },
    { width: 1750, itemsToShow: 4 },
  ];

  useEffect(() => {
    getFutureSection();
  }, []);

  const getFutureSection = () => {
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_HOME_GET_LATEST_SESSIONS,
      method: "POST",
      withCredentials: true,
    })
      .then((res) => {
        try {
          // console.log("this", res.data.data);
          setTimeInfo(res.data.data);
        } catch (e) {
          // console.log(e);
        }
      })
      .catch((e) => {
        // console.log(e);
      });
  };

  return (
    <section className="time-wrapper wrapper">
      <div className="container">
        <div className="title-section">آخرین کلاس های برگزار شده</div>

        <div className="time-carousel owl-carousel owl-theme">
          <Carousel
            itemsToShow={4}
            breakPoints={breakPoints}
            pagination={false}
          >
            {timeInfo.length > 0
              ? timeInfo.map((item, index) => (
                  <TimeItemLists key={index} item={item}></TimeItemLists>
                ))
              : []}
          </Carousel>
        </div>

        <div className="text-center">
          <Link
            to="/courses-list"
            className="btn btn-secondary py-3 px-4"
            data-ripple="ripple"
          >
            لیست کلاس های مقاطع تحصیلی
          </Link>
        </div>
      </div>
    </section>
  );
}

export default TimeWrapper;
