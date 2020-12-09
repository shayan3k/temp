import React, { useState, useEffect } from "react";
import axios from "axios";
import { withRouter, Redirect } from "react-router-dom";
import Pagination from "../../../shared/components/Pagination";
import CourseItem from "../../../public/components/CoursesList/CourseItem";
import { getPersianDate2 } from "../../../../../utils/shared";
import Image1 from "../../../../../assets/public/images/course-item-01.jpg";

function AdminGetUserEnrolledCourse(props) {
  const userId = props.match.params.id;
  const [enrolledCourse, setEnrolledCourse] = useState([]);

  const [hasMore, setHasMore] = useState(false);
  const [itemCount, setItemCount] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const [isRedirect, setIsRedirect] = useState(false);

  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    getEnrolledCourse();
  }, [currentPage]);

  const getEnrolledCourse = () => {
    setIsLoaded(false);

    let data = new FormData();
    data.append("id", userId);
    data.append("page", currentPage);
    axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_ADMIN_GET_USER_ENROLLED_COURSE,
      withCredentials: true,
      method: "post",
      data,
    })
      .then((res) => {
        try {
          if (res.data.err === true) {
            setIsRedirect(true);
          }
          setHasMore(res.data.data.hasMore);
          setItemCount(res.data.data.itemCount);
          setPageCount(res.data.data.pageCount);
          setEnrolledCourse(res.data.data.data ? res.data.data.data : []);
        } catch (e) {}
      })
      .catch((e) => console.log(e.message))
      .finally(() => setIsLoaded(true));
  };

  if (isRedirect) return <Redirect to="/404" />;

  return (
    <section className="courses-wrapper wrapper">
      <h2 className="title_up"> لیست دروس ثبت نام شده </h2>

      <div className="container">
        {isLoaded ? (
          enrolledCourse.length > 0 ? (
            <>
              <div className="row">
                {enrolledCourse.map((item, index) => (
                  <CourseItem
                    key={index}
                    col="col-md-6 col-lg-4"
                    id={item._id}
                    courseTitle={item.title}
                    courseDate={getPersianDate2(item.createdAt)}
                    courseDescription={
                      item.description.substring(0, 30) + "..."
                    }
                    courseGrade={item.grade_id.title}
                    courseTeacher={`${item.teacher_id.lastname}`}
                    courseImage={Image1}
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
          ) : (
            <div className="alert alert-danger" role="alert">
              متاسفانه درسی یافت نشد!
            </div>
          )
        ) : (
          <div className="alert alert-info" role="alert">
            در حال بارگذاری...
          </div>
        )}
      </div>
    </section>
  );
}
export default withRouter(AdminGetUserEnrolledCourse);
