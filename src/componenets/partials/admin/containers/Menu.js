import React, { Fragment } from "react";
import "../../../../assets/admin/css/Menu.scss";
import { NavLink, withRouter } from "react-router-dom";

function Menu(props) {
  // console.log(props.location.pathname);
  return (
    <Fragment>
      <aside>
        <div className="main-menu">
          <ul>
            <li
              className={`nav-item ${
                props.location.pathname === "/admin/dashboard" && "active"
              } `}
            >
              <NavLink to="/admin/dashboard" data-flag="dashboard">
                <i className="icon-home"></i>
                <span>داشبورد</span>
              </NavLink>
            </li>

            <li
              className={`nav-item ${
                props.location.pathname === "/admin/update-admin-information" &&
                "active"
              } `}
            >
              <NavLink
                to="/admin/update-admin-information"
                data-flag="dashboard"
              >
                <i className="icon-note"></i>
                <span>ویرایش حساب کاربری</span>
              </NavLink>
            </li>

            <li
              className={`nav-item ${
                props.location.pathname === "/admin/get-all-enrollment" &&
                "active"
              } `}
            >
              <NavLink to="/admin/get-all-enrollment" data-flag="dashboard">
                <i className="icon-event"></i>
                <span>اقساط معوقه</span>
              </NavLink>
            </li>

            <li
              className={`nav-item ${
                props.location.pathname === "/admin/get-all-deposit" && "active"
              } `}
            >
              <NavLink to="/admin/get-all-deposit" data-flag="dashboard">
                <i className="icon-layers"></i>
                <span>آخرین پرداختی ها</span>
              </NavLink>
            </li>

            <li
              className={`nav-item ${
                props.location.pathname === "/admin/user-list" && "active"
              } `}
            >
              <NavLink to="/admin/user-list" data-flag="financial">
                <i className="icon-people"></i>
                <span> لیست دانش آموزان</span>
              </NavLink>
            </li>
            <li
              className={`nav-item ${
                props.location.pathname === "/admin/get-all-teacher" && "active"
              } `}
            >
              <NavLink to="/admin/get-all-teacher" data-flag="financial">
                <i className="icon-people"></i>
                <span> لیست اساتید</span>
              </NavLink>
            </li>
            <li
              className={`nav-item ${
                props.location.pathname === "/admin/get-all-course" && "active"
              } `}
            >
              <NavLink to="/admin/get-all-course" data-flag="financial">
                <i className="icon-notebook"></i>
                <span> لیست درس ها</span>
              </NavLink>
            </li>

            <li
              className={`nav-item ${
                props.location.pathname === "/admin/alert-list" && "active"
              } `}
            >
              <NavLink to="/admin/alert-list" data-flag="financial">
                <i className="icon-event"></i>
                <span> لیست اطلاعیه ها</span>
              </NavLink>
            </li>

            <li
              className={`nav-item ${
                props.location.pathname === "/admin/home-page-setting" &&
                "active"
              } `}
            >
              <NavLink to="/admin/home-page-setting" data-flag="financial">
                <i className="icon-settings"></i>
                <span> تنطیمات صفحه اصلی</span>
              </NavLink>
            </li>

            <li
              className={`nav-item ${
                props.location.pathname === "/admin/get-all-testimonial" &&
                "active"
              } `}
            >
              <NavLink to="/admin/get-all-testimonial" data-flag="financial">
                <i className="icon-speech"></i>
                <span> نظرات </span>
              </NavLink>
            </li>

            <li
              className={`nav-item ${
                props.location.pathname === "/admin/get-all-comment" && "active"
              } `}
            >
              <NavLink to="/admin/get-all-comment" data-flag="financial">
                <i className="icon-bubble"></i>
                <span> لیست کامنت ها</span>
              </NavLink>
            </li>

            <li
              className={`nav-item ${
                props.location.pathname === "/admin/all-report-card" && "active"
              } `}
            >
              <NavLink to="/admin/all-report-card" data-flag="financial">
                <i className="icon-book-open"></i>
                <span> لیست کارنامه ها</span>
              </NavLink>
            </li>

            <li
              className={`nav-item ${
                props.location.pathname === "/admin/get-all-assignment" &&
                "active"
              } `}
            >
              <NavLink to="/admin/get-all-assignment" data-flag="financial">
                <i className="icon-layers"></i>
                <span> لیست تکالیف</span>
              </NavLink>
            </li>

            <li
              className={`nav-item ${
                props.location.pathname === "/admin/get-gift-code" && "active"
              } `}
            >
              <NavLink to="/admin/get-gift-code" data-flag="financial">
                <i className="icon-present"></i>
                <span> لیست کدهای هدیه</span>
              </NavLink>
            </li>

            <li
              className={`nav-item ${
                props.location.pathname === "/admin/get-top-rank" && "active"
              } `}
            >
              <NavLink to="/admin/get-top-rank" data-flag="financial">
                <i className="icon-trophy"></i>
                <span> رتبه های برتر</span>
              </NavLink>
            </li>

            <li
              className={`nav-item ${
                props.location.pathname === "/admin/national-id" && "active"
              } `}
            >
              <NavLink to="/admin/national-id" data-flag="financial">
                <i className="icon-credit-card"></i>
                <span> لیست کدهای ملی</span>
              </NavLink>
            </li>

            <li
              className={`nav-item ${
                props.location.pathname === "/admin/get-popular-course" &&
                "active"
              } `}
            >
              <NavLink to="/admin/get-popular-course" data-flag="financial">
                <i className="icon-notebook"></i>
                <span> درس های پرطرفدار</span>
              </NavLink>
            </li>

            <li
              className={`nav-item ${
                props.location.pathname === "/admin/get-popular-teacher" &&
                "active"
              } `}
            >
              <NavLink to="/admin/get-popular-teacher" data-flag="financial">
                <i className="icon-people"></i>
                <span> اساتید پرطرفدار</span>
              </NavLink>
            </li>

            <li
              className={`nav-item ${
                props.location.pathname === "/admin/get-all-grade" && "active"
              } `}
            >
              <NavLink to="/admin/get-all-grade" data-flag="financial">
                <i className="icon-organization"></i>
                <span> گروه های تحصیلی</span>
              </NavLink>
            </li>

            <li
              className={`nav-item ${
                props.location.pathname === "/admin/get-all-category" &&
                "active"
              } `}
            >
              <NavLink to="/admin/get-all-category" data-flag="financial">
                <i className="icon-people"></i>
                <span> دسته بندی ها</span>
              </NavLink>
            </li>

            <li
              className={`nav-item ${
                props.location.pathname === "/admin/get-all-media" && "active"
              } `}
            >
              <NavLink to="/admin/get-all-media">
                <i className="icon-people"></i>
                <span> در رسانه</span>
              </NavLink>
            </li>

            <li
              className={`nav-item ${
                props.location.pathname === "/admin/get-social-media" &&
                "active"
              } `}
            >
              <NavLink to="/admin/get-social-media">
                <i className="icon-social-spotify"></i>
                <span> شبکه های اجتماعی</span>
              </NavLink>
            </li>

            <li
              className={`nav-item ${
                props.location.pathname === "/admin/get-all-province" &&
                "active"
              } `}
            >
              <NavLink to="/admin/get-all-province" data-flag="financial">
                <i className="icon-plane"></i>
                <span> استان ها</span>
              </NavLink>
            </li>

            <li
              className={`nav-item ${
                props.location.pathname === "/admin/get-all-city" && "active"
              } `}
            >
              <NavLink to="/admin/get-all-city" data-flag="financial">
                <i className="icon-plane"></i>
                <span>شهر ها</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
    </Fragment>
  );
}
export default withRouter(Menu);
