import React, { useState, useEffect } from "react";
import Axios from "axios";
function GetAllProvince({ ...props }) {
  const [provinceList, setProvinceList] = useState([]);
  useEffect(() => {
    getAllProvince();
  }, []);
  //Get All Province
  const getAllProvince = () => {
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_GET_ALL_PROVINCE,
      method: "POST",
      withCredentials: true,
    }).then((res) => {
      try {
        setProvinceList(res.data.data ? res.data.data : []);
      } catch (e) {
        // console.log(e);
      }
    });
  };
  return (
    <div className={`${props.col ? props.col : "col-md-6"}  form-group`}>
      {!props.col && (
        <label htmlFor="province">
          استان <i className="icon-user"></i>
        </label>
      )}
      <select
        name="province"
        id="province"
        className="form-control"
        onChange={(e) => props.setProvinceId(e.target.value)}
        value={props.provinceId}
      >
        <option value="">انتخاب استان </option>
        {provinceList.length > 0 &&
          provinceList.map((item, index) => (
            <option key={index} value={item.id}>
              {item.name} {item.lastname}
            </option>
          ))}
      </select>
    </div>
  );
}
export default GetAllProvince;
