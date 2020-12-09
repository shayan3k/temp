import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link, withRouter } from "react-router-dom";
import CourseItems from "./CourseItems";
import Pagination from "../../../shared/components/Pagination";
import { notificationAlert } from "../../../../../utils/shared";
function GetPopularCourse() {
  const [courseList, setCourseList] = useState([]);

  const [hasMore, setHasMore] = useState(false);
  const [itemCount, setItemCount] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    getPopularCourse();
  }, [currentPage]);

  const getPopularCourse = () => {
    setIsLoaded(false);

    let data = new FormData();
    data.append("page", currentPage);
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_WEB_CONTROL_GET_POPULAR_COURSE,
      method: "POST",
      data,
      withCredentials: true,
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
      .catch((e) => console.log(e.message))
      .finally(() => setIsLoaded(true));
  };
  const deletePopularCourse = (id) => {
    let data = new FormData();
    data.append("id", id);
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_WEB_CONTROL_DELETE_POPULAR_COURSE,

      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      method: "POST",
      data,
    })
      .then((res) => {
        getPopularCourse();
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
    <section className="form-wrapper has-icon wrapper">
      <h2 className="section-title mb-0">لیست محبوب ترین درس ها</h2>
      <div className="text-left mb-4">
        <Link to="/admin/create-popular-course" className="btn btn-success">
          ثبت درس محبوب جدید
        </Link>
      </div>
      {isLoaded ? (
        courseList.length > 0 ? (
          <>
            <table className="table table-bordered table-striped text-center">
              <thead className="thead-light">
                <tr>
                  <th scope="col"> ایندکس </th>
                  <th scope="col">عنوان درس </th>
                  <th scope="col"> وضعیت پرداخت </th>
                  <th scope="col"> جلسه ای </th>
                  <th scope="col">ویرایش / حذف</th>
                </tr>
              </thead>
              <tbody>
                {courseList.map((item, index) => (
                  <CourseItems
                    key={index}
                    id={item._id}
                    course_id={item.course_id}
                    index={item.index}
                    is_a_session={item.is_a_session}
                    is_pay_all={item.is_pay_all}
                    course_title={item.course_id.title}
                    DeleteItem={deletePopularCourse}
                  />
                ))}
              </tbody>
            </table>
            <nav className="mt-4" aria-label="...">
              <Pagination
                hasMore={hasMore}
                setHasMore={setHasMore}
                itemCount={itemCount}
                pageCount={pageCount}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </nav>
          </>
        ) : (
          <div className="alert alert-danger" role="alert">
            هنوز درسی ثبت نشده است
          </div>
        )
      ) : (
        <div className="alert alert-info" role="alert">
          در حال بارگذاری...
        </div>
      )}
    </section>
  );
}
export default withRouter(GetPopularCourse);
