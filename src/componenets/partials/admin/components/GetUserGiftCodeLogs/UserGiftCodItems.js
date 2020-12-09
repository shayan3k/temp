import React from "react";
import { getPersianDate } from "../../../../../utils/shared";
function UserGiftCodItems({ ...props }) {
  return (
    <tr>
      <td>{props.index}</td>
      <td>{props.code}</td>
      <td>{props.amount}</td>
      <td>{props.phone_number}</td>
      <td>{getPersianDate(props.createdAt)}</td>
    </tr>
  );
}
export default UserGiftCodItems;
