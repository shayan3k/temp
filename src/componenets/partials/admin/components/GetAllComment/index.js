import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Axios from "axios";
import Pagination from "../../../shared/components/Pagination";
import CommentListItems from "./CommentListItems";
import { notificationAlert } from "../../../../../utils/shared";

function GetAllComment() {
  const [commentList, setCommentList] = useState([]);

  const [hasMore, setHasMore] = useState(false);
  const [itemCount, setItemCount] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    GetAllComments();
  }, [currentPage]);

  //Get All Comments
  const GetAllComments = () => {
    setIsLoaded(false);

    let data = new FormData();
    data.append("page", currentPage);
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_GET_ALL_COMMENT,
      method: "POST",
      withCredentials: true,
      data,
    })
      .then((res) => {
        try {
          // console.log(res.data.data);
          setHasMore(res.data.data.hasMore);
          setItemCount(res.data.data.itemCount);
          setPageCount(res.data.data.pageCount);
          setCommentList(res.data.data.data ? res.data.data.data : []);
        } catch (e) {
          // console.log(e);
        }
      })
      .catch((e) => {
        // console.log(e);
      })
      .finally(() => {
        setIsLoaded(true);
      });
  };

  //DELETE Comment
  const deleteSignleComment = (e, id) => {
    // console.log(id);
    let data = new FormData();
    data.append("id", id);
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_DELETE_SINGLE_COMMENT,
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      method: "POST",
      data,
    })
      .then((res) => {
        GetAllComments();
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

  //Delete Comment Reply
  const deleteCommentReply = (e, id) => {
    // console.log(id);
    let data = new FormData();
    data.append("id", id);
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_DELETE_COMMENT_REPLY,
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      method: "POST",
      data,
    })
      .then((res) => {
        // console.log("this", res.data);
        notificationAlert(
          res.data.success === false ? "خطا !" : "انجام شد!",
          res.data.message,
          res.data.success === false ? "error" : "success"
        );
      })
      .finally(() => {
        GetAllComments();
        return false;
      });
  };

  const handleChangeStatus = (commet_id) => {
    // console.log(commet_id);
    let data = new FormData();
    data.append("id", commet_id);
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_CONFIRM_SINGLE_COMMENT,
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      method: "POST",
      data,
    })
      .then((res) => {
        notificationAlert(
          res.data.success === false ? "خطا !" : "انجام شد!",
          res.data.message,
          res.data.success === false ? "error" : "success"
        );
      })
      .finally(() => {
        GetAllComments();
        return false;
      });
  };
  return (
    <section className="form-wrapper has-icon wrapper">
      <h2 className="section-title">لیست نظرات</h2>
      {isLoaded ? (
        commentList.length > 0 ? (
          <>
            <table className="table table-bordered table-striped text-center">
              <thead className="thead-light">
                <tr>
                  <th scope="col">موبایل کاربر</th>
                  <th scope="col"> متن پیام </th>
                  <th scope="col"> متن پاسخ </th>
                  <th scope="col"> درس </th>
                  <th scope="col">ویرایش / حذف</th>
                </tr>
              </thead>
              <tbody>
                {commentList.map((item, index) => (
                  <CommentListItems
                    key={index}
                    userID={item.user_id}
                    text={item.text}
                    comment_reply_text={
                      item.comment_reply_id ? item.comment_reply_id.text : ""
                    }
                    comment_reply_id={
                      item.comment_reply_id ? item.comment_reply_id._id : ""
                    }
                    is_active={item.is_active}
                    course={item.course_id && item.course_id.title}
                    id={item._id}
                    DeleteItem={deleteSignleComment}
                    DeleteReplyItem={deleteCommentReply}
                    ChangeStatus={handleChangeStatus}
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
            در حال حاظر کامنتی ثبت نشده
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
export default withRouter(GetAllComment);
