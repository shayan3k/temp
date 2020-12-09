import React, { useState, useEffect } from "react";
import "../../../../../assets/student/css/link.scss";
import Axios from "axios";

function Link() {
  const [reference_link, setReference_link] = useState("");

  useEffect(() => {
    updateListComponent();
  }, []);

  const updateListComponent = async () => {
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_REFERENCE_LINK,
      withCredentials: true,
      method: "POST",
    }).then((res) => {
      try {
        setReference_link(res.data.data);
      } catch (e) { }
    });
  };

  const handleCopyBtnOnClick = () => {
    navigator.clipboard.writeText(reference_link);
  };
  return (
    <section className="form-wrapper py-5">
      <h2 className="section-title mb-3">لینک معرفی شما برای دوستانتان</h2>
      <div className="row">
        <div className="col-7 col-md-8 pl-1">
          <input
            type="text"
            className="form-control text-left"
            value={reference_link}
            id="reference_link"
            readOnly
          />
        </div>
        <div className="col-5 col-md-4 pr-1">
          <button
            className="btn btn-dark w-100 py-3"
            onClick={handleCopyBtnOnClick}
          >
            کپی کنید
          </button>
        </div>
      </div>
    </section>
  );
}

export default Link;
