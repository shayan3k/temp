import React, { Fragment } from "react";

import "../../../../../assets/shared/css/breadcrumb/style.scss";

export default function BreadCrumb(props) {
  return (
    <Fragment>
      <div className="title-row">
        <div className="text-right">
          <h1 className="page-title">{props.routeTitle}</h1>
        </div>
        <nav className="text-left">
          <ol className="bread">
            <li>
              <a href="/">صفحه اصلی</a>
            </li>
            <li className="active" aria-current="page">
              {props.routeTitle}
            </li>
          </ol>
        </nav>
      </div>
      <div className="separator mt-3 mb-5"></div>
    </Fragment>
  );
}
