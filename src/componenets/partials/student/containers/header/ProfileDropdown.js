import React from "react";
import { Link } from "react-router-dom";
import { Name, LastName, UserImage } from "../../../../../services/Recoils";
import Logout from "../../../../../utils/Logout";
import { useRecoilState } from "recoil";

export default function ProfileDropdown() {
  const [name, setName] = useRecoilState(Name);
  const [lastname, setLastname] = useRecoilState(LastName);
  const [image, setImage] = useRecoilState(UserImage);

  return (
    <div className="user btn-group">
      <button
        type="button"
        className="btn btn-empty dropdown-toggle"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <span>{`${name} ${lastname}`}</span>
        <img
          src={`${process.env.REACT_APP_IMAGE_URL}/${process.env.REACT_APP_USER_IMAGE_PATH}${image}`}
          alt={`${name} ${lastname}`}
        />
      </button>
      <div className="dropdown-menu dropdown-menu-right">
        <Link className="dropdown-item" to="/student/user-info">
          ویرایش حساب کاربری
        </Link>
        <Link className="dropdown-item" to="/student/get_deposits">
          مجموع پرداختی ها
        </Link>
        <Link className="dropdown-item" to="/student/all-report-card">
          کارنامه ها
        </Link>
        <Link className="dropdown-item" to="/student/get-enrolled-course">
          دروس ثبت نام شده
        </Link>
        <Link className="dropdown-item" to="/student/get-all-assignment">
          لیست تکالیف
        </Link>
        <Logout />
      </div>
    </div>
  );
}
