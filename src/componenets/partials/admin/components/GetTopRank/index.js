import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link, withRouter } from "react-router-dom";
import TopRankItems from "./TopRankItems";
import Pagination from "../../../shared/components/Pagination";
import { notificationAlert } from "../../../../../utils/shared";
function GetTopRank() {
  const [topRankList, setTopRankList] = useState([]);

  const [hasMore, setHasMore] = useState(false);
  const [itemCount, setItemCount] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    getTopRank();
  }, [currentPage]);

  const getTopRank = () => {
    setIsLoaded(false);

    let data = new FormData();
    data.append("page", currentPage);
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_WEB_CONTROL_GET_TOP_RANK,
      method: "POST",
      data,
      withCredentials: true,
    })
      .then((res) => {
        try {
          // console.log(res.data.data.data);
          setHasMore(res.data.data.hasMore);
          setItemCount(res.data.data.itemCount);
          setPageCount(res.data.data.pageCount);
          setTopRankList(res.data.data.data ? res.data.data.data : []);
        } catch (e) {
          // console.log(e);
        }
      })
      .catch((e) => console.log(e.message))
      .finally(() => setIsLoaded(true));
  };

  const deleteTopRank = (id) => {
    let data = new FormData();
    data.append("id", id);
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_WEB_CONTROL_DELETE_TOP_RANK,

      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      method: "POST",
      data,
    })
      .then((res) => {
        getTopRank();
        notificationAlert(
          res.data.success === false ? "خطا !" : "انجام شد!",
          res.data.message,
          res.data.success === false ? "error" : "success"
        );
      })
      .finally(() => {
        return false;
      });
  };

  return (
    <section className="form-wrapper has-icon wrapper">
      <h2 className="section-title mb-0">لیست رتبه های برتر</h2>
      <div className="text-left mb-4">
        <Link to="/admin/create-top-rank" className="btn btn-success">
          ثبت رتبه برتر جدید
        </Link>
      </div>
      {isLoaded ? (
        topRankList.length > 0 ? (
          <>
            <table className="table table-bordered table-striped text-center">
              <thead className="thead-light">
                <tr>
                  <th scope="col"> عکس </th>
                  <th scope="col"> عنوان </th>
                  <th scope="col"> عنوان فرعی</th>
                  <th scope="col">ویرایش / حذف</th>
                </tr>
              </thead>
              <tbody>
                {topRankList.map((item, index) => (
                  <TopRankItems
                    key={index}
                    item={item}
                    DeleteItem={deleteTopRank}
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
          </>
        ) : (
          <div className="alert alert-danger" role="alert">
            رتبه های برتری تعریف نشده
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
export default withRouter(GetTopRank);
