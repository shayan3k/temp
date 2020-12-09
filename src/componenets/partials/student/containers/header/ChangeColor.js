import React, { Fragment, useState } from "react";

export default function ChangeColor() {
  const [toggleState, setToggleState] = useState("on");

  function toggle() {
    setToggleState(toggleState === "on" ? "off" : "on");
    // console.log(toggleState)
  }

  return (
    <Fragment>
      <div className="custom-control custom-switch d-none d-sm-inline-block ml-3 mt-1">
        <input
          type="checkbox"
          className="custom-control-input"
          id="customSwitch1"
          onClick={toggle}
        />
        <label className="custom-control-label" htmlFor="customSwitch1">
          تغییر رنگ
        </label>
      </div>
    </Fragment>
  );
}
