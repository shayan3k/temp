import React, { useState, useEffect } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import Axios from "axios";
import Pagination from "../../../shared/components/Pagination";
import CourseExamItems from "./CourseExamItems";
import { notificationAlert } from "../../../../../utils/shared";
function GetCourseExam(props) {
  const courseId = props.match.params.id;
  const [courseExamList, setCourseExamList] = useState([]);

  const [hasMore, setHasMore] = useState(false);
  const [itemCount, setItemCount] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [isRedirect404, setIsRedirect404] = useState(false);

  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    getCourseExam();
  }, [currentPage]);

  //Get All Course Exam
  const getCourseExam = () => {
    setIsLoaded(false);

    let data = new FormData();
    data.append("page", currentPage);
    data.append("course_id", courseId);

    // for (var key of data.entries()) {
    //   console.log(key[0] + ", " + key[1]);
    // }

    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_GET_COURSE_EXAM,
      method: "POST",
      withCredentials: true,
      data,
    })
      .then((res) => {
        try {
          console.log(res.data);
          if (
            res.data.err === true &&
            res.data.error.errors[0].param === "course_id"
          ) {
            setIsRedirect404(true);
          }
          setHasMore(res.data.data.hasMore);
          setItemCount(res.data.data.itemCount);
          setPageCount(res.data.data.pageCount);
          setCourseExamList(res.data.data.data ? res.data.data.data : []);
        } catch (e) {
          // console.log(e);
        }
      })
      .catch((e) => console.log(e.message))
      .finally(() => setIsLoaded(true));
  };

  //DELETE Course Exam
  const deleteSignleExam = (id) => {
    let data = new FormData();
    data.append("id", id);
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_DELETE_COURSE_EXAM,

      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      method: "POST",
      data,
    })
      .then((res) => {
        getCourseExam();
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

  if (isRedirect404) return <Redirect to="/404" />;

  return (
    <div className="container-fluid">
      <section className="form-wrapper has-icon wrapper">
        <h2 className="section-title">لیست آزمون ها</h2>

        <Link
          to={`/admin/create-course-exam/${courseId}`}
          className="btn btn-primary"
        >
          ثبت آزمون جدید
        </Link>
        <hr />

        {isLoaded ? (
          courseExamList.length > 0 ? (
            <div className="container-fluid">
              <table className="table table-bordered table-striped text-center">
                <thead className="thead-light">
                  <tr>
                    <th scope="col">عنوان امتحان</th>
                    <th scope="col"> مدت زمان</th>
                    <th scope="col">نمره قبولی</th>
                    <th scope="col"> نمره کل </th>
                    <th scope="col"> نمره منفی </th>
                    <th scope="col">ویرایش / حذف</th>
                  </tr>
                </thead>
                <tbody>
                  {courseExamList.map((item, index) => (
                    <CourseExamItems
                      key={index}
                      item={item}
                      DeleteItem={deleteSignleExam}
                    />
                  ))}
                </tbody>
              </table>

              <nav aria-label="...">
                <Pagination
                  hasMore={hasMore}
                  setHasMore={setHasMore}
                  itemCount={itemCount}
                  pageCount={pageCount}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                />
              </nav>
            </div>
          ) : (
            <div className="alert alert-danger" role="alert">
              برای درس مورد نظر آزمونی ثبت نشده
            </div>
          )
        ) : (
          <div className="alert alert-info" role="alert">
            در حال بارگذاری...
          </div>
        )}
      </section>
    </div>
  );
}
export default withRouter(GetCourseExam);
