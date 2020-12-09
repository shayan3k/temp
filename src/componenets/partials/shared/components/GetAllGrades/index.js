import React, { useState, useEffect } from "react";
import Axios from "axios";
function GetAllGrades({ ...props }) {
  const [gradeList, setGradeList] = useState([]);
  useEffect(() => {
    getAllGrades();
  }, []);

  //Get All Grades
  const getAllGrades = () => {
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_HOME_GET_ALL_GRADE,
      method: "POST",
      withCredentials: true,
    }).then((res) => {
      try {
        setGradeList(res.data.data ? res.data.data : []);
      } catch (e) {
        // console.log(e);
      }
    });
  };
  return (
    <div className={`${props.col ? props.col : "col-md-6"}  form-group`}>
      {!props.col && (
        <label htmlFor="grade">
          مقطع تحصیلی<i className="icon-badge"></i>
        </label>
      )}

      <select
        name="grade"
        id="grade"
        className="form-control"
        onChange={(e) => props.setGradeId(e.target.value)}
        value={props.gradeId}
      >
        <option value="">انتخاب مقطع تحصیلی</option>
        {/* <option value="DEFAULT">انتخاب مقطع تحصیلی</option> */}
        {gradeList.length > 0 &&
          gradeList.map((item, index) => (
            <option key={index} value={item.id}>
              {item.title}
            </option>
          ))}
      </select>
    </div>
  );
}
export default GetAllGrades;
