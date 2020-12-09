import React, { useState, useEffect } from "react";
import { withRouter, Redirect } from "react-router-dom";
import axios from "axios";
import AssignmentItems from "./AssignmentItems";
import Pagination from "../../../shared/components/Pagination";
import { notificationAlert } from "../../../../../utils/shared";

function AdminGetUserAssignment(props) {
  const userId = props.match.params.id;
  const [assignmentList, setAssignmentList] = useState([]);

  const [hasMore, setHasMore] = useState(false);
  const [itemCount, setItemCount] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const [isRedirect, setIsRedirect] = useState(false);

  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    getAllAssignment();
  }, [currentPage]);

  const getAllAssignment = () => {
    setIsLoaded(false);
    let data = new FormData();
    data.append("id", userId);
    data.append("page", currentPage);
    axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_ADMIN_GET_USER_ASSIGNMENT,
      withCredentials: true,
      method: "post",
      data,
    })
      .then((res) => {
        try {
          if (res.data.err === true) {
            setIsRedirect(true);
          }
          setHasMore(res.data.data.hasMore);
          setItemCount(res.data.data.itemCount);
          setPageCount(res.data.data.pageCount);
          setAssignmentList(res.data.data.data ? res.data.data.data : []);
        } catch (e) {}
      })
      .catch((e) => console.log(e.message))
      .finally(() => setIsLoaded(true));
  };
  const deleteSingleAssignment = (userId) => {
    let data = new FormData();
    data.append("id", userId);
    // for (var key of data.entries()) {
    //   console.log(key[0] + ", " + key[1]);
    // }
    axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_ADMIN_DELETE_SINGLE_ASSIGNMENT,
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      method: "POST",
      data,
    })
      .then((res) => {
        // console.log(res.data);
        getAllAssignment();
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

  if (isRedirect) return <Redirect to="/404" />;

  return (
    <div>
      <div>
        <section className="wrapper">
          <h2 className="section-title"> لیست تکالیف </h2>
          {isLoaded ? (
            assignmentList.length > 0 ? (
              <div className="container-fluid">
                <table className="table table-striped">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col"> عنوان درس</th>
                      <th scope="col"> عنوان جلسه</th>
                      <th scope="col"> نام دانشجو </th>
                      <th scope="col"> تاریخ ارسال </th>
                      <th scope="col"> مشاهده جزییات </th>
                    </tr>
                  </thead>
                  <tbody>
                    {assignmentList.map((item, index) => (
                      <AssignmentItems
                        key={index}
                        item={item}
                        DeleteItem={deleteSingleAssignment}
                      ></AssignmentItems>
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
                دانش آموز مورد نظر تکلیفی ارسال نکرده است
              </div>
            )
          ) : (
            <div className="alert alert-danger" role="alert">
              در حال بارگذاری...
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
export default withRouter(AdminGetUserAssignment);
