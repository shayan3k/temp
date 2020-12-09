import React from "react";
import "../../../../../assets/public/css/_footer.scss";
import { NavLink } from "react-router-dom";
import ContactInformation from "./ContactInformation";
import AboutInformation from "./AboutInformation";
import PopularCourses from "./PopularCourses";
import { useRecoilState } from "recoil";
import { IsAuthenticated, UserRole } from "../../../../../services/Recoils";
import SocialMedia from "./SocialMedia";

function Footer() {
  const [isAuthenticated] = useRecoilState(IsAuthenticated);
  const [userRole] = useRecoilState(UserRole);
  return (
    <footer className="footer-area">
      <div className="container pb-4 pb-md-5">
        <AboutInformation />
        <div className="row justify-content-between">
          <PopularCourses />
          <div className="col-sm-6 col-md-4">
            <div className="single-footer-widget footer_2">
              <h4 className="useful-head">لینک های پر کاربرد</h4>
              <div className="useful-links">
                <p>
                  <span> </span>
                  <NavLink className="footer-link" to="/courses">
                    لیست جلسه ها
                  </NavLink>
                </p>
                <p>
                  <span></span>
                  <NavLink className="footer-link" to="/teachers">
                    {" "}
                    لیست دبیران
                  </NavLink>
                </p>
                <p>
                  <span></span>
                  <NavLink className="footer-link" to="/about-us">
                    {" "}
                    درباره ما
                  </NavLink>
                </p>
                <p>
                  <span></span>
                  <NavLink className="footer-link" to="/contact-us">
                    {" "}
                    تماس با ما
                  </NavLink>
                </p>
                <p>
                  <span></span>
                  <NavLink
                    className="footer-link"
                    to={() => {
                      if (isAuthenticated && userRole === "student")
                        return "/student/userinfo";
                      else if (isAuthenticated && userRole === "admin")
                        return "/admin/userlist";
                      else return "/signin";
                    }}
                  >
                    {isAuthenticated ? "ورود به پنل" : "ثبت نام / ورود"}
                  </NavLink>
                </p>
              </div>
            </div>
          </div>

          <ContactInformation />
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-between mt-5">
          <p className="footer-text">
            <a
              className="footer-end"
              target="_blank"
              rel="noopener noreferrer nofollow external"
              href="https://zobdeganweb.com/"
            >
              © پیاده سازی توسط شرکت زبدگان
            </a>
          </p>
          <SocialMedia />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
