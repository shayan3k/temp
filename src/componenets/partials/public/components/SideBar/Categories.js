import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
function Categories() {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = () => {
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_HOME_GET_ALL_CATEGORY,
      method: "POST",
      withCredentials: true,
    })
      .then((res) => {
        try {
          // console.log(res.data.data);
          setCategoryList(res.data.data);
        } catch (e) {
          // console.log(e);
        }
      })
      .catch((e) => {
        // console.log(e);
      });
  };
  return (
    <div className="widget">
      <div className="widget-title">دسته بندی جلسه ها</div>
      <div className="widget-body">
        <ul className="categorys-list">
          {categoryList.map((item, index) => (
            <li key={index}>
              <Link
                to={{
                  pathname: "/courses",
                  categoryId: item.id,
                }}
              >
                {item.title}
                {/* <span className="count">12</span> */}
              </Link>
            </li>
          ))}

          {/* <li>
            {categoryList.map((item, index) => (
              <span key={index} className="badge badge-primary p-1 mx-1 ">
                {item.title}
              </span>
            ))}
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default Categories;
