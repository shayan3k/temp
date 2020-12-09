import React, { useState, useEffect } from "react";
import Axios from "axios";
function GetAllExam({ ...props }) {
  const [examList, setExamList] = useState([]);
  useEffect(() => {
    getAllExam();
  }, []);

  //Get All Exam
  const getAllExam = () => {
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_HOME_GET_ALL_EXAM,
      method: "POST",
      withCredentials: true,
    }).then((res) => {
      try {
        // console.log(res.data.data);
        setExamList(res.data.data ? res.data.data : []);
      } catch (e) {
        // console.log(e);
      }
    });
  };

  return (
    <div className="col-md-6 form-group">
      <label htmlFor="exam">
        امتحان<i className="icon-map"></i>
      </label>

      <select
        name="exam"
        id="exam"
        className="form-control"
        onChange={(e) => props.setExamId(e.target.value)}
        value={props.examId}
        disabled={props.disabled}
      >
        <option value="DEFAULT"> انتخاب کنید</option>
        {examList.length > 0 &&
          examList.map((item, index) => (
            <option
              key={index}
              value={item.id}
              // selected={props.examId === item.id ? "selected" : ""}
            >
              {item.title}
            </option>
          ))}
      </select>
    </div>
  );
}
export default GetAllExam;
