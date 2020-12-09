import React from "react";

function PaginationListItem({ ...props }) {
  return (
    <li className={`page-item ${props.status}`}>
      <a className="page-link" href={props.link} tabIndex={props.tabindex}>
        {props.status === "active" ? (
          <span className="sr-only">(فعلی)</span>
        ) : (
          ""
        )}

        {props.text}
      </a>
    </li>
  );
}

export default PaginationListItem;
