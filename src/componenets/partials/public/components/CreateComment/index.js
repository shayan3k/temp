import React, { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import Alert from "../../../shared/components/Alert";
import { useRecoilState } from "recoil";
import { ErrorStatus, ErrorMessage } from "../../../../../services/Recoils";
import { notificationAlert } from "../../../../../utils/shared";

function CreateComment({ ...props }) {
  const [disabledButton, setDisabledButton] = useState(false);
  const [text, setText] = useState("");
  const [errorStatus, setErrorStatus] = useRecoilState(ErrorStatus);
  const [errorMessage, setErrorMessage] = useRecoilState(ErrorMessage);

  const handeFormSubmit = (e) => {
    e.preventDefault();
    setDisabledButton(true);
    let data = new FormData();

    data.append("course_id", props.courseId);
    data.append("user", props.phoneNumber);
    data.append("text", text);

    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_CREATE_NEW_COMMENT,
      withCredentials: true,
      method: "POST",
      data: data,
    })
      .then((res) => {
        notificationAlert(
          res.data.success === false ? "خطا !" : "انجام شد!",
          res.data.message,
          res.data.success === false ? "error" : "success"
        );
      })
      .finally(() => {
        setDisabledButton(false);
        setText("");
      });
  };

  // if (props.isAuthenticated && props.userRole === "student") {
  return (
    <div className="add-comment-box">
      {/* <Alert /> */}
      <h3 className="box-title">نظر خود را ثبت کنید</h3>
      <form action="" method="POST" onSubmit={handeFormSubmit}>
        <div className="form-group">
          <label htmlFor="text">نظر شما *</label>
          <textarea
            className="form-control"
            name="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </div>
        <div className="form-group">
          <button
            type="submit"
            className="btn btn-success"
            disabled={disabledButton}
          >
            ارسال نظر
          </button>
        </div>
      </form>
    </div>
  );
  // } else {
  //   return (
  //     <div className="alert alert-info" role="alert">
  //       برای افزودن نظر <Link to="/signin">وارد</Link> سایت شوید.
  //     </div>
  //   );
  // }
}
export default CreateComment;
