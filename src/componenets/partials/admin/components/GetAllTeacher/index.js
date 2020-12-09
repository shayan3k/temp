import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import Axios from "axios";
import Pagination from "../../../shared/components/Pagination";
import TeacherListItems from "./TeacherListItems";
function GetAllTeacher() {
  const [teacherList, setTeacherList] = useState([]);
  const [lastname, setLastname] = useState("");
  const [hasMore, setHasMore] = useState(false);
  const [itemCount, setItemCount] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    GetAllTeachers();
  }, [currentPage, lastname]);

  //Get All Teachers
  const GetAllTeachers = () => {
    setIsLoading(true);

    let data = new FormData();
    data.append("page", currentPage);
    if (lastname) data.append("lastname", lastname);
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_GET_ALL_TEACHER,
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
          setTeacherList(res.data.data.data ? res.data.data.data : []);
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

  return (
    <section className="form-wrapper has-icon wrapper">
      <h2 className="section-title mb-0">لیست اساتید</h2>

      <div className="text-left mb-3">
        <Link to="/admin/create-new-teacher" className="btn btn-success">
          ثبت استاد
        </Link>
      </div>

      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">جستجوی اساتید </span>
        </div>
        <input
          type="text"
          className="form-control"
          value={lastname}
          placeholder="نام خانوادگی"
          onChange={(e) => setLastname(e.target.value)}
        />
      </div>
      <br />

      {isLoading ? (
        <div className="alert alert-danger w-100">در حال بارگذاری...</div>
      ) : teacherList.length > 0 ? (
        <table className="table table-bordered table-striped text-center">
          <thead className="thead-light">
            <tr>
              <th scope="col">عکس</th>
              <th scope="col">نام و نام خانوداگی</th>
              <th scope="col">جنسیت</th>
              <th scope="col">مدرک تحصیلی</th>
              <th scope="col">ویرایش </th>
            </tr>
          </thead>

          <tbody>
            {teacherList.map((item, index) => (
              <TeacherListItems
                key={index}
                image={item.image}
                name={item.name}
                lastname={item.lastname}
                sex={item.sex}
                diploma={item.diploma}
                cv={item.cv}
                id={item._id}
              />
            ))}
          </tbody>
        </table>
      ) : (
        <div className="alert alert-danger" role="alert">
          متاسفانه استادی یافت نشد
        </div>
      )}

      {isLoading ? (
        ""
      ) : (
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
      )}
    </section>
  );
}
export default withRouter(GetAllTeacher);
