import React, { useState } from "react";
import { Link } from "react-router-dom";

function CourseExamItems({ ...props }) {
  const [isDisabledBtn, setIsDisabledBtn] = useState(false);

  return (
    <tr>
      <td>{props.item.title}</td>
      <td>{props.item.duration}</td>
      <td>{props.item.pass_point}</td>
      <td>{props.item.total_point}</td>
      <td>{props.item.negative_type === "with-negative" ? "دارد" : "ندارد"}</td>
      <td>
        <Link
          to={`/admin/update-course-exam/${props.item._id}`}
          className="btn btn-primary pt-2 hint--top"
          aria-label="ویرایش"
        >
          ویرایش<i className="icon-pencil"></i>
        </Link>

        <button
          className="btn btn-danger pt-2 hint--top"
          aria-label="حذف"
          onClick={async (e) => {
            setIsDisabledBtn(true);
            setIsDisabledBtn(await props.DeleteItem(props.item._id));
          }}
          disabled={isDisabledBtn}
        >
          حذف <i className="icon-trash"></i>
        </button>

        <Link
          to={`/admin/get-exam-questionnaire/${props.item._id}`}
          className="btn btn-primary pt-2 hint--top"
          aria-label="مشاهده پاسخ نامه"
        >
          پاسخ نامه <i className="icon-pencil"></i>
        </Link>
      </td>
    </tr>
  );
}
export default CourseExamItems;
