import React, { useEffect, useState } from "react";
import NumberFormat from "react-number-format";
import Axios from "axios";
function UserBalance() {
  const [currentUserBalance, setCurrnetUserBalance] = useState(0);
  const getUserBalance = () => {
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_STUDENT_CURRENT_BALANCE,
      withCredentials: true,
      method: "POST",
    }).then((res) => {
      try {
        setCurrnetUserBalance(res.data.data);
      } catch (e) {}
    });
  };
  useEffect(() => {
    getUserBalance();
  });

  return (
    <NumberFormat
      value={currentUserBalance}
      displayType={"text"}
      thousandSeparator={true}
      suffix={" تومان"}
    />
  );
}
export default UserBalance;
