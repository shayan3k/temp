import React, { useState } from "react";
import { Link } from "react-router-dom";
function CourseItems({ ...props }) {
  const [isDisabledBtn, setIsDisabledBtn] = useState(false);
  return (
    <tr>
      <td>{props.index}</td>
      <td>{props.course_title}</td>
      <td>{props.is_pay_all ? "پرداخن یکجا" : "پرداخت تکی"}</td>
      <td>{props.is_a_session ? "جلسه ای" : "جلسه ای"}</td>
      <td>
        <Link
          to={`/admin/update-popular-course/${props.id}`}
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
            setIsDisabledBtn(await props.DeleteItem(props.id));
          }}
          disabled={isDisabledBtn}
        >
          <i className="icon-trash"></i>
        </button>
      </td>
    </tr>
  );
}
export default CourseItems;
