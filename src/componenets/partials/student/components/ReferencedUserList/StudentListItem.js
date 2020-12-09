import React from "react";

function StudentListItem({ ...props }) {
  // console.log({ props });
  return (
    <tr>
      <td>
        <img
          src={
            `${process.env.REACT_APP_IMAGE_URL}/${process.env.REACT_APP_USER_IMAGE_PATH}` +
            props.image
          }
          alt={props.fullname}
          title={props.fullname}
        />
      </td>

      {props.fullname !== " " && <td>{props.fullname}</td>}
      {props.fullname === " " && <td className="text-muted"> نا مشخص</td>}

      <td>{props.phone_number}</td>
      <td>
        <b className={`${props.color}-color`}>{props.status_text}</b>
      </td>
    </tr>
  );
}

export default StudentListItem;
