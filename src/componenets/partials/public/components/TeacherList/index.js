import React, { useState, useEffect } from "react";
import Axios from "axios";
import TeacherSingle from "../../components/TeacherList/TeacherSingle";
import "../../../../../assets/public/css/pages/_Teachers.scss";
import Pagination from "../../../shared/components/Pagination";

export default function TeacherList({ ...props }) {
  const [teacherList, setTeacherList] = useState([]);

  const [hasMore, setHasMore] = useState(false);
  const [itemCount, setItemCount] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getAllTeacher();
  }, [currentPage]);

  const getAllTeacher = () => {
    let data = new FormData();
    data.append("page", currentPage);
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_GET_ALL_TEACHER_PUBLIC,
      method: "POST",
      withCredentials: true,
      data,
    })
      .then((res) => {
        try {
          // console.log(res.data);
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
      .finally(() => {});
  };

  return (
    <section className="teachers-wrapper wrapper">
      <div className="container">
        <div className="row">
          {teacherList.length > 0 &&
            teacherList.map((item, index) => (
              <TeacherSingle
                key={index}
                col="col-sm-6 col-md-3"
                name={`${item.name} ${item.lastname}`}
                diploma={item.diploma}
                image={item.image}
                id={item._id}
              />
            ))}
        </div>
      </div>
      <nav className="pt-5" aria-label="...">
        <Pagination
          class_name="justify-content-center"
          hasMore={hasMore}
          setHasMore={setHasMore}
          itemCount={itemCount}
          pageCount={pageCount}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </nav>
    </section>
  );
}
