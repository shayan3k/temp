import React, { useState } from "react";
import { Link } from "react-router-dom";
function MediaItems({ ...props }) {
  const [isDisabledBtn, setIsDisabledBtn] = useState(false);
  return (
    <tr>
      <td>
        <img
          src={
            process.env.REACT_APP_IMAGE_URL +
            "/" +
            process.env.REACT_APP_ADMIN_MEIDA_IMAGE_PATH +
            props.item.image
          }
          alt={props.link}
          title={props.link}
        />
      </td>
      <td>{props.item.link}</td>
      <td>
        <Link
          to={`/admin/update-media/${props.item._id}`}
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
export default MediaItems;
