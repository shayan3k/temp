import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

function Breadcrumb({ ...props }) {
  return (
    <div className="breadcrumb-wrap">
      <ul>
        {props.breadItems.map((item, index) => (
          <li key={index}>
            <Link to={item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

Breadcrumb.propTypes = {
  breadItems: propTypes.array.isRequired,
};

export default Breadcrumb;
