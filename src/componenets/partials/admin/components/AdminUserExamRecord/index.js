import React, { useState, useEffect } from "react";
import { withRouter, Redirect } from "react-router-dom";
import axios from "axios";
import ReportCardItems from "./ReportCardItems";
import Pagination from "../../../shared/components/Pagination";

function AdminUserExamRecord(props) {
  const userId = props.match.params.id;
  const [reportCards, setReportCards] = useState([]);

  const [hasMore, setHasMore] = useState(false);
  const [itemCount, setItemCount] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const [username, setUsername] = useState();
  const [userLastname, setUserLastname] = useState();

  const [isRedirect, setIsRedirect] = useState(false);

  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    getAllReportCard();
    userSigin();
  }, [currentPage]);

  const getAllReportCard = () => {
    setIsLoaded(false);

    let data = new FormData();
    data.append("id", userId);
    data.append("page", currentPage);
    axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_ADMIN_USER_EXAM_RECORD,
      withCredentials: true,
      method: "post",
      data,
    })
      .then((res) => {
        try {
          // console.log(res.data.data);
          if (res.data.err === true) {
            setIsRedirect(true);
          }
          setHasMore(res.data.data.hasMore);
          setItemCount(res.data.data.itemCount);
          setPageCount(res.data.data.pageCount);
          setReportCards(res.data.data.data ? res.data.data.data : []);
        } catch (e) {}
      })
      .catch((e) => console.log(e.message))
      .finally(() => setIsLoaded(true));
  };
  const userSigin = () => {
    let data = new FormData();
    data.append("id", userId);
    axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_ADMIN_GET_SINGLE_USER,
      withCredentials: true,
      method: "POST",
      data,
    }).then((res) => {
      try {
        setUsername(res.data.data.name);
        setUserLastname(res.data.data.lastname);
      } catch (e) {}
    });
  };

  if (isRedirect) return <Redirect to="/404" />;

  return (
    <div>
      <div>
        <section className="wrapper">
          <h2 className="section-title"> لیست کارنامه ها </h2>
          <div className="container-fluid">
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
                <div className="alert alert-danger" role="alert">
                  برای کاربر مورد نظر کارنامه ای یافت نشد
                </div>
              )
            ) : (
              <div className="alert alert-danger" role="alert">
                در حال بارگذاری...
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
export default withRouter(AdminUserExamRecord);
