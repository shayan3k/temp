import React, { useState, useEffect } from "react";
import Axios from "axios";
import CompleteList from "../completeList.json";
import provinceList from "../province.json";

function GetProvinceAndCity({ ...props }) {
  const [cities, setCities] = useState([]);
  // const [provinceList, setProvinceList] = useState([]);

  // useEffect(() => {
  //   getAllProvince();
  // }, []);
  // const getAllProvince = () => {
  //   Axios({
  //     url:
  //       process.env.REACT_APP_BACKEND_URL +
  //       process.env.REACT_APP_GET_ALL_PROVINCE,
  //     method: "POST",
  //     withCredentials: true,
  //   }).then((res) => {
  //     try {
  //       // console.log(res.data.data);
  //       setProvinceList(res.data.data ? res.data.data : []);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   });
  // };

  // const getSpecificCity = (procince_id) => {
  //   let data = new FormData();
  //   data.append("province_id", procince_id);
  //   Axios({
  //     url:
  //       process.env.REACT_APP_BACKEND_URL +
  //       process.env.REACT_APP_GET_SPECIFIC_CITY,
  //     method: "POST",
  //     data,
  //     withCredentials: true,
  //   }).then((res) => {
  //     try {
  //       console.log(res.data.data);
  //       setCities(res.data.data ? res.data.data : []);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   });
  // };

  const handleProvinceOnChange = (e) => {
    e.preventDefault();

    var theProvince = e.target.options[e.target.selectedIndex].value;
    // getSpecificCity(theProvince);
    let tempArray = CompleteList.filter((item) => {
      return item.province === theProvince;
    });
    tempArray = tempArray.map((item) => {
      return item.state;
    });
    tempArray = [...new Set([...tempArray])];
    props.setProvince(theProvince);
    setCities(tempArray);
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
            <option key={index} value={item}>
              {item}
            </option>
          ))}

          {/* {provinceList.map((item, index) => (
            <option key={index} value={item.id}>
              {item.name}
            </option>
          ))} */}
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
          onChange={(e) => props.setCity(e.target.value)}
        >
          <option value="0">انتخاب کنید</option>
          {/* {cities.map((item, index) => (
            <option key={index} value={item.id}>
              {item.name}
            </option>
          ))} */}
          {cities.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
export default GetProvinceAndCity;
