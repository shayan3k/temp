import React, { useState } from "react";
import { Link } from "react-router-dom";

function CommentListItems({ ...props }) {
  const [isDisabledBtn, setIsDisabledBtn] = useState(false);
  const [disableStatusBtn, setDisableStatusBtn] = useState(false);

  return (
    <tr>
      <td>{props.userID.phone_number}</td>
      <td>{props.text}</td>
      <td>{props.comment_reply_text ? props.comment_reply_text : "---"}</td>
      <td>{props.course}</td>
      <td>
        <button
          className={`btn btn-${
            props.is_active === true ? "success" : "warning"
          } py-2 hint--top btn-sm`}
          aria-label={props.is_active === true ? "تایید" : "عدم تایید"}
          onClick={async (e) => {
            setDisableStatusBtn(true);
            setDisableStatusBtn(await props.ChangeStatus(props.id));
          }}
          disabled={disableStatusBtn}
        >
          <i className="ml-1 icon-pencil"></i>
          {props.is_active === true ? "تایید" : "عدم تایید"}
        </button>
        <button
          className="btn btn-danger py-2 hint--top btn-sm"
          aria-label="حذف"
          onClick={async (e) => {
            setIsDisabledBtn(true);
            setIsDisabledBtn(await props.DeleteItem(e, props.id));
          }}
          disabled={isDisabledBtn}
        >
          <i className="ml-1 icon-trash"></i>
          حذف
        </button>
        <Link
          to={{
            pathname: "/admin/create-comment-reply",
            commentId: props.id,
          }}
          className="btn btn-primary py-2 hint--top btn-sm"
          aria-label="پاسخ"
        >
          <i className="ml-1 icon-pencil"></i>
          پاسخ
        </Link>
        {props.comment_reply_id && (
          <Link
            to={`/admin/update-comment-reply/${props.id}/${props.comment_reply_id}`}
            className="btn btn-info py-2 hint--top btn-sm"
            aria-label="ویرایش پاسخ"
          >
            <i className="ml-1 icon-pencil"></i>
            ویرایش پاسخ
          </Link>
        )}

        {props.comment_reply_id && (
          <button
            className="btn btn-danger py-2 hint--top btn-sm"
            aria-label=" حذف پاسخ"
            onClick={async (e) => {
              setIsDisabledBtn(true);
              setIsDisabledBtn(
                await props.DeleteReplyItem(e, props.comment_reply_id)
              );
            }}
            disabled={isDisabledBtn}
          >
            <i className="ml-1 icon-trash"></i>
            حذف پاسخ
          </button>
        )}
      </td>
    </tr>
  );
}
export default CommentListItems;
