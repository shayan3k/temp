import React, { useState, useEffect } from "react";
import Axios from "axios";
function GetAllCourse({ ...props }) {
  const [courseList, setCourseList] = useState([]);
  useEffect(() => {
    getAllCourse();
  }, []);

  //Get All Course
  const getAllCourse = () => {
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_HOME_GET_ALL_COURSE,
      method: "POST",
      withCredentials: true,
    }).then((res) => {
      try {
        // console.log(res.data.data);
        setCourseList(res.data.data ? res.data.data : []);
      } catch (e) {
        // console.log(e);
      }
    });
  };

  return (
    <div className={`${props.col ? props.col : "col-md-6"}  form-group`}>
      {!props.col && (
        <label htmlFor="course">
          درس <i className="icon-map"></i>
        </label>
      )}

      <select
        name="course"
        id="course"
        className="form-control"
        onChange={(e) => props.setCourseId(e.target.value)}
        value={props.courseId}
        disabled={props.disabled}
      >
        {/* <option value="DEFAULT"> انتخاب درس</option> */}
        <option value=""> انتخاب درس</option>
        {courseList.length > 0 &&
          courseList.map((item, index) => (
            <option key={index} value={item._id}>
              {item.title}
            </option>
          ))}
      </select>
    </div>
  );
}
export default GetAllCourse;
