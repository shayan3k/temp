import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Axios from "axios";
import { useRecoilState } from "recoil";
import {
  IsAuthenticated,
  UserRole,
  PhoneNumber,
  TriggerSingleCourseRefresh,
} from "../../../../../services/Recoils";
import DangerouslySetInnerHTML from "../../../shared/components/DangerouslySetInnerHTML";
import "../../../../../assets/public/css/pages/_singleCourse.scss";

import CourseInfo from "../SideBar/CourseInfo";
import SocialMedia from "../SideBar/SocialMedia";
import LiveChat from "../LiveChat";
import Categories from "../SideBar/Categories";
import PopularCourse from "../SideBar/PopularCourse";
import CommentList from "../CommentList";
import CreateComment from "../CreateComment";
import PageTitle from "../PageTitle";
import TeacherList from "./TeacherList";
import SessionList from "../SessionList";
import ExamList from "../ExamList";

function SingleCourse({ ...props }) {
  const [isAuthenticated] = useRecoilState(IsAuthenticated);
  const [userRole] = useRecoilState(UserRole);
  const [phoneNumber] = useRecoilState(PhoneNumber);
  const [
    triggerSingleCourseRefresh,
    setTriggerSingleCourseRefresh,
  ] = useRecoilState(TriggerSingleCourseRefresh);

  const courseId = props.match.params.id;
  const [courseSingle, setCourseSingle] = useState([]);
  const [courseSession, setCourseSession] = useState([]);
  const [teacherInfo, setTeacherInfo] = useState([]);
  const [gradeInfo, setGradeInfo] = useState([]);
  const [courseExamList, setCourseExamList] = useState([]);
  const [courseTitle, setCourseTitle] = useState("");
  const [enrollmentRecord, setEnrollmentRecord] = useState(null);
  const [isDataFeched, setIsDataFetched] = useState(false);

  useEffect(() => {
    getSingleCourse();
  }, [triggerSingleCourseRefresh]);

  const getSingleCourse = () => {
    let data = new FormData();
    data.append("course_id", courseId);

    let myUrl = "";

    if (isAuthenticated && userRole == "student") {
      myUrl =
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_GET_SINGLE_COURSE;
    } else {
      myUrl =
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_HOME_GET_SINGLE_COURSE;
    }

    Axios({
      url: myUrl,
      method: "POST",
      withCredentials: true,
      data,
    })
      .then((res) => {
        try {
          console.log(res.data);
          setCourseSingle(res.data.data.course);
          setCourseSession(res.data.data.courseSession);
          setGradeInfo(res.data.data.course.grade_id);
          setTeacherInfo(res.data.data.course.teacher_id);
          setCourseTitle(res.data.data.course.title);
          setCourseExamList(
            res.data.data.courseExam ? res.data.data.courseExam : []
          );
          setEnrollmentRecord(res.data.data.enrollmentRecord);
          setIsDataFetched(true);
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
      title: courseSingle && courseSingle.title,
      link: `/single-course/${courseSingle._id}`,
    },
    { title: "لیست درس ها", link: "/courses-list" },
    { title: "صفحه اصلی", link: "/" },
  ];

  return (
    <>
      <PageTitle
        pageImage={courseSingle.image}
        breadItemsArray={breadItemsArray}
        pageTitle={courseSingle && courseSingle.title}
        imageUrl={
          process.env.REACT_APP_IMAGE_URL +
          "/" +
          process.env.REACT_APP_ADMIN_COURSE_IMAGE_PATH
        }
      />

      <section className="single-course-wrapper wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {courseSingle.is_chat_active ? (
                <LiveChat props={props} course={courseSingle} />
              ) : (
                ""
              )}

              <CourseInfo
                teacherInfo={teacherInfo}
                courseSingle={courseSingle}
                courseSession={courseSession}
                enrollmentRecord={enrollmentRecord}
                gradeInfo={gradeInfo}
                isDataFeched={isDataFeched}
              />
              {isDataFeched && (
                <LiveChat
                  props={props}
                  courseTitle={courseTitle}
                  is_active={courseSingle.is_chat_active}
                />
              )}
              {isDataFeched && (
                <SocialMedia
                  courseId={courseId}
                  courseTitle={courseTitle}
                  courseDescription={courseSingle.description}
                />
              )}
              <Categories />
              <PopularCourse />
            </div>
            <div className="col-md-8">
              <div className="course-image mb-5">
                {enrollmentRecord ? (
                  <div className="w-100">
                    <span
                      className="w-100"
                      dangerouslySetInnerHTML={{
                        __html: courseSingle.video_url,
                      }}
                    ></span>
                  </div>
                ) : (
                  <div className="w-100">
                    <p className="alert alert-warning">
                      <strong>
                        لطفا برای دسترسی به ویدیو زنده در کلاس ثبت نام کنید.
                      </strong>
                    </p>
                  </div>
                )}
              </div>
              <TeacherList teacherInfo={teacherInfo} />

              <div className="overview-box mb-5">
                <h3 className="box-title">توضیحات این درس</h3>
                {isDataFeched && courseSingle && courseSingle.description ? (
                  <DangerouslySetInnerHTML message={courseSingle.description} />
                ) : (
                  ""
                )}
              </div>

              {courseSession.map((item, index) => (
                <SessionList
                  key={index}
                  index={index}
                  course={courseSingle}
                  courseSession={item}
                  enrollmentRecord={enrollmentRecord}
                />
              ))}
              <ExamList courseExamList={courseExamList} courseId={courseId} />
              <CommentList courseId={courseId} />
              {isDataFeched && (
                <CreateComment
                  courseId={courseId}
                  isAuthenticated={isAuthenticated}
                  userRole={userRole}
                  phoneNumber={phoneNumber}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default withRouter(SingleCourse);
