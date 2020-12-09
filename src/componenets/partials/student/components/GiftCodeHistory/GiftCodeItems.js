import React from "react";
import { getPersianDate } from "../../../../../utils/shared";
import NumberFormat from "react-number-format";

function DepositItems({ ...props }) {
  return (
    <tr>
      <td>{props.index}</td>
      <td>{props.phone_number}</td>
      <td>
        <strong>
          <NumberFormat
            value={props.amount}
            displayType={"text"}
            thousandSeparator={true}
          />
        </strong>
      </td>
      <td>
        <span style={{ textDecoration: "line-through" }}>{props.code}</span>
      </td>
      <td>{getPersianDate(props.createdAt)}</td>
    </tr>
  );
}
export default DepositItems;
