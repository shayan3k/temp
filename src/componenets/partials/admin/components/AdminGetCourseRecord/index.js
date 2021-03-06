import React, { useState, useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import ReportCardItems from "./ReportCardItems";
import Pagination from "../../../shared/components/Pagination";

function AdminGetCourseRecord(props) {
  const courseId = props.match.params.id;

  const [reportCards, setReportCards] = useState([]);
  const [username, setUsername] = useState();
  const [userLastname, setUserLastname] = useState();

  const [hasMore, setHasMore] = useState(false);
  const [itemCount, setItemCount] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    getAllReportCard();
    userSigin();
  }, [currentPage]);

  const getAllReportCard = () => {
    setIsLoaded(false);

    let data = new FormData();
    data.append("id", courseId);
    data.append("page", currentPage);

    axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_ADMIN_GET_COURSE_RECOURD,
      withCredentials: true,
      method: "post",
      data,
    })
      .then((res) => {
        try {
          setHasMore(res.data.data.hasMore);
          setItemCount(res.data.data.itemCount);
          setPageCount(res.data.data.pageCount);
          setReportCards(res.data.data.data ? res.data.data.data : []);
        } catch (e) {}
      })
      .finally(() => {
        setIsLoaded(true);
      });
  };

  const userSigin = () => {
    axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_GET_USER_INFORMATION,
      withCredentials: true,
      method: "POST",
    }).then((res) => {
      try {
        setUsername(res.data.data.name);
        setUserLastname(res.data.data.lastname);
      } catch (e) {}
    });
  };

  return (
    <section className="wrapper">
      <h2 className="section-title"> لیست کارنامه ها </h2>

      {isLoaded ? (
        reportCards.length > 0 ? (
          <>
            <table className="table table-striped">
              <thead className="thead-dark">
                <tr>
                  <th scope="col"> نام داوطلب </th>
                  <th scope="col"> عنوان امتحان</th>
                  <th scope="col"> تعداد کل سوالات </th>
                  <th scope="col"> نمره کسب شده </th>
                  <th scope="col"> مشاهده کارنامه </th>
                </tr>
              </thead>
              <tbody>
                {reportCards.map((item, index) => (
                  <ReportCardItems
                    key={index}
                    item={item}
                    username={username}
                    userLastname={userLastname}
                  ></ReportCardItems>
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
          <div className="alert alert-info" role="alert">
            برای درس مورد نظر کارنامه ثبت نشده
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
export default withRouter(AdminGetCourseRecord);
