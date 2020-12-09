import React, { useState, useEffect } from "react";
import Axios from "axios";
function GetAllTeachers({ ...props }) {
  const [teacherList, setTeacherList] = useState([]);
  useEffect(() => {
    getAllTeachers();
  }, []);
  //Get All Teachers
  const getAllTeachers = () => {
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_HOME_GET_ALL_TEACHER_NO_PAGINATION,
      method: "POST",
      withCredentials: true,
    }).then((res) => {
      // console.log(res.data.data);
      try {
        setTeacherList(res.data.data.data ? res.data.data.data : []);
      } catch (e) {
        // console.log(e);
      }
    });
  };
  return (
    <div className={`${props.col ? props.col : "col-md-6"}  form-group`}>
      {!props.col && (
        <label htmlFor="teacher">
          استاد <i className="icon-user"></i>
        </label>
      )}
      <select
        name="teacher"
        id="teacher"
        className="form-control"
        onChange={(e) => {
          props.setTeacherId(e.target.value);
        }}
        value={props.teacherId}
      >
        <option value="">انتخاب استاد </option>
        {/* <option>انتخاب استاد </option> */}
        {teacherList.length > 0 &&
          teacherList.map((item, index) => (
            <option key={index} value={item._id}>
              {item.name} {item.lastname}
            </option>
          ))}
      </select>
    </div>
  );
}
export default GetAllTeachers;
