import React, { useState, useEffect } from "react";
import ConfirmationListItem from "./ConfirmationListItem";
import Axios from "axios";
import Pagination from "../../../shared/components/Pagination";
import { notificationAlert } from "../../../../../utils/shared";

function ConfirmationList() {
  const [nationalIDList, setNationalIDList] = useState([]);

  const [hasMore, setHasMore] = useState(false);
  const [itemCount, setItemCount] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const [isLoaded, setIsLoaded] = useState(true);

  // const [is_verified, setIs_verified] = useState(true);

  useEffect(() => {
    updateListComponent();
  }, [currentPage]);

  const updateListComponent = () => {
    setIsLoaded(false);
    let data = new FormData();
    data.append("page", currentPage);

    // for (var key of data.entries()) {
    //   console.log(key[0] + ", " + key[1]);
    // }

    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_ADMIN_GET_NATIONAL_ID,
      withCredentials: true,
      method: "POST",
    })
      .then((res) => {
        // console.log(res.data);
        try {
          setHasMore(res.data.data.hasMore);
          setItemCount(res.data.data.itemCount);
          setPageCount(res.data.data.pageCount);

          setNationalIDList(res.data.data.data ? res.data.data.data : []);
        } catch (e) {
          // console.log(e);
        }
      })
      .catch((e) => console.log(e.message))
      .finally(() => setIsLoaded(true));
  };

  const deleteSingleNationalID = (phoneNumber) => {
    let data = new FormData();
    data.append("phone_number", phoneNumber);

    //This script helps you console.log the appended properties to FormData object
    // for (var key of data.entries()) {
    //   console.log(key[0] + ", " + key[1]);
    // }

    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_DELETE_NATIONAL_ID,
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      method: "POST",
      data,
    })
      .then((res) => {
        //not really a bad practise here
        notificationAlert(
          res.data.success === false ? "خطا !" : "انجام شد!",
          res.data.message,
          res.data.success === false ? "error" : "success"
        );
      })
      .finally(() => {
        updateListComponent();
      });
  };

  const confirmSingleNationalID = (phoneNumber) => {
    let data = new FormData();
    data.append("phone_number", phoneNumber);

    //This script helps you console.log the appended properties to FormData object
    // for (var key of data.entries()) {
    //   console.log(key[0] + ", " + key[1]);
    // }

    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_CONFIRM_NATIONAL_ID,
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      method: "POST",
      data,
    }).then((res) => {
      updateListComponent();
      notificationAlert(
        res.data.success === false ? "خطا !" : "انجام شد!",
        res.data.message,
        res.data.success === false ? "error" : "success"
      );
    });
  };

  return (
    <section className="confirm-wrapper wrapper">
      {/* <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          checked={is_verified}
          id="defaultIs_verified"
          onChange={(e) => {
            setIs_verified(e.target.checked);
            updateListComponent();
          }}
        />
        <label class="form-check-label px-4" htmlFor="defaultIs_verified">
          show verified national IDs
        </label>
      </div> */}

      <h2 className="section-title">لیست تایید کارت ملی</h2>

      {isLoaded ? (
        nationalIDList.length > 0 ? (
          <>
            <table className="table table-bordered table-striped text-center">
              <thead className="thead-light">
                <tr>
                  <th scope="col">ردیف</th>
                  <th scope="col">نام و نام خانوداگی</th>
                  <th scope="col">شماره ملی</th>
                  <th scope="col">عکس</th>
                  <th scope="col">تایید / حذف</th>
                </tr>
              </thead>

              <tbody>
                {nationalIDList.map((item, index) => (
                  <ConfirmationListItem
                    key={index}
                    index={index + 1}
                    phoneNumber={item.phone_number}
                    nationalID={item.national_id}
                    image={item.image}
                    id={item.id}
                    verified={item.is_verified}
                    DeleteItem={deleteSingleNationalID}
                    ConfirmItem={confirmSingleNationalID}
                  />
                ))}
              </tbody>
            </table>
            <nav>
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
            برای دانش آموز مورد نظر کارت ملی ثبت نشده
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
// ConfirmationList.propTypes = {
//   title: PropTypes.string.isRequired,
// };
export default ConfirmationList;
