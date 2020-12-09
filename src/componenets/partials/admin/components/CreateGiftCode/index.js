import React, { useState } from "react";
import axios from "axios";
import { notificationAlert } from "../../../../../utils/shared";

function CreateGiftCode() {
  const [disabledButton, setDisabledButton] = useState(false);
  const [amount, setAmount] = useState("");
  const [count, setCount] = useState("");

  const submitGiftCode = (e) => {
    e.preventDefault();
    setDisabledButton(true);
    let data = new FormData();
    data.append("amount", amount);
    data.append("count", count);

    axios({
      url: process.env.REACT_APP_BACKEND_URL + "api/admin/create-gift-code",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
      method: "post",
      data,
    })
      .then((res) => {
        try {
          notificationAlert(
            res.data.success === false ? "خطا !" : "انجام شد!",
            res.data.message,
            res.data.success === false ? "error" : "success"
          );
        } catch (e) {
          // console.log(e);
        }
      })
      .finally(() => {
        setDisabledButton(false);
      });
  };

  return (
    <section className="gift-code">
      <h2 className="section-title">ایجاد کد تخفیف</h2>
      <div className="increase-box">
        <p class="mb-3">
          لطفا مبلغ مورد نظر خود را به <b>تومان</b> وارد نمائید
        </p>
        <div className="row">
          <form className="col-md-9 col-lg-7" onSubmit={submitGiftCode}>
            <div className="form-group mb-3">
              <input
                type="number"
                className="form-control no-arrow"
                name="amount"
                id="amount"
                required
                placeholder="مبلغ کد تخفیف را وارد کنید"
                onChange={(e) => setAmount(e.target.value.trim())}
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                className="form-control"
                name="count"
                id="count"
                required
                placeholder="تعداد دفعات استفاده از کد تخفیف"
                onChange={(e) => setCount(e.target.value.trim())}
              />
            </div>
            <div className="form-group">
              <button
                type="submit"
                className="btn btn-success gift-btn"
                data-ripple="ripple"
                disabled={disabledButton}
              >
                ایجاد کد تخفیف
              </button>
            </div>
          </form>
        </div>
        <div className="gift-card-result">
          کد تخفیف شما
          <span className="generated-code">365fdv21</span>
          میباشد
        </div>
      </div>
    </section>
  );
}
export default CreateGiftCode;
