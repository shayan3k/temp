import React, { useState } from "react";
import "../../../../../assets/student/css/_gift-code.scss";
import Axios from "axios";
import { notificationAlert } from "../../../../../utils/shared";
import FollowUp from "../../../shared/components/DateTime/DateTime";
import { TriggerIsAuthenticated } from "../../../../../services/Recoils";
import { useRecoilState } from "recoil";

function SubmitGiftCode({ ...props }) {
  const [disabledButton, setDisabledButton] = useState(false);
  const [triggerIsAuthenticated, setTriggerIsAuthenticated] = useRecoilState(
    TriggerIsAuthenticated
  );
  const [code, setCode] = useState("");
  const [start_time, setStart_time] = useState("");

  const handleFormOnSubmit = (e) => {
    e.preventDefault();
    setDisabledButton(true);

    let data = new FormData();

    data.append("code", code);
    data.append("start_time", start_time);

    // for (var key of data.entries()) {
    //   console.log(key[0] + ", " + key[1]);
    // }
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_SUBMIT_GIFT_CODE,
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      method: "POST",
      data: data,
    })
      .then((res) => {
        // console.log(res);
        notificationAlert(
          res.data.success === false ? "خطا !" : "انجام شد!",
          res.data.message,
          res.data.success === false ? "error" : "success"
        );
        setTriggerIsAuthenticated(!triggerIsAuthenticated);
      })
      .finally(() => {
        setDisabledButton(false);
      });
  };
  return (
    <section className="gift-code py-5">
      <h2 className="section-title mb-3">ثبت کد هدیه</h2>

      <div className="increase-box">
        <form className="row" action="" onSubmit={handleFormOnSubmit}>
          <div className="col-7 col-md-8 pl-1">
            <input
              type="text"
              className="form-control no-arrow"
              name="code"
              id="code"
              placeholder="تخفیف را وارد کنید"
              value={code}
              onChange={(e) => {
                setCode(e.target.value);
              }}
              required={true}
            />
          </div>

          {/* <FollowUp selectedDate={new Date("2020-07-30T19:18:45.443Z")} /> */}

          <div className="col-5 col-md-4 pr-1">
            <button
              type="submit"
              className="btn btn-dark gift-btn w-100 py-3"
              data-ripple="ripple"
              disabled={disabledButton}
            >
              ثبت کد تخفیف
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
export default SubmitGiftCode;
