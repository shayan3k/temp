import React, { useState, useEffect } from "react";
import Axios from "axios";
import { withRouter, Redirect } from "react-router-dom";
import { notificationAlert } from "../../../../../utils/shared";
function CreateCommentReply({ ...props }) {
  const comment_reply_id = props.match.params.comment_reply_id;

  const commentId = props.location.commentId
    ? props.location.commentId
    : props.match.params.comment_id;

  const [text, setText] = useState("");

  const [disabledButton, setDisabledButton] = useState(false);
  const [isRedirect, setIsRedirect] = useState(false);
  const [isRedirect404, setIsRedirect404] = useState(false);

  useEffect(() => {
    if (comment_reply_id) {
      getSingleCommentReply();
    }
  }, []);

  const getSingleCommentReply = () => {
    let data = new FormData();
    if (comment_reply_id) {
      data.append("id", comment_reply_id);
    }
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_ADMIN_GET_SINGLE_COMMENT_REPLY,
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      method: "POST",
      data,
    })
      .then((res) => {
        if (res.data.err === true) {
          setIsRedirect404(true);
        }
        setText(res.data.data.text);
      })
      .catch((e) => {
        // console.log(e);
      });
  };

  const handleFormOnSubmit = (e) => {
    e.preventDefault();
    setDisabledButton(true);
    let data = new FormData();
    if (comment_reply_id) {
      data.append("id", comment_reply_id);
    } else {
      data.append("comment_id", commentId);
    }

    data.append("text", text);

    // for (var key of data.entries()) {
    //   console.log(key[0] + ", " + key[1]);
    // }
    const myUrl = comment_reply_id
      ? process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_UPDATE_COMMENT_REPLY
      : process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_CREATE_COMMENT_REPLY;

    Axios({
      url: myUrl,
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      method: "POST",
      data,
    })
      .then((res) => {
        // console.log(res.data);
        notificationAlert(
          res.data.success === false ? "خطا !" : "انجام شد!",
          res.data.message,
          res.data.success === false ? "error" : "success"
        );
        if (res.data.success === true) setIsRedirect(true);
      })
      .catch((e) => {
        // console.log(e);
      })
      .finally(() => {
        setDisabledButton(false);
      });
  };
  if (isRedirect404) return <Redirect to="/404" />;
  if (isRedirect) return <Redirect to="/admin/get-all-comment" />;

  if (commentId || comment_reply_id) {
    return (
      <div className="container-fluid">
        <section className="form-wrapper has-icon wrapper">
          <h2 className="section-title">
            {comment_reply_id ? "ویرایش پاسخ" : "افزودن پاسخ"}
          </h2>
          <div className="container-fluid">
            <form className="row" onSubmit={handleFormOnSubmit}>
              <div className="col-md-12 form-group">
                <label htmlFor="text">
                  متن پیام <i className="icon-user"></i>
                </label>
                <textarea
                  className="form-control"
                  type="text"
                  name="text"
                  id="text"
                  value={text}
                  placeholder="متن پیام"
                  rows="10"
                  onChange={(e) => {
                    setText(e.target.value);
                  }}
                />
              </div>

              <div className="col-12 col-md-12 form-group">
                <button
                  type="submit"
                  disabled={disabledButton}
                  className="btn btn-primary submit-category"
                >
                  {comment_reply_id ? "ویرایش پاسخ" : "ثبت پاسخ"}
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    );
  } else {
    return (
      <Redirect
        to={{
          pathname: "/admin/get-all-comment",
        }}
      />
    );
  }
}
export default withRouter(CreateCommentReply);
