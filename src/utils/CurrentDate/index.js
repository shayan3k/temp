import React, { useEffect, useState } from "react";
import { getCurrentDate } from "../shared";

function CurrentDate() {
  const [date, setDate] = useState("");
  const current_date = () => {
    setDate(getCurrentDate);
  };
  useEffect(() => {
    current_date();
  });

  return <span className="date">{date}</span>;
}
export default CurrentDate;
