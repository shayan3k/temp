import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { TriggerIsAuthenticated } from "../../../../../services/Recoils";
import { useRecoilState } from "recoil";
import { notificationAlert } from "../../../../../utils/shared";

const Login = ({ props }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isSMSSent, setIsSMSSent] = useState(false);

  const [triggerIsAuthenticated, setTriggerIsAuthenticated] = useRecoilState(
    TriggerIsAuthenticated
  );

  useEffect(() => {
    return setIsSMSSent(false);
  }, []);

  const handleSubmitLoginStart = (e) => {
    e.preventDefault();

    setIsDisabled(true);
    setLoading(true);

    let data = new FormData();
    data.append("phone_number", phoneNumber);

    axios({
      url:
        process.env.REACT_APP_BACKEND_URL + process.env.REACT_APP_LOGIN_START,
      method: "POST",
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data,
    })
      .then((res) => {
        setLoading(false);
        setIsSMSSent(res.data.success);
        notificationAlert(
          res.data.success ? "انجام شد!" : "خطا !",
          res.data.message,
          res.data.success ? "success" : "error"
        );
      })
      .finally(() => {
        setIsDisabled(false);
        setLoading(false);
      });
  };

  const handleSubmitLoginCode = (e) => {
    e.preventDefault();

    setIsDisabled(true);
    setLoading(true);

    let data = new FormData();
    data.append("code", code);

    axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_LOGIN_COMPLETE,
      method: "POST",
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data,
    })
      .then((res) => {
        notificationAlert(
          res.data.success === false ? "خطا !" : "انجام شد!",
          res.data.message,
          res.data.success === false ? "error" : "success"
        );

        setTriggerIsAuthenticated(!triggerIsAuthenticated);
      })
      .finally(() => {
        setIsDisabled(false);
        setLoading(false);
      });
  };

  return (
    <section id="content1" className="tab-content">
      {loading ? (
        "Loading"
      ) : isSMSSent ? (
        <>
          <form onSubmit={handleSubmitLoginCode}>
            <div className="form-group">
              <input
                type="text"
                name="code"
                className="form-control"
                id="code"
                placeholder="کد"
                onChange={(e) => setCode(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <button
                type="submit"
                className="btn btn-primary btn-block"
                id="register_submit"
                disabled={isDisabled}
              >
                ورود
              </button>
            </div>
            <div className="row">
              <div className="col-md-12">
                <p className="text-right">
                  <Link to="#" onClick={(e) => setIsSMSSent(false)}>
                    ارسال پیام کوتاه مجدد
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </>
      ) : (
        <form onSubmit={handleSubmitLoginStart}>
          <div className="form-group">
            <input
              type="text"
              name="code"
              className="form-control"
              id="code"
              placeholder="شماره تلفن خود را وارد کنید"
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <button
              type="submit"
              id="register_submit"
              className="btn btn-primary btn-block"
              disabled={isDisabled}
            >
              ادامه
            </button>
          </div>
        </form>
      )}
    </section>
  );
};
export default Login;
