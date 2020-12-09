import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getPersianDate } from "../../../../../utils/shared";
function SessionItems({ ...props }) {
  const [isDisabledBtn, setIsDisabledBtn] = useState(false);
  return (
    <tr>
      <td>{props.item.index}</td>
      <td>{props.item.subject}</td>
      <td>{getPersianDate(props.item.start_time)}</td>
      <td>{props.item.duration} دقیقه</td>
      <td>{props.item.price} تومان</td>
      <td>
        <Link
          to={`/admin/update-course-session/${props.item.id}`}
          className="btn btn-primary pt-2 hint--top"
          aria-label="ویرایش"
        >
          <i className="icon-pencil"></i>
        </Link>
        <button
          className="btn btn-danger pt-2 hint--top"
          aria-label="حذف"
          onClick={async (e) => {
            setIsDisabledBtn(true);
            setIsDisabledBtn(await props.DeleteItem(props.item.id));
          }}
          disabled={isDisabledBtn}
        >
          <i className="icon-trash"></i>
        </button>
      </td>
    </tr>
  );
}
export default SessionItems;
