import React from "react";
import Logout from "../../../../../utils/Logout";

export default function ProfileDropdown(props) {
  // console.log(props);
  return (
    <>
      <div className="user btn-group">
        <button
          type="button"
          className="btn btn-empty dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span>{props.adminName}</span>
          <img src={props.adminImage} />
        </button>
        <div className="dropdown-menu dropdown-menu-right">
          {/* <Link className="dropdown-item" to="/student/studentprofile">
            ویرایش اطلاعات
          </Link> */}

          <Logout />
        </div>
      </div>
    </>
  );
}
