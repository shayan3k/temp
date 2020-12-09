import React, { useState } from "react";
import { Link } from "react-router-dom";
function TopRankItems({ ...props }) {
  const [isDisabledBtn, setIsDisabledBtn] = useState(false);
  return (
    <tr>
      <td>
        <img
          src={
            process.env.REACT_APP_IMAGE_URL +
            "/" +
            process.env.REACT_APP_ADMIN_TOP_RANK_IMAGE_PATH +
            props.item.image
          }
          alt={props.item.title}
          title={props.item.title}
        />
      </td>
      <td>{props.item.title}</td>
      <td>{props.item.subtitle}</td>
      <td>
        <Link
          to={`/admin/update-top-rank/${props.item._id}`}
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
export default TopRankItems;
