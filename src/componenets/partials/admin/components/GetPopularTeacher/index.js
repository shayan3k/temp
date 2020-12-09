import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link, withRouter } from "react-router-dom";
import TeacherItems from "./TeacherItems";
import Pagination from "../../../shared/components/Pagination";
import { notificationAlert } from "../../../../../utils/shared";
function GetPopularTeacher() {
  const [teacherList, setTeacherList] = useState([]);

  const [hasMore, setHasMore] = useState(false);
  const [itemCount, setItemCount] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    getPopularTeacher();
  }, [currentPage]);

  const getPopularTeacher = () => {
    setIsLoaded(false);

    let data = new FormData();
    data.append("page", currentPage);
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_WEB_CONTROL_GET_POPULAR_TEACHER,
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
          setTeacherList(res.data.data.data ? res.data.data.data : []);
        } catch (e) {
          // console.log(e);
        }
      })
      .catch((e) => console.log(e.message))
      .finally(() => setIsLoaded(true));
  };

  const deletePopularTeacher = (id) => {
    let data = new FormData();
    data.append("id", id);
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_WEB_CONTROL_DELETE_POPULAR_TEACHER,

      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      method: "POST",
      data,
    })
      .then((res) => {
        getPopularTeacher();
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
      <h2 className="section-title mb-0">لیست محبوب ترین معلم ها</h2>
      <div className="text-left mb-4">
        <Link to="/admin/create-popular-teacher" className="btn btn-success">
          ثبت معلم محبوب جدید
        </Link>
      </div>

      {isLoaded ? (
        teacherList.length > 0 ? (
          <>
            <table className="table table-bordered table-striped text-center">
              <thead className="thead-light">
                <tr>
                  <th scope="col"> ایندکس </th>
                  <th scope="col"> عکس </th>
                  <th scope="col"> نام معلم </th>
                  <th scope="col"> جنسیت</th>
                  <th scope="col"> مدرک </th>
                  <th scope="col">ویرایش / حذف</th>
                </tr>
              </thead>
              <tbody>
                {teacherList.map((item, index) => (
                  <TeacherItems
                    key={index}
                    id={item._id}
                    index={item.index}
                    teacher_id={item.teacher_id}
                    image={item.teacher_id && item.teacher_id.image}
                    name={item.teacher_id && item.teacher_id.name}
                    lastname={item.teacher_id && item.teacher_id.lastname}
                    sex={item.teacher_id && item.teacher_id.sex}
                    diploma={item.teacher_id && item.teacher_id.diploma}
                    DeleteItem={deletePopularTeacher}
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
          </>
        ) : (
          <div className="alert alert-danger" role="alert">
            هنوز استادی ثبت نشده
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
export default withRouter(GetPopularTeacher);
