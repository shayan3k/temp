import React from "react";
import "../../../../../assets/shared/css/loading.scss";

import loading01 from "../../../../../assets/shared/images/loading01.svg";
import loading02 from "../../../../../assets/shared/images/loading02.svg";

function Loading() {
  return (
    <div>
      <div className="loading style1">
        <img src={loading01} alt="loading" title="loading" />
        در حال بارگذاری...
      </div>
      {/* <div className="loading style2">
        <img
          src={loading02}
          alt="loading"
          title="loading"
          style={{ display: "none" }}
        />
        در حال بارگذاری...
      </div> */}
    </div>
  );
}

export default Loading;
