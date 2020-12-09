import React, { useState } from "react";
import Axios from "axios";
import { notificationAlert } from "../../../../../utils/shared";

function ChargeWallet({ ...props }) {
  const [isSubmitBtnDisabled, setIsSubmitBtnDisabled] = useState(false);
  const [amount, setAmount] = useState("");

  const handleFormSubmitBtn = (e) => {
    e.preventDefault();
    setIsSubmitBtnDisabled(true);

    let data = new FormData();

    data.append("amount", amount);

    // for (var key of data.entries()) {
    //   console.log(key[0] + ", " + key[1]);
    // }
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_STUDENT_SUBMIT_PEYMENT_REQUEST,
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      method: "POST",
      data: data,
    })
      .then((res) => {
        notificationAlert(
          res.data.success === false ? "خطا !" : "انجام شد!",
          res.data.message,
          res.data.success === false ? "error" : "success"
        );
        if (res.data.success) window.location.href = res.data.data.url;
      })
      .catch((e) => {
        //  console.log(e.response);
      })
      .finally(() => {
        setIsSubmitBtnDisabled(false);
      });
  };

  return (
    <section className="chargeWallet-wrapper">
      <h2 className="section-title mb-3">شارژ کیف پول</h2>
      <form className="increase-box" onSubmit={handleFormSubmitBtn}>
        <p className="mb-2">
          لطفا مبلغ مورد نظر خود را به <b>تومان</b> وارد نمائید
        </p>

        <div className="form-group mb-3">
          <select
            className="form-control"
            name="amount"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          >
            <option>مبلغ را به تومان وارد کنید</option>
            <option value="1000">1000</option>
            <option value="2000">2000</option>
            <option value="3000">3000</option>
            <option value="5000">5000</option>
            <option value="10000">10000</option>
            <option value="15000">15000</option>
            <option value="20000">20000</option>
            <option value="30000">30000</option>
            <option value="50000">50000</option>
          </select>
        </div>

        <button
          type="submit"
          className="btn btn-primary d-block w-100 py-3"
          data-ripple="ripple"
          disabled={isSubmitBtnDisabled}
        >
          شارژ کیف پول من
        </button>
      </form>
    </section>
  );
}
export default ChargeWallet;
