import React, { useState, useEffect } from "react";
import Axios from "axios";
import { withRouter, Redirect } from "react-router-dom";
import { notificationAlert } from "../../../../../utils/shared";
import GetAllProvince from "../../../shared/components/GetAllProvince";
function CreateNewCity({ ...props }) {
  const cityId = props.match.params.id;

  const [name, setName] = useState("");
  const [provinceId, setProvinceId] = useState("");

  const [disabledButton, setDisabledButton] = useState(false);
  const [isRedirect, setIsRedirect] = useState(false);
  const [isRedirect404, setIsRedirect404] = useState(false);

  useEffect(() => {
    if (cityId) {
      getSingleCity();
    }
  }, []);

  const getSingleCity = () => {
    let data = new FormData();
    if (cityId) {
      data.append("id", cityId);
    }
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_WEB_CONTROL_GET_SINGLE_CITY,
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      method: "POST",
      data,
    })
      .then((res) => {
        if (res.data.err === true) {
          setIsRedirect404(true);
        }
        setName(res.data.data.name);
        setProvinceId(res.data.data.province_id);
      })
      .catch((e) => {
        // console.log(e);
      });
  };

  const handleFormOnSubmit = (e) => {
    e.preventDefault();
    setDisabledButton(true);
    let data = new FormData();
    if (cityId) {
      data.append("id", cityId);
    }

    data.append("name", name);
    data.append("province_id", provinceId);

    // for (var key of data.entries()) {
    //   console.log(key[0] + ", " + key[1]);
    // }

    const myUrl = cityId
      ? process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_WEB_CONTROL_UPDATE_SINGLE_CITY
      : process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_WEB_CONTROL_CREATE_NEW_CITY;

    Axios({
      url: myUrl,
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      method: "POST",
      data,
    })
      .then((res) => {
        // console.log(res.data);
        notificationAlert(
          res.data.success === false ? "خطا !" : "انجام شد!",
          res.data.message,
          res.data.success === false ? "error" : "success"
        );
        if (res.data.success === true) setIsRedirect(true);
      })
      .catch((e) => {
        // console.log(e);
      })
      .finally(() => {
        setDisabledButton(false);
      });
  };

  if (isRedirect404) return <Redirect to="/404" />;

  if (isRedirect) return <Redirect to="/admin/get-all-city" />;

  return (
    <section className="form-wrapper has-icon wrapper">
      <h2 className="section-title">{cityId ? "ویرایش شهر" : "افزودن شهر"}</h2>
      <form className="row" onSubmit={handleFormOnSubmit}>
        <div className="col-md-6 form-group">
          <label htmlFor="name">
            نام شهر <i className="icon-user"></i>
          </label>
          <input
            className="form-control"
            type="text"
            name="name"
            id="name"
            value={name}
            placeholder="نام شهر"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <GetAllProvince provinceId={provinceId} setProvinceId={setProvinceId} />

        <div className="col-12 col-md-12 form-group">
          <button
            type="submit"
            disabled={disabledButton}
            className="btn btn-success py-3 px-4 submit-teacher"
          >
            {cityId ? "ویرایش شهر" : "ثبت شهر"}
          </button>
        </div>
      </form>
    </section>
  );
}
export default withRouter(CreateNewCity);
