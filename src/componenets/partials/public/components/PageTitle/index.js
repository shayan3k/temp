import React, { useEffect, useState } from "react";

import BreadCrumb from "../Breadcrumb";
import "../../../../../assets/public/css/pages/_pageTitle.scss";

function PageTitle({ ...props }) {
  const [BgImage, setBgImage] = useState("default.png");
  const theUrl = props.imageUrl;

  useEffect(() => {
    if (props.pageImage) setBgImage(props.pageImage);
  }, [props]);

  return (
    <div
      className="page-title"
      style={{ backgroundImage: `url(${props.imageUrl + BgImage})` }}
    >
      <div className="container">
        <div className="p-title">
          <h1>{props.pageTitle}</h1>
        </div>
        <BreadCrumb breadItems={props.breadItemsArray} />
      </div>
    </div>
  );
}

export default PageTitle;
