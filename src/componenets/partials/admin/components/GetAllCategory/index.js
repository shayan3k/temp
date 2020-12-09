import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link, withRouter } from "react-router-dom";
import CategoryItems from "./CategoryItems";
import Pagination from "../../../shared/components/Pagination";
import { notificationAlert } from "../../../../../utils/shared";
function GetAllCategory() {
  const [categoryList, setCategoryList] = useState([]);

  const [hasMore, setHasMore] = useState(false);
  const [itemCount, setItemCount] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    getAllCategories();
    return () => {
      setHasMore(false);
      setItemCount(0);
      setPageCount(1);
      setCurrentPage(1);
      setCategoryList([]);
    };
  }, [currentPage]);

  const getAllCategories = () => {
    setIsLoaded(false);
    let data = new FormData();
    data.append("page", currentPage);
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_WEB_CONTROL_GET_ALL_CATEGORY,
      method: "POST",
      data,
      withCredentials: true,
    })
      .then((res) => {
        try {
          setHasMore(res.data.data.hasMore);
          setItemCount(res.data.data.itemCount);
          setPageCount(res.data.data.pageCount);
          setCategoryList(res.data.data.data ? res.data.data.data : []);
        } catch (e) {
          // console.log(e);
        }
      })
      .catch((e) => console.log(e.message))
      .finally(() => setIsLoaded(true));
  };
  //DELETE CATEGORY
  const deleteSignleCategory = (e, id) => {
    let data = new FormData();
    data.append("id", id);
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_WEB_CONTROL_DELETE_SINGLE_CATEGORY,

      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      method: "POST",
      data,
    })
      .then((res) => {
        getAllCategories();
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
      <h2 className="section-title mb-0">لیست دسته بندی ها</h2>
      <div className="text-left mb-3">
        <Link to="/admin/create-new-category" className="btn btn-success">
          ثبت دسته جدید
        </Link>
      </div>

      {isLoaded ? (
        categoryList.length > 0 ? (
          <>
            <table className="table table-bordered table-striped text-center">
              <thead className="thead-light">
                <tr>
                  <th scope="col">نام دسته </th>
                  {/* <th scope="col"> وضعیت </th> */}
                  <th scope="col">ویرایش / حذف</th>
                </tr>
              </thead>
              <tbody>
                {categoryList.map((item, index) => (
                  <CategoryItems
                    key={index}
                    id={item._id}
                    title={item.title}
                    status={item.is_active}
                    DeleteItem={deleteSignleCategory}
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
            </nav>{" "}
          </>
        ) : (
          <div className="alert alert-danger" role="alert">
            دسته بندی ای تعریف نشده
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
export default withRouter(GetAllCategory);
