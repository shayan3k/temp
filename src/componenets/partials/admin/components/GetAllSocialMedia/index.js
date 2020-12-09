import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link, withRouter } from "react-router-dom";
import SocialItems from "./SocialItems";
import Pagination from "../../../shared/components/Pagination";
import { notificationAlert } from "../../../../../utils/shared";
function GetAllSocialMedia() {
  const [socialList, setSocialList] = useState([]);

  const [hasMore, setHasMore] = useState(false);
  const [itemCount, setItemCount] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    getAllSocialMedia();
  }, [currentPage]);

  const getAllSocialMedia = () => {
    setIsLoaded(false);

    let data = new FormData();
    data.append("page", currentPage);
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_WEB_CONTROL_GET_SOCIAL_MEDIA,
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
          setSocialList(res.data.data.data ? res.data.data.data : []);
        } catch (e) {
          // console.log(e);
        }
      })
      .catch((e) => console.log(e.message))
      .finally(() => setIsLoaded(true));
  };

  //DELETE Social Media
  const deleteSocialMedia = (id) => {
    let data = new FormData();
    data.append("id", id);
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_WEB_CONTROL_DELETE_SOCIAL_MEDIA,

      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      method: "POST",
      data,
    })
      .then((res) => {
        getAllSocialMedia();
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
      <h2 className="section-title mb-0">لیست شبکه های اجتماعی</h2>
      <div className="text-left mb-4">
        <Link to="/admin/create-social-media" className="btn btn-success">
          ثبت شبکه اجتماعی جدید
        </Link>
      </div>
      {isLoaded ? (
        socialList.length > 0 ? (
          <>
            {" "}
            <table className="table table-bordered table-striped text-center">
              <thead className="thead-light">
                <tr>
                  <th scope="col">نام </th>
                  <th scope="col"> نوع </th>
                  <th scope="col"> لینک </th>
                  <th scope="col">ویرایش / حذف</th>
                </tr>
              </thead>
              <tbody>
                {socialList.map((item, index) => (
                  <SocialItems
                    key={index}
                    id={item._id}
                    name={item.name}
                    type={item.type}
                    link={item.link}
                    DeleteItem={deleteSocialMedia}
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
            هیچ شبکه اجتماعی تعریف نشده
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
export default withRouter(GetAllSocialMedia);
