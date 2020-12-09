import React, { useState, useEffect } from "react";
import axios from "axios";
import GiftCodeItems from "./GiftCodeItems";
import Pagination from "../../../shared/components/Pagination";

function GiftCodeHistory() {
  const [giftCodes, setGiftCodes] = useState([]);

  const [hasMore, setHasMore] = useState(false);
  const [itemCount, setItemCount] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    getGiftCodeHistory();
  }, [currentPage]);

  const getGiftCodeHistory = () => {
    setIsLoaded(false);

    let data = new FormData();
    data.append("page", currentPage);
    axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_GIFT_CODE_HISTORY,
      withCredentials: true,
      method: "post",
      data,
    })
      .then((res) => {
        // console.log(res.data.data.data);
        try {
          setHasMore(res.data.data.hasMore);
          setItemCount(res.data.data.itemCount);
          setPageCount(res.data.data.pageCount);
          setGiftCodes(res.data.data.data ? res.data.data.data : []);
        } catch (e) {}
      })
      .finally(() => {
        setIsLoaded(true);
      });
  };

  return (
    <section className="wrapper">
      <h2 className="section-title">لیست کد های هدیه</h2>

      {isLoaded ? (
        giftCodes.length > 0 ? (
          <>
            <table className="table table-striped">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">ردیف</th>
                  <th scope="col">شماره تلفن</th>
                  <th scope="col">مبلغ دریافتی (تومان)</th>
                  <th scope="col">کد</th>
                  <th scope="col">تاریخ </th>
                </tr>
              </thead>
              <tbody>
                {giftCodes.map((item, index) => (
                  <GiftCodeItems
                    key={index}
                    index={index + 1}
                    phone_number={item.phone_number}
                    amount={item.code_id.amount}
                    code={item.code_id.code}
                    createdAt={item.createdAt}
                  ></GiftCodeItems>
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
            کد هدیه ای وارد نشده است
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
export default GiftCodeHistory;
