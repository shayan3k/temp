import React, { useState, useEffect } from "react";
import { withRouter, Redirect } from "react-router-dom";
import Axios from "axios";
import UserGiftCodItems from "./UserGiftCodItems";
import Pagination from "../../../shared/components/Pagination";

function GetUserGiftCodeLogs(props) {
  const userId = props.match.params.id;

  const [hasMore, setHasMore] = useState(false);
  const [itemCount, setItemCount] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const [codeItems, setCodeItems] = useState([]);

  const [isRedirect, setIsRedirect] = useState(false);

  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    getUserGiftCodeLogs();
  }, [currentPage]);

  const getUserGiftCodeLogs = () => {
    setIsLoaded(false);

    let data = new FormData();
    data.append("id", userId);
    // for (var key of data.entries()) {
    //   console.log(key[0] + ", " + key[1]);
    // }

    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL + "api/admin/get-user-gift-code-logs",
      withCredentials: true,
      headers: {
        "Content-type": "multipart/form-data",
      },
      method: "POST",
      data,
    })
      .then((res) => {
        // console.log(res.data.data.data);
        if (res.data.err === true) {
          setIsRedirect(true);
        }

        setHasMore(res.data.data.hasMore);
        setItemCount(res.data.data.itemCount);
        setPageCount(res.data.data.pageCount);
        setCodeItems(res.data.data.data ? res.data.data.data : []);
      })
      .catch((e) => console.log(e.message))
      .finally(() => setIsLoaded(true));
  };

  if (isRedirect) return <Redirect to="/404" />;

  return (
    <div className="container-fluid">
      <section className="wrapper">
        <h2 className="section-title"> کد های هدیه دانش آموز</h2>

        {isLoaded ? (
          codeItems.length > 0 ? (
            <div className="container-fluid col-md-12">
              <table className="table table-bordered table-striped text-center">
                <thead className="thead-light">
                  <tr>
                    <th scope="col">ردیف</th>
                    <th scope="col"> کد تخفیف</th>
                    <th scope="col"> مبلغ</th>
                    <th scope="col"> شماره تلفن </th>
                    <th scope="col">تاریخ </th>
                  </tr>
                </thead>
                <tbody>
                  {codeItems.map((item, index) => (
                    <UserGiftCodItems
                      key={index}
                      index={index + 1}
                      code={item.code_id.code ? item.code_id.code : ""}
                      amount={item.code_id.amount ? item.code_id.amount : ""}
                      phone_number={item.phone_number}
                      createdAt={item.createdAt}
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
            </div>
          ) : (
            <div className="alert alert-danger" role="alert">
              برای دانش آموز مورد نظر کد هدیه ای ثبت نشده
            </div>
          )
        ) : (
          <div className="alert alert-info" role="alert">
            در حال بارگذاری...
          </div>
        )}
      </section>
    </div>
  );
}
export default withRouter(GetUserGiftCodeLogs);
