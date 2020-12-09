import React, { useState } from "react";
import { getPersianDate } from "../../../../../utils/shared";
import { Link } from "react-router-dom";
import NumberFormat from "react-number-format";

function DepositItems({ ...props }) {
  const [isDisabledBtn, setIsDisabledBtn] = useState(false);

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
        {props.peyment == null ? (
          "-"
        ) : (
          <NumberFormat
            value={props.user_installment_amount}
            displayType={"text"}
            thousandSeparator={true}
          />
        )}
      </td>
      <td className="text-center">
        <button
          className={`btn ${props.is_active ? "btn-success" : "btn-danger"}`}
          disabled={props.peyment == null ? true : isDisabledBtn}
          onClick={async (e) => {
            setIsDisabledBtn(true);
            setIsDisabledBtn(
              await props.user_peyment_action(props.enrollment_id)
            );
          }}
        >
          {props.is_active ? "تعلیق" : "عدم تعلق"}
        </button>

        <button
          className={`btn btn-info`}
          disabled={isDisabledBtn}
          onClick={async (e) => {
            setIsDisabledBtn(true);
            setIsDisabledBtn(
              await props.user_remove_enrollment(props.enrollment_id)
            );
          }}
        >
          حذف
        </button>
      </td>
    </tr>
  );
}
export default DepositItems;
