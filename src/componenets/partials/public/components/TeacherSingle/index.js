import React, { useState, useEffect } from "react";
import Axios from "axios";
import { withRouter } from "react-router-dom";
import "../../../../../assets/public/css/pages/_Teachers.scss";
import PageTitle from "../PageTitle";
import DangerouslySetInnerHTMLfrom from "../../../shared/components/DangerouslySetInnerHTML";
function TeacherSingle({ ...props }) {
  const teacherId = props.match.params.id;
  const [teacherInfo, setTeacherInfo] = useState([]);
  useEffect(() => {
    getSingleCourse();
  }, []);

  const getSingleCourse = () => {
    let data = new FormData();
    data.append("id", teacherId);

    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_HOME_GET_SINGLE_TEACHER,
      method: "POST",
      withCredentials: true,
      data,
    })
      .then((res) => {
        try {
          // console.log(res.data.data);
          setTeacherInfo(res.data.data);
        } catch (e) {
          // console.log(e);
        }
      })
      .catch((e) => {
        // console.log(e);
      });
  };
  const breadItemsArray = [
    {
      title: teacherInfo && teacherInfo.name + " " + teacherInfo.lastname,
      link: `/teacher-single/${teacherInfo.id}`,
    },
    { title: "لیست اساتید", link: "/teachers" },
    { title: "صفحه اصلی", link: "/" },
  ];

  return (
    <>
      <PageTitle
        pageImage={"bg_teacher.png"}
        breadItemsArray={breadItemsArray}
        pageTitle={teacherInfo && teacherInfo.name + " " + teacherInfo.lastname}
        imageUrl={
          process.env.REACT_APP_IMAGE_URL +
          "/" +
          process.env.REACT_APP_ADMIN_WEBCONTROL_IMAGE_PATH
        }
      />

      <div className="teacher-single-wrapper wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="image">
                <img
                  src={
                    process.env.REACT_APP_IMAGE_URL +
                    "/" +
                    process.env.REACT_APP_ADMIN_TEACHER_IMAGE_PATH +
                    teacherInfo.image
                  }
                  alt={teacherInfo.lastname}
                  title={teacherInfo.lastname}
                />
              </div>
            </div>
            <div className="col-md-7">
              <div className="title-box">
                <h2 className="title">
                  {teacherInfo.name} {teacherInfo.lastname}
                </h2>
                <p>{teacherInfo.diploma}</p>
              </div>
              <div className="content-box">
                <DangerouslySetInnerHTMLfrom message={teacherInfo.cv} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default withRouter(TeacherSingle);
