import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../../../../assets/public/css/signin/signin.scss";
import Logo from "../../../../../assets/shared/images/logo.png";
import Alert from "../../../shared/components/Alert";
import SignUp from "../../components/Signup";
import Longin from "../../components/Login";

const Account = ({ props }) => {
  const [tabState, setTabState] = useState(true);

  return (
    <>
      <section className="login-wrapper">
        <div className="tab_container">
          <div className="logo-box">
            <Link to="/">
              <img
                src={`${process.env.REACT_APP_URL}/logo.png`}
                height="50"
                width="50"
                alt="Logo"
              />
            </Link>
          </div>

          <input
            id="tab1"
            type="radio"
            name="tabs"
            checked={tabState ? false : true}
            onChange={() => {
              setTabState(false);
            }}
          />
          <label htmlFor="tab1">
            <span>ورود </span>
          </label>

          <input
            id="tab2"
            type="radio"
            name="tabs"
            checked={tabState ? true : false}
            onClick={() => {
              setTabState(true);
            }}
          />
          <label htmlFor="tab2">
            <span className="text-nowrap">ثبت نام</span>
          </label>

          <Longin />
          <SignUp props={props} />
        </div>
      </section>
    </>
  );
};
export default Account;
