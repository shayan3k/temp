import React, { useState } from "react";
import { Link } from "react-router-dom";

function ExamQuestionnaireItems({ ...props }) {
  const [isDisabledBtn, setIsDisabledBtn] = useState(false);

  return (
    <tr>
      <td>{props.item.exam_id.title}</td>
      <td>{props.item.index}</td>
      <td>{props.item.answer}</td>
      <td>
        <Link
          to={`/admin/update-exam-questionnaire/${props.item._id}`}
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
            setIsDisabledBtn(await props.DeleteItem(props.item._id));
          }}
          disabled={isDisabledBtn}
        >
          <i className="icon-trash"></i>
        </button>
      </td>
    </tr>
  );
}
export default ExamQuestionnaireItems;
