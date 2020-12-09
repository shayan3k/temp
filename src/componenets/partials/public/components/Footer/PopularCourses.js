import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

export default function PopularCourses() {
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
    <div className="col-md-4">
      <div className="single-footer-widget">
        <h4 className="useful-head">درس های پرطرفدار</h4>
        <div className="footer-popular">
          {popularCourse.map((item, index) => (
            <Link
              className="footer-link border-white"
              to={`/single-course/${item.course_id._id}`}
              key={index}
            >
              <div key={index} className="footer-popular-item row">
                <span className="px-3">
                  <img
                    src={
                      process.env.REACT_APP_IMAGE_URL +
                      "/" +
                      process.env.REACT_APP_ADMIN_COURSE_IMAGE_PATH +
                      item.course_id.image
                    }
                    alt={item.course_id.title}
                    title={item.course_id.title}
                  />
                </span>

                <div className="footer-popular-content">
                  <p>{item.course_id.title}</p>
                  <small>
                    {"استاد: "}
                    {item.course_id.teacher_id.name +
                      " " +
                      item.course_id.teacher_id.lastname}
                  </small>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
