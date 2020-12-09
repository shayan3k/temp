import React, { useEffect, useState } from "react";
import StudentListItem from "./StudentListItem";
import Pagination from "../../../shared/components/Pagination";
import Axios from "axios";

export default function Index() {
  const [referencedUsers, setReferencedUsers] = useState([]);

  const [hasMore, setHasMore] = useState(false);
  const [itemCount, setItemCount] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    updateListComponent();
  }, [currentPage]);

  const updateListComponent = () => {
    setIsLoaded(false);

    let data = new FormData();
    data.append("page", currentPage);
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_REFERENCED_USER_ID,
      withCredentials: true,
      method: "POST",
      data,
    })
      .then((res) => {
        // console.log(res.data.data.data);
        try {
          //Just an example of pagination
          setHasMore(res.data.data.hasMore);
          setItemCount(res.data.data.itemCount);
          setPageCount(res.data.data.pageCount);
          setReferencedUsers(res.data.data.data ? res.data.data.data : []);
        } catch (e) {
          // console.log(e);
        }
      })
      .catch((e) => {
        // console.log(e.response)
      })
      .finally(() => setIsLoaded(true));
  };

  return (
    <section className="wrapper">
      <h2 className="section-title">لیست کل دانش آموزان معرفی شده</h2>
      {isLoaded ? (
        referencedUsers.length > 0 ? (
          <>
            <table className="table table-bordered table-striped text-center">
              <thead className="thead-light">
                <tr>
                  <th scope="col">عکس</th>
                  <th scope="col">نام و نام خانوداگی</th>
                  <th scope="col">شماره تلفن</th>
                  <th scope="col">وضعیت</th>
                </tr>
              </thead>
              <tbody>
                {referencedUsers.map((item, index) => (
                  <StudentListItem
                    key={index}
                    image={item.image}
                    fullname={`${item.name} ${item.lastname}`}
                    phone_number={`${item.phone_number}`}
                    color={item.is_active === true ? "green" : "red"}
                    status_text={
                      item.is_active === true ? "تایید شده" : "تایید نشده"
                    }
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
            هنوز دانش آموزی معرفی نشده
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
