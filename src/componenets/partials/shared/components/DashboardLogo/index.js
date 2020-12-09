import React from "react";
import { Link } from "react-router-dom";
function DashboardLogo() {
  return (
    <Link to="/" className="header-logo">
      <img
        src={`${process.env.REACT_APP_URL}/logo.png`}
        height="50"
        width="50"
        alt="Logo"
      />
    </Link>
  );
}
export default DashboardLogo;
