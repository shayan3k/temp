import React, { useState, useEffect } from "react";
import Axios from "axios";
import DangerouslySetInnerHTML from "../../../shared/components/DangerouslySetInnerHTML";

export default function Index(props) {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    getTheActiveAlerts();
  }, []);

  const getTheActiveAlerts = () => {
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_GET_ACTIVE_ALERTS,
      method: "POST",
      withCredentials: true,
    }).then((res) => {
      try {
        setAlerts(res.data?.data ? res.data.data : []);
      } catch (e) {
        // console.log(e);
      }
    });
  };

  return alerts.map((item, index) => {
    return (
      <div
        key={index}
        className={"alert alert-" + "danger" + " alert-dismissible fade show"}
        role="alert"
      >
        <h3> {item.title}</h3>
        <h5> {item.subtitle}</h5>
        <hr />
        <DangerouslySetInnerHTML message={item.message} />

        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    );
  });
}
