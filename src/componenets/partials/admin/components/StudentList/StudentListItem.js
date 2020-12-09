import React, { useState } from "react";
import { Link } from "react-router-dom";

function StudentListItem(props) {
  const [isBtnDisbaled, setIsBtnDisbaled] = useState(false);

  const fullname = props.fullname !== " " ? props.fullname : "وارد نشده";
  // console.log(props.fullname, typeof fullname);
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
      <td>{props.phone_number}</td>
      <td>{fullname}</td>

      <td>
        <b className={`text-${props.status ? "success" : "danger"}`}>
          {props.status ? "تایید شده" : "بلاک شده"}
        </b>
      </td>
      <td>
        {/* <button
          className="btn btn-primary pt-2 hint--top mx-1  btn-sm"
          aria-label="ویرایش شماره"
          onClick={() => props.updateItem(props.phone_number)}
        >
          ویرایش شماره
          <i className="icon-pencil px-1"></i>
        </button> */}

        <Link
          to={`/admin/get-single-user/${props.id}`}
          className="btn btn-primary pt-2 hint--top  btn-sm"
          aria-label="ویرایش"
        >
          ویرایش
        </Link>

        <Link
          to={`/admin/get-user-enrollment/${props.id}`}
          className="btn btn-light pt-2 hint--top  btn-sm"
          aria-label="ثبت نام ها"
        >
          ثبت نام ها
        </Link>

        <button
          className={`btn btn-${
            props.status ? "danger" : "success"
          } pt-2 hint--top mx-1  btn-sm`}
          aria-label="بلاک"
          disabled={isBtnDisbaled}
          onClick={async () => {
            setIsBtnDisbaled(true);
            setIsBtnDisbaled(await props.updateBlockItem(props.phone_number));
          }}
        >
          {props.status ? "بلاک" : "تایید"}
          {props.status ? (
            <i className="icon-plus px-1"></i>
          ) : (
            <i className="icon-trash px-1"></i>
          )}
        </button>

        <Link
          to={`/admin/user-exam-record/${props.id}`}
          className="btn btn-info pt-2 hint--top  btn-sm"
          aria-label="مشاهده کارنامه"
        >
          مشاهده کارنامه
        </Link>

        <Link
          to={`/admin/get-user-gift-code-logs/${props.id}`}
          className="btn btn-secondary pt-2 hint--top  btn-sm"
          aria-label="کد های هدیه"
        >
          کد های هدیه
        </Link>

        <Link
          to={`/admin/user-enrolled-course/${props.id}`}
          className="btn btn-warning pt-2 hint--top  btn-sm"
          aria-label="دروس ثبت نامی"
        >
          دروس ثبت نامی
        </Link>
        <Link
          to={`/admin/get-user-deposit/${props.id}`}
          className="btn btn-dark pt-2 hint--top  btn-sm"
          aria-label="مجموع پرداختی ها"
        >
          مجموع پرداختی ها
        </Link>

        <Link
          to={`/admin/get-user-assignment/${props.id}`}
          className="btn btn-primary pt-2 hint--top  btn-sm"
          aria-label="لیست تکالیف"
        >
          لیست تکالیف
        </Link>
      </td>
    </tr>
  );
}

export default StudentListItem;
