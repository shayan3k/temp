import React from "react";
import { getPersianDate } from "../../../../../utils/shared";
import { Link } from "react-router-dom";
import NumberFormat from "react-number-format";

function DepositItems({ ...props }) {
  console.log(props);
  return (
    <tr>
      <td className="text-center">{props.index}</td>
      <td className="text-center">
        {props.course_id ? (
          <Link to={`/single-course/` + props.course_id?._id}>
            {props.course_id?.title}
          </Link>
        ) : (
          " - "
        )}
      </td>
      <td className="text-center">
        <NumberFormat
          value={props.price}
          displayType={"text"}
          thousandSeparator={true}
        />
      </td>
      <td className="text-center">
        <NumberFormat
          value={props.after_price}
          displayType={"text"}
          thousandSeparator={true}
        />
      </td>
      <td className="text-center">{props.type}</td>
      <td className="text-center">{getPersianDate(props.createdAt)}</td>
    </tr>
  );
}
export default DepositItems;
