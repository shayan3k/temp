import React, { useState, useEffect } from "react";
import { Multiselect } from "multiselect-react-dropdown";
import Axios from "axios";
function GetMultiSelectCategories({ ...props }) {
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

  const onSelect = (selectedList, selectedItem) => {
    props.setSelectedCategory(selectedList.map((item) => item.id));
  };

  const options = categoryList.map((item) => {
    const container = {};
    container.id = item.id;
    container.name = item.title;
    return container;
  });

  const selectedValues = props.categoryId.map((item) => {
    const container = {};
    let result = categoryList.filter((catItem) => catItem.id === item);
    container.id = item;
    result.map((item1) => (container.name = item1.title));
    return container;
  });

  return (
    <div className="col-md-6 form-group">
      <label htmlFor="category_id">
        دسته بندی<i className="icon-map"></i>
      </label>

      <Multiselect
        options={options} // Options to display in the dropdown
        selectedValues={selectedValues} // Preselected value to persist in dropdown
        onSelect={onSelect} // Function will trigger on select event
        onRemove={onSelect} // Function will trigger on remove event
        displayValue="name" // Property name to display in the dropdown options
        placeholder=""
      />
    </div>
  );
}
export default GetMultiSelectCategories;
