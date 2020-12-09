import React from "react";
import ProfileDropdown from "./header/ProfileDropdown";
// import Icons from "./header/Icons";
import "../../../../assets/admin/css/Header.scss";
import DashboardLogo from "../../shared/components/DashboardLogo";
import CurrentDate from "../../../../utils/CurrentDate";
import UserBalance from "../../../../utils/UserBalance";

export default function Header() {
  const toggleMenu = () => {
    const element = document.querySelector("aside");
    element.classList.toggle("hide");
  };

  return (
    <header className="header">
      <div className="container-fluid">
        <div className="nav-right">
          <div className="toggle-menu d-inline-block align-middle">
            <button
              className="btn btn-empty"
              onClick={toggleMenu}
              id="toggleMenu"
            >
              <i className="icon-menu"></i>
            </button>
          </div>
          <CurrentDate />
        </div>

        <DashboardLogo />

        <div className="nav-left">
          <UserBalance />

          {/* <Icons /> */}
          <ProfileDropdown />
        </div>
      </div>
    </header>
  );
}
