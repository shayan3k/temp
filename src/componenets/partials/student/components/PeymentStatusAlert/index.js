import React, { useState, useEffect } from "react";
import Axios from "axios";
import { TriggerIsAuthenticated } from "../../../../../services/Recoils";
import { useRecoilState } from "recoil";

export default function Index(props) {
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");
  const [refID, setRefID] = useState("");
  const [triggerIsAuthenticated, setTriggerIsAuthenticated] = useRecoilState(
    TriggerIsAuthenticated
  );

  useEffect(() => {
    verifyThePeyment();
  }, []);

  const verifyThePeyment = () => {
    let data = new FormData();

    data.append("authority", props.authority);
    data.append("status", props.status);

    // for (var key of data.entries()) {
    //   console.log(key[0] + ", " + key[1]);
    // }
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_STUDENT_VERIFY_PEYMENT_REQUEST,
      withCredentials: true,
      method: "POST",
      data: data,
    }).then((res) => {
      console.log(res);
      try {
        console.log("response", res.data);
        setStatus(res.data.success ? "success" : "danger");
        setMessage(res.data.message);
        setRefID(res.data.data.RefID);
        //refresh the current balance if successful
        setTriggerIsAuthenticated(!TriggerIsAuthenticated);
      } catch (e) {}
    });
  };

  return (
    <section className="wrapper">
      <div
        className={`alert alert-${status} alert-dismissible fade show`}
        role="alert"
      >
        <h2 className="section-title">نتیجه پرداخت زرین پال</h2>

        {status == "success" ? (
          <>
            <h4 className="alert-heading mb-2">{message}</h4>
            <p>
              درس مورد نظر به با موفقیت به لیست کلاس های ثبت نام شده اضافه شد.
            </p>
          </>
        ) : (
          <h4 className="alert-heading mb-2">{message}</h4>
        )}

        <hr />
        {refID ? <p className="mb-0">رفرنس ID {refID}</p> : null}
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </section>
  );
}
