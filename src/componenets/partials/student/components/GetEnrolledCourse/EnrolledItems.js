import React, { useState } from "react";
import { getPersianDate } from "../../../../../utils/shared";
import { Link } from "react-router-dom";

function DepositItems({ ...props }) {
  const [isDisabledBtn, setIsDisabledBtn] = useState(false);

  console.log(props);
  return (
    <tr>
      <td className="text-center">{props.index}</td>
      <td className="text-center">
        <Link to={`/single-course/` + props.id}>{props.title}</Link>
      </td>

      <td className="text-center">{getPersianDate(props.createdAt)}</td>
      <td className="text-center">
        {props.peyment == null
          ? "-"
          : getPersianDate(props.user_installment_next)}
      </td>
      <td className="text-center">
        {props.peyment == null ? 0 : props.user_installment_count}
      </td>

      <td className="text-center">
        {props.peyment == null ? "-" : props.user_installment_amount}
      </td>
      <td className="text-center">
        <button
          className="btn btn-success"
          disabled={props.peyment == null ? true : isDisabledBtn}
          onClick={async (e) => {
            setIsDisabledBtn(true);
            setIsDisabledBtn(await props.user_peyment_action(props.id));
          }}
        >
          {props.peyment == null ? "پرداخت شده" : "پرداخت"}
        </button>
      </td>
    </tr>
  );
}
export default DepositItems;
