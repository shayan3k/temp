import React, { useEffect } from "react";
import MenuItems from "./MenuItems";
import { NavLink } from "react-router-dom";
import "../../../../../assets/public/css/_header.scss";

import { useRecoilState } from "recoil";
import { IsAuthenticated, UserRole } from "../../../../../services/Recoils";

function Header({ ...props }) {
  const [isAuthenticated] = useRecoilState(IsAuthenticated);
  const [userRole] = useRecoilState(UserRole);

  useEffect(() => {
    window.addEventListener("scroll", function (e) {
      let winScroll = window.pageYOffset || document.documentElement.scrollTop;

      try {
        const headerEl = document.querySelector("header.main_menu");
        if (winScroll > 10) {
          headerEl.classList.add("bg");
        } else {
          headerEl.classList.remove("bg");
        }
      } catch (e) {}
    });
  }, []);

  return (
    <header className="main_menu home_menu menu_fixed animated fadeInDown">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg navbar-light">
              <NavLink className="navbar-brand" id="logo" to="/">
                <img
                  src={process.env.REACT_APP_BACKEND_URL + "logo.png"}
                  alt="logo"
                />
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse main-menu-item justify-content-end"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav align-items-center">
                  <MenuItems active="true" link="/" title="صفحه اصلی" />
                  <MenuItems
                    active="false"
                    link="/teachers"
                    title="لیست دبیران"
                  />
                  <MenuItems active="false" link="/courses" title="کلاس ها" />
                  {/* <MenuItems active="false" link="/" title="آزمون ها" />*/}
                  <MenuItems
                    active="false"
                    link="/contact-us"
                    title="تماس با ما"
                  />
                  <MenuItems
                    active="false"
                    link="/about-us"
                    title="درباره ما"
                  />
                  <li className="nav-item">
                    <NavLink
                      to={() => {
                        if (isAuthenticated && userRole === "student")
                          return "/student/dashboard";
                        else if (isAuthenticated && userRole === "admin")
                          return "/admin/dashboard";
                        else return "/signin";
                      }}
                      className="border-white"
                    >
                      {isAuthenticated ? "ورود به پنل" : "ثبت نام / ورود"}
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
