import React, { useState, useEffect } from "react";
import Axios from "axios";
import { notificationAlert } from "../../../../../utils/shared";
import Textarea from "../../../shared/components/Textarea";
function UpdateRankSection() {
  const [rankTitle, setRankTitle] = useState("");
  const [rankText, setRankText] = useState("");
  const [rankImageTitle, setRankImageTitle] = useState("");

  const [disabledButton, setDisabledButton] = useState("");

  useEffect(() => {
    getRankSection();
    setDisabledButton(false);
  }, []);

  const getRankSection = () => {
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_HOME_GET_RANK_SECTION,
      method: "POST",
      withCredentials: true,
    })
      .then((res) => {
        try {
          // console.log(res.data.data);
          setRankTitle(res.data.data.rank_title);
          setRankText(res.data.data.rank_text);
          setRankImageTitle(res.data.data.rank_image_title);
        } catch (e) {
          // console.log(e);
        }
      })
      .catch((e) => {
        // console.log(e);
      });
  };

  const handleFormOnSubmit = (e) => {
    e.preventDefault();
    setDisabledButton(true);

    let data = new FormData();
    data.append("rank_title", rankTitle);
    data.append("rank_text", rankText);
    data.append("rank_image_title", rankImageTitle);

    // for (var key of data.entries()) {
    //   console.log(key[0] + ", " + key[1]);
    // }

    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_WEB_CONTROL_UPDATE_RANK_SECTION,
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
      })
      .catch((e) => {
        // console.log(e);
      })
      .finally(() => {
        setDisabledButton(false);
      });
  };

  return (
    <section className="form-wrapper has-icon wrapper">
      <h2 className="section-title">ویرایش اطلاعات رتبه بندی</h2>
      <form className="row" onSubmit={handleFormOnSubmit}>
        <div className="col-md-6 form-group">
          <label htmlFor="title">
            عنوان <i className="icon-user"></i>
          </label>
          <input
            className="form-control"
            type="text"
            name="sub_title"
            id="sub_title"
            value={rankTitle}
            placeholder="عنوان"
            onChange={(e) => {
              setRankTitle(e.target.value);
            }}
          />
        </div>

        <div className="col-md-6 form-group">
          <label htmlFor="title">
            عنوان عکس<i className="icon-user"></i>
          </label>
          <input
            className="form-control"
            type="text"
            name="btn_text"
            id="btn_text"
            value={rankImageTitle}
            placeholder="عنوان عکس"
            onChange={(e) => {
              setRankImageTitle(e.target.value);
            }}
          />
        </div>

        <div className="col-md-12 form-group">
          <Textarea
            className="form-control"
            setMessage={setRankText}
            message={rankText}
          ></Textarea>
        </div>

        <div className="col-12 col-md-12 form-group">
          <button
            type="submit"
            disabled={disabledButton}
            className="btn btn-success submit-category"
          >
            ویرایش اطلاعات
          </button>
        </div>
      </form>
    </section>
  );
}
export default UpdateRankSection;
