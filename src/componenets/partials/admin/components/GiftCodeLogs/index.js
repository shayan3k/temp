import React, { useState, useEffect } from "react";
import axios from "axios";
import GiftCodeLogItems from "./GiftCodeLogItems";
import Pagination from "../../../shared/components/Pagination";

function GiftCodeLogs({ ...props }) {
  const [giftCodeLogs, setGiftCodeLogs] = useState([]);

  const [hasMore, setHasMore] = useState(false);
  const [itemCount, setItemCount] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    getUsedGiftCode();
  }, [currentPage]);

  const getUsedGiftCode = () => {
    setIsLoaded(false);

    let data = new FormData();
    data.append("page", currentPage);
    axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_GET_GIFT_CODE_LOGS,
      withCredentials: true,
      method: "post",
      data,
    })
      .then((res) => {
        try {
          // console.log(res.data.data.data);
          setHasMore(res.data.data.hasMore);
          setItemCount(res.data.data.itemCount);
          setPageCount(res.data.data.pageCount);
          setGiftCodeLogs(res.data.data.data ? res.data.data.data : []);
        } catch (e) {}
      })
      .catch((e) => console.log(e.message))
      .finally(() => setIsLoaded(true));
  };

  return (
    <section className="wrapper">
      <h2 className="section-title"> لیست کد های هدیه log شده </h2>
      {isLoaded ? (
        giftCodeLogs.length > 0 ? (
          <div className="container-fluid">
            <table className="table table-striped">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">ردیف</th>
                  <th scope="col"> کد تخفیف</th>
                  <th scope="col"> مبلغ</th>
                  <th scope="col"> شماره تلفن </th>
                  <th scope="col">تاریخ </th>
                </tr>
              </thead>
              <tbody>
                {giftCodeLogs.map((item, index) => (
                  <GiftCodeLogItems
                    key={index}
                    index={index + 1}
                    code={item.code_id.code ? item.code_id.code : ""}
                    amount={item.code_id.amount ? item.code_id.amount : ""}
                    phone_number={item.phone_number}
                    createdAt={item.createdAt}
                  ></GiftCodeLogItems>
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
            کد هدیه ای تعریف نشده
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
export default GiftCodeLogs;
