import React, { useState } from "react";
import Axios from "axios";
import Modal from "../../../shared/components/Modal";
import Textarea from "../../../shared/components/Textarea";

export default function Index(props) {
  const [disabledBtn, setDisabledButton] = useState(false);

  const handleFormSubmitBtn = (e) => {
    e.preventDefault();

    setDisabledButton(true);
    let data = new FormData();

    data.append("id", props.id);
    data.append("title", props.title);
    data.append("subtitle", props.subtitle);
    data.append("status", props.status);
    data.append("message", props.message);
    //For debug only
    // for (var key of data.entries()) {
    //   console.log(key[0] + ", " + key[1]);
    // }
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_UPDATE_SINGLE_ALERT,
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      method: "POST",
      data: data,
    })
      .then((res) => {
        props.setErrorStatus(res.data.success ? "success" : "danger");
        props.setErrorMessage(res.data.message);
        props.setShow(true);
        //close the model if update is successful
        if (res.data.success) props.setModalState(false);
        //Net really a good practise , try an alternative
        props.updateListComponent();
      })
      .finally(() => {
        setDisabledButton(false);
      });
  };

  return (
    <Modal show={props.modalState} showModalSet={props.setModalState}>
      <div className="modal-lg modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              ادیت اطلاعیه
            </h5>
            <button
              type="button"
              className="close m-0 p-0 mr-auto"
              data-
              dismiss="modal"
              aria-label="Close"
              onClick={() => {
                props.setModalState(false);
              }}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form onSubmit={handleFormSubmitBtn}>
            <div className="modal-body row">
              <div className="col-12 my-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="تایتل اطلاعیه"
                  onChange={(e) => props.setTitle(e.target.value)}
                  value={props.title}
                />
              </div>

              <div className="col-12 my-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="سابتایتل اطلاعیه"
                  onChange={(e) => props.setSubtitle(e.target.value)}
                  value={props.subtitle}
                />
              </div>

              <div className="col-12 my-2">
                <select
                  className="form-control"
                  onChange={(e) => props.setStatus(e.target.value)}
                  defaultValue={props.status}
                >
                  <option value="warning">انتخاب کنید</option>
                  <option value="warning">warning</option>
                  <option value="danger">danger</option>
                  <option value="primary">primary</option>
                  <option value="secondary">secondary</option>
                  <option value="dark">dark</option>
                  <option value="success">success</option>
                  <option value="light">light</option>
                </select>
              </div>

              <div className="col-12 my-2">
                <Textarea
                  className="form-control"
                  setMessage={props.setMessage}
                  message={props.message}
                ></Textarea>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-
                dismiss="modal"
                onClick={() => {
                  props.setModalState(false);
                }}
              >
                خروج
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={disabledBtn}
                id="custom-button-update-alert-submit"
              >
                ثبت تغییرات
              </button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
}
