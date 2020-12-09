import React, { useState, useEffect } from "react";
import Axios from "axios";
import { withRouter, Redirect } from "react-router-dom";
import { notificationAlert } from "../../../../../utils/shared";
function CreateNewProvince({ ...props }) {
  const provinceId = props.match.params.id;

  const [name, setName] = useState("");

  const [disabledButton, setDisabledButton] = useState(false);
  const [isRedirect, setIsRedirect] = useState(false);
  const [isRedirect404, setIsRedirect404] = useState(false);

  useEffect(() => {
    if (provinceId) {
      getSingleProvince();
    }
  }, []);

  const getSingleProvince = () => {
    let data = new FormData();
    if (provinceId) {
      data.append("id", provinceId);
    }
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_WEB_CONTROL_GET_SINGLE_PROVINCE,
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
      })
      .catch((e) => {
        // console.log(e);
      });
  };

  const handleFormOnSubmit = (e) => {
    e.preventDefault();
    setDisabledButton(true);
    let data = new FormData();
    if (provinceId) {
      data.append("id", provinceId);
    }

    data.append("name", name);

    // for (var key of data.entries()) {
    //   console.log(key[0] + ", " + key[1]);
    // }

    const myUrl = provinceId
      ? process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_WEB_CONTROL_UPDATE_SINGLE_PROVINCE
      : process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_WEB_CONTROL_CRAETE_NEW_PROVINCE;

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

  if (isRedirect) return <Redirect to="/admin/get-all-province" />;

  return (
    <section className="form-wrapper has-icon wrapper">
      <h2 className="section-title">
        {provinceId ? "ویرایش استان" : "افزودن استان"}
      </h2>
      <form className="row" onSubmit={handleFormOnSubmit}>
        <div className="col-12 col-sm-9 col-md-6 mb-3 form-group">
          <label htmlFor="name">
            نام استان <i className="icon-user"></i>
          </label>
          <input
            className="form-control"
            type="text"
            name="name"
            id="name"
            value={name}
            placeholder="نام استان را بنویسید"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div className="col-12 form-group">
          <button
            type="submit"
            disabled={disabledButton}
            className="btn btn-success submit-teacher"
          >
            {provinceId ? "ویرایش استان" : "ثبت استان"}
          </button>
        </div>
      </form>
    </section>
  );
}
export default withRouter(CreateNewProvince);
