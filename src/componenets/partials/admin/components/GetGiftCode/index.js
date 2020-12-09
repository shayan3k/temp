import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "../../../shared/components/Pagination";
import GetOngoingGiftCodeItems from "./GetOngoingGiftCodeItems";
import { Link } from "react-router-dom";

function GetOngoingGiftCode() {
  const [usedGiftCodes, setUsedGiftCodes] = useState([]);

  const [hasMore, setHasMore] = useState(false);
  const [itemCount, setItemCount] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const [is_active, setIs_active] = useState(true);

  useEffect(() => {
    updateListItem();
  }, [currentPage]);

  const updateListItem = () => {
    let data = new FormData();
    data.append("page", currentPage);
    //send a is_active boolean value to toggle the response type
    if (is_active) data.append("is_active", is_active);
    axios({
      url:
        process.env.REACT_APP_BACKEND_URL + process.env.REACT_APP_GET_GIFT_CODE,
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
          setUsedGiftCodes(res.data.data.data ? res.data.data.data : []);
        } catch (e) {
          // console.log("error");
        }
      })
      .finally(() => {});
  };

  return (
    <div>
      <div>
        <section className="wrapper">
          <h2 className="section-title"> لیست کد های هدیه در حال انجام </h2>
          <div className="text-right mb-3">
            <Link
              to="/admin/create-gift-code"
              className="btn btn-success py-2 px-3"
            >
              ثبت کد جدید
            </Link>
          </div>
          <div className="container-fluid">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={is_active}
                id="defaultCheck1"
                onChange={(e) => {
                  setIs_active(e.target.checked);
                  updateListItem();
                }}
              />
              <label className="form-check-label" htmlFor="defaultCheck1">
                show finished gift codes
              </label>
            </div>

            <table className="table table-striped">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">ردیف</th>
                  <th scope="col"> مبلغ</th>
                  <th scope="col"> تعداد کل</th>
                  <th scope="col"> تعداد استفاده شده</th>
                  <th scope="col"> کد تخفیف</th>
                  <th scope="col"> وضعیت </th>
                  <th scope="col">تاریخ </th>
                </tr>
              </thead>
              <tbody>
                {usedGiftCodes.map((item, index) => (
                  <GetOngoingGiftCodeItems
                    key={index}
                    index={index + 1}
                    amount={item.amount}
                    total_count={item.total_count}
                    current_count={item.current_count}
                    code={item.code}
                    status={item.status}
                    createdAt={item.createdAt}
                  ></GetOngoingGiftCodeItems>
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
        </section>
      </div>
    </div>
  );
}
export default GetOngoingGiftCode;
