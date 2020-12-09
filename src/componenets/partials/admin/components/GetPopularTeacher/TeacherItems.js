import React, { useState } from "react";
import { Link } from "react-router-dom";
function TeacherItems({ ...props }) {
  const [isDisabledBtn, setIsDisabledBtn] = useState(false);
  return (
    <tr>
      <td>{props.index}</td>
      <td>
        <img
          src={
            `${process.env.REACT_APP_IMAGE_URL}/${process.env.REACT_APP_ADMIN_TEACHER_IMAGE_PATH}` +
            props.image
          }
          alt={props.lastname}
          title={props.lastname}
        />
      </td>
      <td>
        {props.name} {props.lastname}
      </td>
      <td>{props.sex}</td>
      <td>{props.diploma}</td>
      <td>
        <Link
          to={`/admin/update-popular-teacher/${props.id}`}
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
export default TeacherItems;
