import React, { useState, useEffect } from "react";
import axios from "axios";
import DepositItems from "./DepositItems";
import Pagination from "../../../shared/components/Pagination";

function GetDeposits() {
  const [peymentLogs, setPeymentLogs] = useState([]);

  const [hasMore, setHasMore] = useState(false);
  const [itemCount, setItemCount] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    getSuccessfulDeposits();
  }, [currentPage]);

  const getSuccessfulDeposits = () => {
    setIsLoaded(false);

    let data = new FormData();
    data.append("page", currentPage);
    axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_GET_SUCCESSFUL_DEPOSITS,
      withCredentials: true,
      method: "post",
      data,
    })
      .then((res) => {
        console.log(res.data);
        try {
          setHasMore(res.data.data.hasMore);
          setItemCount(res.data.data.itemCount);
          setPageCount(res.data.data.pageCount);
          setPeymentLogs(res.data.data.data ? res.data.data.data : []);
        } catch (e) {
          // console.log("error");
        }
      })
      .finally(() => {
        setIsLoaded(true);
      });
  };

  return (
    <section className="wrapper">
      <h2 className="section-title">مجموع پرداختی ها</h2>

      {isLoaded ? (
        peymentLogs.length > 0 ? (
          <div className="container-fluid">
            <table className="table table-striped">
              <thead className="thead-dark">
                <tr>
                  <th scope="col" className="text-center">
                    ردیف
                  </th>
                  <th scope="col" className="text-center">
                    درس
                  </th>
                  <th scope="col" className="text-center">
                    مبلغ پرداختی(تومان)
                  </th>
                  <th scope="col" className="text-center">
                    کیف پول(تومان)
                  </th>
                  <th scope="col" className="text-center">
                    {" "}
                    توضیحات
                  </th>
                  <th scope="col" className="text-center">
                    تاریخ پرداخت
                  </th>
                </tr>
              </thead>
              <tbody>
                {peymentLogs.map((item, index) => (
                  <DepositItems
                    key={index}
                    index={index + 1}
                    course_id={item.course_id}
                    course_session_id={item.course_session_id}
                    phone_number={item.phone_number}
                    price={item.price}
                    after_price={item.after_price}
                    type={item.type}
                    createdAt={item.createdAt}
                  ></DepositItems>
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
            هنوز پرداختی انجام نشده
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
export default GetDeposits;
