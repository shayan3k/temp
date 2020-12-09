import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "../../../shared/components/Pagination";
import EnrolledItems from "./EnrolledItems";
import { useRecoilState } from "recoil";
import { TriggerIsAuthenticated } from "../../../../../services/Recoils";
import { notificationAlert } from "../../../../../utils/shared";

function GetEnrolledCourse() {
  const [enrolledCourse, setEnrolledCourse] = useState([]);

  const [hasMore, setHasMore] = useState(false);
  const [itemCount, setItemCount] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const [isLoaded, setIsLoaded] = useState(true);

  const [triggerIsAuthenticated, setTriggerIsAuthenticated] = useRecoilState(
    TriggerIsAuthenticated
  );

  useEffect(() => {
    getEnrolledCourse();
  }, [currentPage]);

  const getEnrolledCourse = () => {
    setIsLoaded(false);
    let data = new FormData();
    data.append("page", currentPage);
    axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_GET_ENROLLED_COURSE,
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
          setEnrolledCourse(res.data.data.data ? res.data.data.data : []);
        } catch (e) {}
      })
      .finally(() => {
        setIsLoaded(true);
      });
  };

  const userCouldPayInstallment = async (id) => {
    let data = new FormData();
    data.append("id", id);
    for (var key of data.entries()) {
      console.log(key[0] + ", " + key[1]);
    }
    return axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_STUDENT_ENROL_WITH_INSTALLMENT,
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      method: "POST",
      data,
    })
      .then((res) => {
        console.log(res.data);
        getEnrolledCourse();
        notificationAlert(
          res.data.success === false ? "خطا !" : "انجام شد!",
          res.data.message,
          res.data.success === false ? "error" : "success"
        );

        if (res.data.success && res.data.data?.url) {
          //if peyment needed, then redirect otherwise rerender
          window.location.href = res.data.data.url;
        } else if (res.data.success) {
          console.log("triggering");
          setTriggerIsAuthenticated(!triggerIsAuthenticated);
        }
      })
      .finally(() => {
        // return false;
      });
  };

  return (
    <section className="wrapper">
      <h2 className="section-title">درس های ثبت نام شده</h2>

      {isLoaded ? (
        enrolledCourse.length > 0 ? (
          <div className="container-fluid">
            <table className="table table-striped">
              <thead className="thead-dark">
                <tr>
                  <th scope="col" className="text-center">
                    ردیف
                  </th>
                  <th scope="col" className="text-center">
                    درس
                  </th>
                  <th scope="col" className="text-center">
                    تاریخ ثبت نام
                  </th>
                  <th scope="col" className="text-center">
                    تاریخ قسط بعدی
                  </th>
                  <th scope="col" className="text-center">
                    اقساط باقی مانده
                  </th>
                  <th scope="col" className="text-center">
                    مبلغ هر قسط
                  </th>
                  <th scope="col" className="text-center">
                    پرداخت
                  </th>
                </tr>
              </thead>
              <tbody>
                {enrolledCourse.map((item, index) => {
                  const createdAt = new Date(Date.parse(item.createdAt));
                  return (
                    <EnrolledItems
                      key={index}
                      index={index + 1}
                      id={item.course_id._id}
                      title={item.course_id.title}
                      createdAt={item.createdAt}
                      user_installment_next={createdAt.setDate(
                        createdAt.getDate() +
                          item.course_id.installment_duration *
                            (parseInt(item.peyment) + 1)
                      )}
                      user_installment_count={
                        item.course_id.installment_count - item.peyment
                      }
                      user_installment_amount={parseInt(
                        (parseInt(item.course_id.total_price) -
                          parseInt(
                            (item.course_id.total_price *
                              item.course_id.installment_first) /
                              100
                          )) /
                          item.course_id.installment_count
                      )}
                      peyment={item.peyment}
                      user_peyment_action={userCouldPayInstallment}
                      createdAt={item.createdAt}
                    ></EnrolledItems>
                  );
                })}
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
            هنوز پرداختی انجام نشده
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
export default GetEnrolledCourse;
