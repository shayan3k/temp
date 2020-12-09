import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import { getPersianDate } from "../../../../../utils/shared";
function PopularCourse() {
  const [popularCourse, setPopularCourse] = useState([]);

  useEffect(() => {
    getPopularCourse();
  }, []);

  const getPopularCourse = () => {
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_HOME_GET_POPULAR_COURSE,
      method: "POST",
      withCredentials: true,
    })
      .then((res) => {
        try {
          // console.log(res.data.data);
          setPopularCourse(res.data.data);
        } catch (e) {
          // console.log(e);
        }
      })
      .catch((e) => {
        // console.log(e);
      });
  };

  return (
    <div className="widget">
      <div className="widget-title">درس های پر طرفدار</div>
      <div className="widget-body">
        <ul className="popular-list">
          {popularCourse.map((item, index) => (
            <li key={index}>
              <Link to={`/single-course/${item.course_id._id}`}>
                <div className="image">
                  <img
                    src={
                      `${process.env.REACT_APP_IMAGE_URL}/${process.env.REACT_APP_ADMIN_COURSE_IMAGE_PATH}` +
                      item.course_id.image
                    }
                    alt={item.course_id.title}
                    title={item.course_id.title}
                  />
                </div>
                <div className="content">
                  <h5 className="title">{item.course_id.title}</h5>
                  <p>
                    <i className="fas fa-calendar"></i>
                    <span> زمان شروع : {getPersianDate(item.start_time)} </span>
                  </p>
                  <p>
                    <i className="fas fa-user"></i>
                    <span>
                      {" "}
                      استاد: {item.course_id.teacher_id.name}{" "}
                      {item.course_id.teacher_id.lastname}
                    </span>
                  </p>
                  <p>
                    <i className="fas fa-money-check-alt"></i>
                    {item.price === 0 && <span> رایگان </span>}
                    {item.price !== 0 && <span> قیمت: {item.price} تومان</span>}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PopularCourse;
