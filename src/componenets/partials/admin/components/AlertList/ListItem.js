import React, { useState } from "react";
import { Link } from "react-router-dom";
import DangerouslySetInnerHTML from "../../../shared/components/DangerouslySetInnerHTML";
function ListItem({ ...props }) {
  //initial value should be false
  const [isDisabledBtn, setIsDisabledBtn] = useState(false);
  return (
    <tr>
      <td className="align-middle">
        {props.index +
          (props.currentPage - 1) *
            parseInt(process.env.REACT_APP_PAGE_ITEM_COUNT)}
      </td>
      <td className="align-middle">{props.title}</td>
      <td className="align-middle">{props.subtitle}</td>
      <td className="align-middle">{props.status}</td>
      <td className="align-middle">
        <DangerouslySetInnerHTML message={props.message} substring={70} />
      </td>

      <td className="align-middle">
        <Link
          to={`/admin/update-alert/${props.id}`}
          className="btn btn-primary pt-2 hint--top my-1"
          aria-label="ویرایش"
        >
          ویرایش<i className="icon-pencil"></i>
        </Link>

        <button
          className="btn btn-danger pt-2 hint--top my-1"
          aria-label="حذف"
          onClick={async (e) => {
            setIsDisabledBtn(true);
            setIsDisabledBtn(await props.DeleteItem(e, props.id));
          }}
          disabled={isDisabledBtn}
        >
          حذف
          <i className="icon-trash px-2"></i>
        </button>
      </td>
    </tr>
  );
}

export default ListItem;
