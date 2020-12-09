import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Axios from "axios";
import {
  ErrorStatus,
  ErrorMessage,
  IsAuthenticated,
  PhoneNumber,
  UserRole,
} from "../services/Recoils";
import { useRecoilState } from "recoil";

export default function Logout() {
  const [isRedirect, setIsRedirect] = useState(false);

  const [isDisbaledBtn, setIsDisabledBtn] = useState(false);

  const [errorStatus, setErrorStatus] = useRecoilState(ErrorStatus);
  const [errorMessage, setErrorMessage] = useRecoilState(ErrorMessage);

  const [isAuthenticated, setIsAuthenticated] = useRecoilState(IsAuthenticated);
  const [phoneNumber, setPhoneNumber] = useRecoilState(PhoneNumber);
  const [userRole, setUserRole] = useRecoilState(UserRole);

  const handleLogoutBtn = () => {
    setIsDisabledBtn(true);
    Axios({
      url: process.env.REACT_APP_BACKEND_URL + "api/auth/logout",
      withCredentials: true,
      method: "POST",
    })
      .then((res) => {
        // console.log(res);
        setErrorStatus(res.data.success ? "success" : "danger");
        setErrorMessage(res.data.message);
        if (res.data.success) {
          setIsRedirect(true);
          setIsAuthenticated(false);
          setPhoneNumber(null);
          setUserRole(null);
        }
      })
      .finally(() => {});
  };

  return (
    <>
      {isRedirect ? (
        <Redirect to="/" />
      ) : (
        <button
          className="dropdown-item"
          onClick={handleLogoutBtn}
          disabled={isDisbaledBtn}
        >
          خروج
        </button>
      )}
    </>
  );
}
