import React from "react";
import ProfileDropdown from "./header/ProfileDropdown";
import "../../../../assets/admin/css/Header.scss";
import { Name, LastName, UserImage } from "../../../../services/Recoils";
import DashboardLogo from "../../shared/components/DashboardLogo";
import CurrentDate from "../../../../utils/CurrentDate";
import { useRecoilState } from "recoil";

export default function Header() {
  const [name] = useRecoilState(Name);
  const [lastname] = useRecoilState(LastName);
  const [image] = useRecoilState(UserImage);

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
          {/* <Icons /> */}
          <ProfileDropdown
            adminImage={`${process.env.REACT_APP_IMAGE_URL}/user_image/${image}`}
            adminName={`${name} ${lastname}`}
          />
        </div>
      </div>
    </header>
  );
}
