import React, { useState } from "react";
import { Link } from "react-router-dom";
import DangerouslySetInnerHTML from "../../../shared/components/DangerouslySetInnerHTML";

function TestimonialItems({ ...props }) {
  const [isDisabledBtn, setIsDisabledBtn] = useState(false);
  return (
    <tr>
      <td>{props.index}</td>
      <td>
        <img
          src={
            process.env.REACT_APP_IMAGE_URL +
            "/" +
            process.env.REACT_APP_ADMIN_TESTIMONIAL_IMAGE_PATH +
            props.image
          }
          alt={props.image}
          title={props.image}
        />
      </td>
      <td>{props.name}</td>
      <td>
        <DangerouslySetInnerHTML message={props.text} substring={70} />
      </td>

      <td className={props.status === true ? "text-success" : "text-danger"}>
        {props.status === true ? "تایید شده" : "تایید نشده"}
      </td>
      <td>
        <Link
          to={`/admin/update-testimonial/${props.id}`}
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
export default TestimonialItems;
