import React from "react";
import "../../../../assets/admin/css/Menu.scss";
import { NavLink, withRouter } from "react-router-dom";

function StudentMenu(props) {
  return (
    <>
      <aside>
        <div className="main-menu">
          <ul>
            <li
              className={`nav-item ${
                props.location.pathname === "/student/dashboard" && "active"
              } `}
            >
              <NavLink to="/student/dashboard" data-flag="dashboard">
                <i className="icon-home"></i>
                <span>داشبورد</span>
              </NavLink>
            </li>

            <li
              className={`nav-item ${
                props.location.pathname === "/student/user-info" && "active"
              } `}
            >
              <NavLink to="/student/user-info" data-flag="dashboard">
                <i className="icon-note"></i>
                <span>ویرایش حساب کاربری</span>
              </NavLink>
            </li>
            <li
              className={`nav-item ${
                props.location.pathname === "/student/get-enrolled-course" &&
                "active"
              } `}
            >
              <NavLink to="/student/get-enrolled-course" data-flag="dashboard">
                <i className="icon-notebook"></i>
                <span>درس های ثبت نام شده</span>
              </NavLink>
            </li>

            <li
              className={`nav-item ${
                props.location.pathname === "/student/get-all-assignment" &&
                "active"
              } `}
            >
              <NavLink to="/student/get-all-assignment" data-flag="dashboard">
                <i className="icon-layers"></i>
                <span> تکالیف </span>
              </NavLink>
            </li>
            <li
              className={`nav-item ${
                props.location.pathname === "/student/all-report-card" &&
                "active"
              } `}
            >
              <NavLink to="/student/all-report-card" data-flag="dashboard">
                <i className="icon-book-open"></i>
                <span> کارنامه ها </span>
              </NavLink>
            </li>
            <li
              className={`nav-item ${
                props.location.pathname === "/student/gift-code-history" &&
                "active"
              } `}
            >
              <NavLink to="/student/gift-code-history" data-flag="courses">
                <i className="icon-present"></i>
                <span>کدهای هدیه</span>
              </NavLink>
            </li>

            <li
              className={`nav-item ${
                props.location.pathname === "/student/referenced-list" &&
                "active"
              } `}
            >
              <NavLink to="/student/referenced-list" data-flag="courses">
                <i className="icon-user-follow"></i>
                <span>دوستان معرفی شده</span>
              </NavLink>
            </li>

            <li
              className={`nav-item ${
                props.location.pathname === "/student/get_deposits" && "active"
              } `}
            >
              <NavLink to="/student/get_deposits" data-flag="courses">
                <i className="icon-credit-card"></i>
                <span>اطلاعات پرداختی ها</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
export default withRouter(StudentMenu);
