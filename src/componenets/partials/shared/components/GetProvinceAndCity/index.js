import React, { useState, useEffect } from "react";
import Axios from "axios";
// import CompleteList from "../completeList.json";
// import provinceList from "../province.json";

function GetProvinceAndCity({ ...props }) {
  console.log(props);

  const [cities, setCities] = useState([]);
  const [provinceList, setProvinceList] = useState([]);

  useEffect(() => {
    getAllProvince();
  }, []);

  useEffect(() => {
    getSpecificCity(props.province);
  }, [props.province, props.city]);

  const getAllProvince = () => {
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_GET_ALL_PROVINCE,
      method: "POST",
      withCredentials: true,
    }).then((res) => {
      try {
        // console.log(res.data.data);
        setProvinceList(res.data.data ? res.data.data : []);
      } catch (e) {
        // console.log(e);
      }
    });
  };

  const getSpecificCity = (province_id) => {
    // console.log(province_id);
    let data = new FormData();
    data.append("province_id", province_id);

    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_GET_SPECIFIC_CITY,
      method: "POST",
      data,
      withCredentials: true,
    }).then((res) => {
      try {
        console.log(res.data.data);
        setCities(res.data.data ? res.data.data : []);
      } catch (e) {
        // console.log(e);
      }
    });
  };

  const handleProvinceOnChange = (e) => {
    let theProvince = e.target.options[e.target.selectedIndex].value;
    // console.log(theProvince);
    props.setProvince(theProvince);
    getSpecificCity(theProvince);
  };

  const handleCityOnChange = (e) => {
    let theCity = e.target.options[e.target.selectedIndex].value;
    // console.log(theCity);
    props.setCity(theCity);
  };

  return (
    <>
      <div className="col-md-6 form-group">
        <label htmlFor="province">
          استان<i className="icon-map"></i>
        </label>
        <select
          name="province"
          id="province"
          className="form-control"
          onChange={handleProvinceOnChange}
          value={props.province}
        >
          <option defaultValue>انتخاب کنید</option>

          {provinceList.map((item, index) => (
            <option key={index} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      <div className="col-md-6  form-group">
        <label htmlFor="city">
          شهر<i className="icon-cursor"></i>
        </label>
        <select
          name="city"
          id="city"
          className="form-control"
          value={props.city}
          onChange={handleCityOnChange}
        >
          <option value="0">انتخاب کنید</option>
          {cities.map((item, index) => (
            <option key={index} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
export default GetProvinceAndCity;
