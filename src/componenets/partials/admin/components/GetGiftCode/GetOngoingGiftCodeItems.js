import React from "react";
import { getPersianDate } from "../../../../../utils/shared";
function GetOngoingGiftCodeItems({ ...props }) {
  return (
    <tr>
      <td>{props.index}</td>
      <td>{props.amount}</td>
      <td>{props.total_count}</td>
      <td>{props.current_count}</td>
      <td>{props.code}</td>
      <td className={`text-${props.status === true ? "danger" : "success"}`}>
        {props.status === true ? "تمام شده" : "باز"}
      </td>
      <td>{getPersianDate(props.createdAt)}</td>
    </tr>
  );
}
export default GetOngoingGiftCodeItems;
