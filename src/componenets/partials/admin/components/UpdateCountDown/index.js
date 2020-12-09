import React, { useState, useEffect } from "react";
import Axios from "axios";
import DatePicker from "../../../shared/components/DatePicker";
import { notificationAlert } from "../../../../../utils/shared";

function UpdateCountDown() {
  const [countDown, setCountDown] = useState("");
  const [countDownText, setCountDownText] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [disabledButton, setDisabledButton] = useState("");
  useEffect(() => {
    getCountDown();
    setDisabledButton(false);
  }, []);

  const getCountDown = () => {
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_HOME_GET_COUNT_DOWN,
      method: "POST",
      withCredentials: true,
    })
      .then((res) => {
        setCountDown(res.data.data.count_down);
        setCountDownText(res.data.data.count_down_text);
      })
      .catch((e) => {
        // console.log(e);
      })
      .finally(() => {
        setIsLoaded(true);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisabledButton(true);

    let data = new FormData();
    data.append("count_down", countDown);
    data.append("count_down_text", countDownText);

    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_WEB_CONTROL_UPDATE_COUNT_DOWN,
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
      })
      .catch((e) => {
        // console.log(e);
      })
      .finally(() => {
        setDisabledButton(false);
      });
  };

  return (
    <div className="container-fluid">
      <section className="form-wrapper has-icon wrapper">
        <h2 className="section-title">ویرایش اطلاعات شمارنده معکوس</h2>
        <div className="row container-fluid">
          <div className="col-md-6 form-group">
            <input
              name="count_down_text"
              className="form-control"
              value={countDownText}
              placeholder="متن"
              onChange={(e) => setCountDownText(e.target.value)}
            />
          </div>
          <div className="col-md-6 form-group">
            <DatePicker
              datetime={countDown}
              setDateTime={setCountDown}
              isLoaded={isLoaded}
            />
          </div>
          <div className="col-12 col-md-12 form-group">
            <button
              type="submit"
              disabled={disabledButton}
              className="btn btn-success submit-category"
              onClick={handleSubmit}
            >
              ویرایش اطلاعات
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
export default UpdateCountDown;
