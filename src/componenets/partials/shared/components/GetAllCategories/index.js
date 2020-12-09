import React, { useState, useEffect } from "react";
import Axios from "axios";
function GetAllCategories({ ...props }) {
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    getAllCategories();
  }, []);

  //Get All Categories
  const getAllCategories = () => {
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_HOME_GET_ALL_CATEGORY,
      method: "POST",
      withCredentials: true,
    }).then((res) => {
      try {
        setCategoryList(res.data.data ? res.data.data : []);
      } catch (e) {
        // console.log(e);
      }
    });
  };

  return (
    <div className={`${props.col ? props.col : "col-md-6"}  form-group`}>
      {!props.col && (
        <label htmlFor="category_id">
          دسته بندی <i className="icon-map"></i>
        </label>
      )}

      <select
        name="category_id"
        id="category_id"
        className="form-control"
        onChange={(e) => {
          props.setCategoryId(e.target.value);
        }}
        value={props.categoryId}
      >
        <option value=""> انتخاب دسته</option>
        {/* <option value="DEFAULT">انتخاب کنید</option> */}
        {categoryList.length > 0 &&
          categoryList.map((item, index) => (
            <option
              key={index}
              value={item.id}
              // selected={props.categoryId === item.id ? "selected" : ""}
            >
              {item.title}
            </option>
          ))}
      </select>
    </div>
  );
}
export default GetAllCategories;
