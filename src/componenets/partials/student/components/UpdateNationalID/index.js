import React, { useState, useEffect, useRef } from "react";
import "../../../../../assets/student/css/national_code.scss";
import Axios from "axios";
import NewAlert from "../../../shared/components/Alert/NewAlert";
import { notificationAlert } from "../../../../../utils/shared";
import DropZoneUploaderSingle from "../../../shared/components/DropZoneUploaderSingle";

function NationalCode({ ...props }) {
  const inputFileRef = useRef(null);
  const [national_id, setNational_Id] = useState("");
  const [isNationalIDVerified, setIsNationalIDVerified] = useState(false);
  const [image, setImage] = useState("default.png");
  const [file, setFile] = useState("");
  const [disabledButton, setDisabledButton] = useState(false);

  const updateListComponent = () => {
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_GET_NATIONAL_ID,
      withCredentials: true,
      method: "POST",
    }).then((res) => {
      if (res.data.data) {
        console.log(res.data.data);
        try {
          setNational_Id(res.data.data.national_id);
          setImage(res.data.data.image);
          setIsNationalIDVerified(res.data.data.is_verified);
        } catch (e) {
          console.log(e.message);
        }
      }
    });
  };

  useEffect(() => {
    updateListComponent();
  }, []);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setDisabledButton(true);

    let data = new FormData();

    data.append("national_id", national_id);
    if (file) data.append("image", file);

    // for (var key of data.entries()) {
    //   console.log(key[0] + ", " + key[1]);
    // }

    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_UPDATE_NATIONAL_ID,
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      method: "POST",
      data,
    })
      .then((res) => {
        notificationAlert(
          res.data.success === false ? "خطا !" : "انجام شد!",
          res.data.message,
          res.data.success === false ? "error" : "success"
        );
        updateListComponent();
        setFile("");
      })
      .finally(() => {
        setDisabledButton(false);
      });
  };

  return (
    <div className="container-fluid">
      <NewAlert status={isNationalIDVerified ? "success" : "warning"}>
        {isNationalIDVerified
          ? "شماره و کارت ملی ارائه شده تایید شده است."
          : "شماره و کارت ملی ارائه شده تایید نشده است."}
      </NewAlert>

      <section className="form-wrapper pb-4 pb-md-5">
        <form className="row align-items-center" onSubmit={handleSubmitForm}>
          <div className="col-md-6">
            <span className="d-block mb-2">
              شماره ملی خود را وارد کرده، سپس عکس اسکن شده آن را در باکس بقل
              آپلود کنید
            </span>
            <div className="form-group mb-3">
              <input
                className="form-control p-3"
                type="text"
                name="national_id"
                id="national_id"
                placeholder="شماره ملی ..."
                maxLength="10"
                value={national_id}
                onChange={(e) => setNational_Id(e.target.value)}
                required
              />
            </div>
            <div className="form-group mb-0">
              <button
                type="submit"
                className="btn btn-success w-100 pt-2 pb-2"
                data-ripple="ripple"
                id="custom-button-national-submit"
                disabled={disabledButton}
              >
                ثبت شماره ملی
              </button>
            </div>
          </div>

          <div className="col-md-6">
            <label htmlFor="avatar">آپلود عکس</label>
            <DropZoneUploaderSingle
              file={file}
              setFile={setFile}
              prevImageUrl={
                process.env.REACT_APP_IMAGE_URL +
                "/" +
                process.env.REACT_APP_USER_NATIONAL_ID_PATH +
                image
              }
            />
          </div>
        </form>
      </section>
    </div>
  );
}

export default NationalCode;
