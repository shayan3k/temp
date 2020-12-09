import React from "react";
import { NavLink } from "react-router-dom";
import "../../../../../assets/shared/css/subset.scss";
import CountUp from "react-countup";

function SubSetItem(props) {
  return (
    <>
      <div className={`subset-item ${props.bgColor}`}>
        <h6>{props.title}</h6>
        <CountUp
          start={0}
          end={parseInt(props.count)}
          duration={2.75}
          separator=","
          // decimals={4}
          decimal=","
          prefix=""
          suffix=""
        >
          {({ countUpRef, start }) => (
            <div>
              <p ref={countUpRef} id="subset-amount" />
            </div>
          )}
        </CountUp>

        {props.linkTo ? (
          <NavLink to={props.linkTo}>
            نمایش جزئیات بیشتر <i className="icon-arrow-left"></i>
          </NavLink>
        ) : (
            ""
          )}
      </div>
    </>
  );
}

export default SubSetItem;
