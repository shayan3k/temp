import React, { useState, useEffect } from "react";
// import ModalUpdateAlert from "../ModalUpdateAlert";
import { Link, withRouter } from "react-router-dom";
import ListItem from "./ListItem";
import Axios from "axios";
import {
  ErrorStatus,
  ErrorMessage,
  Show,
} from "../../../../../services/Recoils";
import { useRecoilState } from "recoil";
import Pagination from "../../../shared/components/Pagination";
import { notificationAlert } from "../../../../../utils/shared";

function ConfirmationList() {
  const [alertList, setAlertList] = useState([]);

  const [hasMore, setHasMore] = useState(false);
  const [itemCount, setItemCount] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const [errorStatus, setErrorStatus] = useRecoilState(ErrorStatus);
  const [errorMessage, setErrorMessage] = useRecoilState(ErrorMessage);
  const [show, setShow] = useRecoilState(Show);

  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    updateListComponent();
  }, [currentPage, show]);

  const updateListComponent = () => {
    setIsLoaded(false);

    if (show) {
      notificationAlert(
        errorStatus === "danger" ? "خطا !" : "انجام شد!",
        errorMessage,
        errorStatus === "danger" ? "error" : "success"
      );
    }
    let data = new FormData();
    data.append("page", currentPage);

    Axios({
      url: process.env.REACT_APP_BACKEND_URL + process.env.REACT_APP_GET_ALERT,
      withCredentials: true,
      method: "POST",
      data,
    })
      .then((res) => {
        try {
          // console.log(res.data.data.data);
          setHasMore(res.data.data.hasMore);
          setItemCount(res.data.data.itemCount);
          setPageCount(res.data.data.pageCount);
          setAlertList(res.data.data.data ? res.data.data.data : []);
        } catch (e) {
          // console.log(e.message);
        }
      })
      .catch((e) => {
        // console.log(e.message);
      })
      .finally(() => {
        setIsLoaded(true);
      });
  };

  const deleteSignleAlert = (e, id) => {
    let data = new FormData();
    data.append("id", id);

    // for (var key of data.entries()) {
    //   // console.log(key[0] + ", " + key[1]);
    // }
    return Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_DELETE_SINGLE_ALERT,

      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      method: "POST",
      data,
    })
      .then((res) => {
        updateListComponent();
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
    <>
      <section className="confirm-wrapper wrapper">
        <h2 className="section-title mb-4 mb-md-0">لیست اطلاعیه ها</h2>
        <div className="text-left pb-3">
          <Link
            className="btn btn-info p-2 hint--right"
            aria-label="افزودن اطلاعیه جدید"
            to="create-alert"
          >
            اطلاعیه جدید
            <i className="icon-plus px-2"></i>
          </Link>
        </div>
        {isLoaded ? (
          alertList.length > 0 ? (
            <table className="table table-bordered table-striped text-center">
              <thead className="thead-light">
                <tr>
                  <th scope="col">ردیف</th>
                  <th scope="col">عنوان</th>
                  <th scope="col">عنوان فرعی</th>
                  <th scope="col">نوع</th>
                  <th scope="col">متن</th>
                  <th scope="col">تایید / حذف</th>
                </tr>
              </thead>

              <tbody>
                {alertList.map((item, index) => (
                  <ListItem
                    key={index}
                    index={index + 1}
                    currentPage={currentPage}
                    title={item.title}
                    subtitle={item.subtitle}
                    status={item.status}
                    message={item.message}
                    is_active={item.is_active}
                    id={item._id}
                    DeleteItem={deleteSignleAlert}
                  />
                ))}
              </tbody>
            </table>
          ) : (
            <div className="alert alert-danger" role="alert">
              لیست پرداختی وجود ندارد
            </div>
          )
        ) : (
          <div className="alert alert-info" role="alert">
            در حال بارگذاری...
          </div>
        )}

        {isLoaded && alertList.length > 0 && (
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
    </>
  );
}

export default withRouter(ConfirmationList);
