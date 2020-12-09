import React, { useEffect, useState } from "react";
import axios from "axios";
import { TriggerIsAuthenticated } from "../../../../../services/Recoils";
import { useRecoilState } from "recoil";
import { notificationAlert } from "../../../../../utils/shared";

const SignUp = ({ props }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [code, setCode] = useState("");
  //Check if we have query string values
  let theReferenceId;

  try {
    theReferenceId = props.location.pathname.split("/")[2];
  } catch (e) {}
  const [referencePhoneNumber, setReferencePhoneNumber] = useState(
    theReferenceId ? theReferenceId : ""
  );
  const [loading, setLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isSMSSent, setIsSMSSent] = useState(false);

  const [triggerIsAuthenticated, setTriggerIsAuthenticated] = useRecoilState(
    TriggerIsAuthenticated
  );

  const handleSubmitRegisterStart = (e) => {
    e.preventDefault();

    setIsDisabled(true);

    setLoading(true);

    let data = new FormData();

    data.append("phone_number", phoneNumber);

    if (referencePhoneNumber)
      data.append("reference_phone_number", referencePhoneNumber);

    axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_REGISTER_START,
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      method: "POST",
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
      .finally(setIsDisabled(false));
  };

  const handleSubmitRegisterCode = (e) => {
    e.preventDefault();

    setIsDisabled(true);

    setLoading(true);

    let data = new FormData();
    data.append("code", code);

    axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_REGISTER_COMPLETE,
      method: "POST",
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data,
    })
      .then((res) => {
        setLoading(false);
        console.log("this", res.data);
        notificationAlert(
          res.data.success === false ? "خطا !" : "انجام شد!",
          res.data.message,
          res.data.success === false ? "error" : "success"
        );
        setTriggerIsAuthenticated(!triggerIsAuthenticated);
      })
      .finally(setIsDisabled(false));
  };

  useEffect(() => {
    return setIsSMSSent(false);
  }, []);

  return (
    <section id="content2" className="tab-content">
      {loading ? (
        "Loading"
      ) : isSMSSent ? (
        <>
          <form onSubmit={handleSubmitRegisterCode}>
            <div className="form-group">
              <input
                type="text"
                name="code"
                id="code"
                className="form-control"
                placeholder="کد"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <button
                type="submit"
                className="btn btn-primary btn-block"
                id="register_submit"
                value="ثبت نام"
                disabled={isDisabled}
              >
                ثبت نام
              </button>
            </div>
            <div className="row">
              <div className="col-md-12">
                <p className="text-right">
                  <span onClick={(e) => setIsSMSSent(false)}>
                    ارسال پیام کوتاه مجدد
                  </span>
                </p>
              </div>
            </div>
          </form>
        </>
      ) : (
        <form onSubmit={handleSubmitRegisterStart}>
          <div className="form-group">
            <input
              type="text"
              name="phone_number"
              className="form-control"
              id="phone_number"
              placeholder="شماره تلفن"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="reference_phone_number"
              className="form-control"
              id="reference_phone_number"
              placeholder="شماره تلفن معرف"
              value={referencePhoneNumber}
              onChange={(e) => setReferencePhoneNumber(e.target.value)}
              readOnly={theReferenceId ? true : false}
            />
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="btn btn-primary btn-block"
              id="register_submit"
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
export default SignUp;
