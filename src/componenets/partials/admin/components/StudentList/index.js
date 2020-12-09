import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentListItem from "./StudentListItem";
import Pagination from "../../../shared/components/Pagination";
import { notificationAlert } from "../../../../../utils/shared";

function StudentList() {
  const [usersData, setUsersData] = useState([]);
  const [phone_number, setPhone_number] = useState("");
  const [lastname, setLastname] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const [hasMore, setHasMore] = useState(false);
  const [itemCount, setItemCount] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [apiError, setApiError] = useState("");

  useEffect(() => {
    updateListComponent();
  }, [currentPage, phone_number, lastname]);

  const updateListComponent = () => {
    let data = new FormData();
    setIsLoading(true);
    data.append("page", currentPage);
    if (phone_number) data.append("phone_number", phone_number);
    if (lastname) data.append("lastname", lastname);
    axios({
      url:
        process.env.REACT_APP_BACKEND_URL + process.env.REACT_APP_GET_ALL_USERS,
      withCredentials: true,
      method: "POST",
      data,
    })
      .then((res) => {
        if (res.data.error) {
          setApiError(res.data.message);
        } else {
          try {
            setApiError("");
            setHasMore(res.data.data.hasMore);
            setItemCount(res.data.data.itemCount);
            setPageCount(res.data.data.pageCount);
            setUsersData(res.data.data.data ? res.data.data.data : []);
          } catch (e) {
            //you could show there res.data.message here for example
          }
        }
      })
      .finally(() => setIsLoading(false));
  };

  const updateBlockSingleUser = (phone_number) => {
    let data = new FormData();
    data.append("phone_number", phone_number);
    return axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_ADMIN_UPDATE_USER_BLOCK,
      withCredentials: true,
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
      <section className="wrapper">
        <h2 className="section-title">لیست کل دانش آموزان</h2>
        <div className="container-fluid">
          <div className="input-group row mx-0">
            <div className="input-group-prepend col-12 col-md-4 px-0">
              <span className="input-group-text w-100">جستجوی دانش آموز </span>
            </div>
            <input
              type="text"
              className="form-control col-12 col-md-4"
              value={phone_number}
              placeholder="شماره تلفن"
              onChange={(e) => setPhone_number(e.target.value)}
            />
            <input
              type="text"
              className="form-control col-12 col-md-4"
              value={lastname}
              placeholder="نام خانوادگی"
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
          <br />
          {isLoading ? (
            <div className="alert alert-danger w-100">در حال بارگذاری...</div>
          ) : apiError ? (
            <div className="alert alert-danger w-100">{apiError}</div>
          ) : (
            <table className="table table-bordered table-striped text-center">
              <thead className="thead-light">
                <tr>
                  <th scope="col">عکس</th>
                  <th scope="col">شماره تلفن</th>
                  <th scope="col">نام و نام خانوداگی</th>
                  <th scope="col">وضعیت</th>
                  <th scope="col">ادیت / بلاک</th>
                </tr>
              </thead>

              <tbody>
                {usersData.map((item, index) => (
                  <StudentListItem
                    key={index}
                    id={item._id}
                    image={item.image}
                    fullname={item.name + " " + item.lastname}
                    father_name={item.father_name}
                    role={item.role}
                    status={item.is_active}
                    phone_number={item.phone_number}
                    updateBlockItem={updateBlockSingleUser}
                  />
                ))}
              </tbody>
            </table>
          )}
          {isLoading ? (
            ""
          ) : (
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
        </div>
      </section>
    </>
  );
}

export default StudentList;
