import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../../../../../assets/public/css/index/_teacherWrapper.scss";
import TeacherItemList from "./TeacherItemList";
import Carousel from "react-elastic-carousel";

function TeacherWrapper({ ...props }) {
  const [teacherList, setTeacherList] = useState([]);
  const [teacherInfo, setTeacherInfo] = useState([]);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 150, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 450, itemsToShow: 2 },
    { width: 650, itemsToShow: 3 },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4 },
  ];

  useEffect(() => {
    getPopularTeacher();
    getTeacherSection();
  }, []);

  const getPopularTeacher = () => {
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_HOME_GET_POPULAR_TEACHER,
      method: "POST",
      withCredentials: true,
    }).then((res) => {
      try {
        // console.log(res.data.data);
        setTeacherList(res.data.data ? res.data.data : []);
      } catch (e) {
        // console.log(e);
      }
    });
  };

  const getTeacherSection = () => {
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_HOME_GET_TEACHER_SECTION,
      method: "POST",
      withCredentials: true,
    }).then((res) => {
      try {
        // console.log(res.data.data);
        setTeacherInfo(res.data.data ? res.data.data : []);
      } catch (e) {
        // console.log(e);
      }
    });
  };

  return (
    <section className="teacher-wrapper">
      <div className="container">
        <div className="title-box">
          <h2 className="title">
            <span>{teacherInfo.teacher_title}</span>
          </h2>
          <h3 className="desc">{teacherInfo.teacher_subtitle}</h3>
        </div>
        <div className="slide-content">
          {teacherList.length > 0 && (
            <Carousel
              itemsToShow={3}
              breakPoints={breakPoints}
              pagination={false}
              itemPadding={[5, 5]}
            >
              {teacherList.map((item, index) => (
                <TeacherItemList
                  key={index}
                  image={item.teacher_id.image}
                  teacher_id={item.teacher_id._id}
                  teacher_name={`${item.teacher_id.name} ${item.teacher_id.lastname}`}
                  description={item.teacher_id.diploma}
                ></TeacherItemList>
              ))}
            </Carousel>
          )}
        </div>

        <div className="description-box">
          <div className="text-center">
            <p
              dangerouslySetInnerHTML={{
                __html: teacherInfo.teacher_text,
              }}
            >
              {/* {teacherInfo.teacher_text} */}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeacherWrapper;
