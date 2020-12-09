import React, { useState, useEffect } from "react";
import Axios from "axios";
// import commentAvatar from "../../../../../assets/public/images/comment-avatar.png";
import { getPersianDate } from "../../../../../utils/shared";
import afdsf from "../../../shared/components/Alert";
function CommentList({ ...props }) {
  const [commentList, setCommentList] = useState([]);
  useEffect(() => {
    getCourseComment();
  }, []);

  const getCourseComment = () => {
    let data = new FormData();
    data.append("course_id", props.courseId);

    // for (var key of data.entries()) {
    //   console.log(key[0] + ", " + key[1]);
    // }

    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_HOME_GET_COURSE_COMMENT,
      method: "POST",
      withCredentials: true,
      data,
    })
      .then((res) => {
        try {
          // console.log(res.data.data);
          setCommentList(res.data.data);
        } catch (e) {
          // console.log(e);
        }
      })
      .catch((e) => {
        // console.log(e);
      });
  };

  return (
    <div className="comment-list mb-5">
      <h3 className="box-title">لیست نظرات</h3>
      {commentList.length > 0 ? (
        commentList.map((item, index) => (
          <div key={index} className="comment-item">
            <div className="image">
              <img
                src={
                  process.env.REACT_APP_IMAGE_URL +
                  "/" +
                  process.env.REACT_APP_USER_IMAGE_PATH +
                  item.user_id.image
                }
                alt="your title"
                title="your title"
              />
            </div>
            <div className="content">
              <h5 className="user-title">
                {item.user_id.name} {item.user_id.lastname}
              </h5>
              <span className="date">{getPersianDate(item.createdAt)}</span>
              <p>{item.text}</p>
            </div>

            {item.comment_reply_id && (
              <div className="comment-item">
                <div className="image"></div>
                <div className="content">
                  <h5 className="user-title">ادمین سایت</h5>
                  <span className="date">
                    {getPersianDate(item.comment_reply_id.createdAt)}
                  </span>
                  <p>{item.comment_reply_id.text}</p>
                </div>
              </div>
            )}
          </div>
        ))
      ) : (
        <div className={"alert alert-info "} role="alert">
          <h6> {"برای این درس تاکنون نظری ثبت نشده است"}</h6>
        </div>
      )}
    </div>
  );
}
export default CommentList;
