import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import Axios from "axios";
import Pagination from "../../../shared/components/Pagination";
import {
  notificationAlert,
  getPersianDate2,
} from "../../../../../utils/shared";
import CourseItem from "../../../public/components/CoursesList/CourseItem";
function GetAllCourse() {
  const [courseList, setCourseList] = useState([]);
  const [title, setTitle] = useState("");
  const [hasMore, setHasMore] = useState(false);
  const [itemCount, setItemCount] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    GetAllCourse();
  }, [currentPage, title]);

  //Get All Course
  const GetAllCourse = () => {
    setIsLoading(true);
    let data = new FormData();
    data.append("page", currentPage);
    if (title) data.append("title", title);
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_GET_ALL_COURSE,
      method: "POST",
      withCredentials: true,
      data,
    })
      .then((res) => {
        try {
          // console.log(res.data.data.data);
          setHasMore(res.data.data.hasMore);
          setItemCount(res.data.data.itemCount);
          setPageCount(res.data.data.pageCount);
          setCourseList(res.data.data.data ? res.data.data.data : []);
        } catch (e) {
          // console.log(e);
        }
      })
      .catch((e) => {
        // console.log(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  //DELETE Course
  const deleteSignleCourse = (id) => {
    let data = new FormData();
    data.append("id", id);
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_DELETE_SINGLE_COURSE,

      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      method: "POST",
      data,
    })
      .then((res) => {
        // console.log(res.data);
        GetAllCourse();
        notificationAlert(
          res.data.success === false ? "خطا !" : "انجام شد!",
          res.data.message,
          res.data.success === false ? "error" : "success"
        );
      })
      .finally(() => {
        return false;
      });
  };

  return (
    <section className="courses-wrapper wrapper">
      <h2 className="section-title mb-0">لیست دروس</h2>
      <div className="text-left mb-3">
        <Link
          to="/admin/create-new-course"
          className="btn btn-success py-2 px-3"
        >
          ثبت درس جدید
        </Link>
      </div>

      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">جستجوی درس </span>
        </div>
        <input
          type="text"
          className="form-control"
          value={title}
          placeholder="نام درس"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <br />

      <div className="container">
        {courseList.length === 0 && !isLoading && (
          <div className="alert alert-danger" role="alert">
            متاسفانه درسی یافت نشد!
          </div>
        )}

        {isLoading ? (
          <div className="alert alert-danger w-100">در حال بارگذاری...</div>
        ) : (
          <>
            <div className="row">
              {courseList.length > 0 &&
                courseList.map((item, index) => (
                  <CourseItem
                    key={index}
                    col="col-md-6 col-lg-4"
                    id={item._id}
                    courseTitle={item.title}
                    courseDate={getPersianDate2(item.createdAt)}
                    courseDescription={item.description}
                    courseGrade={item.grade_id?.title}
                    courseTeacher={`${item.teacher_id.lastname}`}
                    categories={
                      item.category_id
                        ? item.category_id.map((item) => item.title + ` `)
                        : ""
                    }
                    DeleteItem={deleteSignleCourse}
                    showExams={true}
                    showSessons={true}
                    showAssignment={true}
                    showReportCard={true}
                    courseImage={
                      `${process.env.REACT_APP_IMAGE_URL}/${process.env.REACT_APP_ADMIN_COURSE_IMAGE_PATH}` +
                      item.image
                    }
                  />
                ))}
            </div>

            <nav aria-label="...">
              <Pagination
                hasMore={hasMore}
                setHasMore={setHasMore}
                itemCount={itemCount}
                pageCount={pageCount}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                class_name="justify-content-center"
              />
            </nav>
          </>
        )}
      </div>
    </section>
  );
}
export default withRouter(GetAllCourse);
