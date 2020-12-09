import React from "react";
import "../../../../../assets/admin/css/confirmation_list.scss";

function ConfirmationListItem({ ...props }) {
  return (
    <tr>
      <td className="align-middle">{props.index}</td>
      <td className="align-middle">{props.phoneNumber}</td>
      <td className="align-middle">{props.nationalID}</td>
      <td className="align-middle">
        <img
          className="NationalImg"
          src={
            `${process.env.REACT_APP_IMAGE_URL}/${process.env.REACT_APP_USER_NATIONAL_ID_PATH}` +
            props.image
          }
          alt={props.nationalID}
          title={props.nationalID}
          width="150"
          height="100"
        />
      </td>
      <td className="align-middle">
        <button
          className={`btn btn-${
            props.verified ? "success" : "warning"
          } pt-2 hint--top`}
          aria-label="وضعیت"
          onClick={() => props.ConfirmItem(props.phoneNumber)}
        >
          <i className={`icon-${props.verified ? "check" : "plus"}`}></i>
        </button>
        <button
          className="btn btn-danger pt-2 hint--top"
          aria-label="حذف"
          onClick={() => props.DeleteItem(props.phoneNumber)}
        >
          <i className="icon-trash"></i>
        </button>
      </td>
    </tr>
  );
}

export default ConfirmationListItem;
