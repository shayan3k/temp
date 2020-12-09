import React, { useState, useEffect } from "react";
import axios from "axios";
import ReportCardItems from "./ReportCardItems";
import Pagination from "../../../shared/components/Pagination";

function StudentAllReportCard() {
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
    data.append("page", currentPage);
    axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_GET_EXAM_RECORD,
      withCredentials: true,
      method: "post",
      data,
    })
      .then((res) => {
        try {
          // console.log(res.data.data);
          setHasMore(res.data.data.hasMore);
          setItemCount(res.data.data.itemCount);
          setPageCount(res.data.data.pageCount);
          setReportCards(res.data.data.data ? res.data.data.data : []);
        } catch (e) {
          console.log(e.message);
        }
      })
      .catch((e) => {
        console.log(e.message);
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
        ) : (
          <div className="alert alert-danger" role="alert">
            هنوز پرداختی انجام نشده
          </div>
        )
      ) : (
        <div className="alert alert-info" role="alert">
          در حال بارگذاری...
        </div>
      )}

      {isLoaded && reportCards.length > 0 && (
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
export default StudentAllReportCard;
