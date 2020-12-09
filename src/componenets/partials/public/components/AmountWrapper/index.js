import React from "react";
import "../../../../../assets/public/css/index/_amoutWrapper.scss";
import Box1 from "./Box1";
import Box2 from "./Box2";
import Box3 from "./Box3";
function AmountWrapper() {
  return (
    <section className="amount-wrapper">
      <div className="container">
        <div className="row">
          <Box1 />
          <Box2 />
          <Box3 />
        </div>
      </div>
    </section>
  );
}
export default AmountWrapper;
