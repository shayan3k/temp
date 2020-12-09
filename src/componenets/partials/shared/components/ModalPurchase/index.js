import React, { useState } from "react";
import Axios from "axios";
import Modal from "../Modal";
import { notificationAlert } from "../../../../../utils/shared";
import { useRecoilState } from "recoil";
import { TriggerSingleCourseRefresh } from "../../../../../services/Recoils";
import { getPersianDate2 } from "../../../../../utils/shared";
import NumberFormat from "react-number-format";

export default function Index(props) {
  const [disabledButton, setDisabledButton] = useState(false);

  const [tabState, setTabState] = useState(false);

  const [
    triggerSingleCourseRefresh,
    setTriggerSingleCourseRefresh,
  ] = useRecoilState(TriggerSingleCourseRefresh);

  var today = new Date();

  const handleFormWithInstallmentSubmitBtn = (e) => {
    e.preventDefault();
    setDisabledButton(true);

    let data = new FormData();

    data.append("id", props.course._id);

    // Just for debug
    for (var key of data.entries()) {
      console.log(key[0] + ", " + key[1]);
    }
    console.log("with installment");
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_STUDENT_ENROL_WITH_INSTALLMENT,
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      method: "POST",
      data: data,
    })
      .then((res) => {
        //close the model if update is successful
        // console.log(res.data);
        if (res.data.success) props.setModalState(false);

        notificationAlert(
          res.data.success ? "انجام شد!" : "خطا !",
          res.data.message,
          res.data.success ? "success" : "error"
        );
        if (res.data.err) setDisabledButton(false);

        console.log(res.data);
        //if peyment needed, then redirect otherwise rerender
        if (res.data.success && res.data.data?.url) {
          window.location.href = res.data.data.url;
        } else setTriggerSingleCourseRefresh(!triggerSingleCourseRefresh);
      })
      .catch((e) => console.log(e.message))
      .finally(() => {});
  };

  const handleFormWithoutInstallmentSubmitBtn = (e) => {
    e.preventDefault();
    setDisabledButton(true);

    let data = new FormData();

    data.append("id", props.course._id);

    // Just for debug
    for (var key of data.entries()) {
      console.log(key[0] + ", " + key[1]);
    }
    console.log("without installment");
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_STUDENT_ENROL_WITHOUT_INSTALLMENT,
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      method: "POST",
      data: data,
    })
      .then((res) => {
        //close the model if update is successful
        // console.log(res.data);
        if (res.data.success) props.setModalState(false);

        notificationAlert(
          res.data.success ? "انجام شد!" : "خطا !",
          res.data.message,
          res.data.success ? "success" : "error"
        );
        if (res.data.err) setDisabledButton(false);
        console.log(res.data);
        //if peyment needed, then redirect otherwise rerender
        if (res.data.success && res.data.data?.url) {
          window.location.href = res.data.data.url;
        } else setTriggerSingleCourseRefresh(!triggerSingleCourseRefresh);
      })
      .catch((e) => console.log(e.message))
      .finally(() => {});
  };

  return (
    <Modal show={props.modalState} showModalSet={props.setModalState}>
      <div className="modal-lg modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {`خرید درس - ${props.course?.title}`}
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
              disabled={disabledButton}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="tab_container">
            <div className="d-flex justify-content-center align-items-center mt-3">
              <div className="custom-control custom-radio mx-2 mx-md-3">
                <input
                  type="radio"
                  name="tabs"
                  className="custom-control-input"
                  id="tab1"
                  checked={tabState ? false : true}
                  onChange={() => {
                    setTabState(false);
                  }}
                />
                <label className="custom-control-label" htmlFor="tab1">
                  پرداخت یکجا
                </label>
              </div>

              <div className="custom-control custom-radio mx-2 mx-md-3">
                <input
                  type="radio"
                  name="tabs"
                  className="custom-control-input"
                  id="tab2"
                  checked={tabState ? true : false}
                  onClick={() => {
                    setTabState(true);
                  }}
                  disabled={
                    props.course?.installment_count === 0 &&
                    props.course?.installment_first === 0 &&
                    props.course?.installment_duration === 0
                  }
                />
                <label className="custom-control-label" htmlFor="tab2">
                  پرداخت اقساطی
                </label>
              </div>
            </div>

            {tabState ? (
              <div>
                <form onSubmit={handleFormWithInstallmentSubmitBtn}>
                  <div className="modal-body p-4 p-md-5">
                    <table className="table table-success table-striped">
                      <thead>
                        <tr>
                          <th>نحوه پرداخت</th>
                          <th>نام درس</th>
                          <th>مبلغ</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>پرداخت اقساطی</td>
                          <td>{props.course?.title}</td>
                          <td>
                            مبلغ پیش پرداخت:{" "}
                            <NumberFormat
                              value={
                                (props.course?.total_price *
                                  props.course?.installment_first) /
                                100
                              }
                              displayType={"text"}
                              thousandSeparator={true}
                              suffix={" تومان"}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td>
                            تعداد اقساط: {props.course?.installment_count}
                          </td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td>
                            مبلغ باقی مانده:{" "}
                            <NumberFormat
                              value={
                                props.course?.total_price -
                                (props.course?.total_price *
                                  props.course?.installment_first) /
                                  100
                              }
                              displayType={"text"}
                              thousandSeparator={true}
                              suffix={" تومان"}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td>
                            مدت زمان بین اقساط:{" "}
                            {props.course?.installment_duration} (روز)
                          </td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td>
                            تاریخ قسط بعدی:{" "}
                            {getPersianDate2(
                              today.setDate(
                                today.getDate() +
                                  props.course?.installment_duration
                              )
                            )}
                          </td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td>
                            مبلغ کل:{" "}
                            <b>
                              <NumberFormat
                                value={props.course?.total_price}
                                displayType={"text"}
                                thousandSeparator={true}
                                suffix={" تومان"}
                              />
                            </b>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    {/* <h2>پرداخت با اقساط</h2>
                    <h3>نام درس: {props.course?.title}</h3>
                    <h4>
                      مبلغ کل: {props.course?.total_price}
                      (تومان)
                    </h4>

                    <h4>
                      مبلغ پیش پرداخت:{" "}
                      {(props.course?.total_price *
                        props.course?.installment_first) /
                        100}
                      (تومان)
                    </h4>

                    <h4>تعداد اقساط: {props.course?.installment_count}</h4>
                    <h4>
                      مبلغ باقی مانده:{" "}
                      {props.course?.total_price -
                        (props.course?.total_price *
                          props.course?.installment_first) /
                          100}
                      (تومان)
                    </h4>

                    <h4>
                      مدت زمان بین اقساط: {props.course?.installment_duration}
                      (روز)
                    </h4>

                    <h4>
                      تاریخ قسط بعدی:{" "}
                      {getPersianDate2(
                        today.setDate(
                          today.getDate() + props.course?.installment_duration
                        )
                      )}
                    </h4> */}

                    <hr />
                    <small>
                      توجه داشته باشید اگر موجودی کیف پول شما کم تر از مقدار
                      مبلغ پرداختی باشد, تفاوتش را پرداخت خواهید کرد
                    </small>
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
                      disabled={disabledButton}
                    >
                      لغو درخواست
                    </button>
                    <button
                      type="submit"
                      className="btn btn-success px-4"
                      id="custom-button-update-user-submit"
                      disabled={disabledButton}
                    >
                      ادامه
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div>
                <form onSubmit={handleFormWithoutInstallmentSubmitBtn}>
                  <div className="modal-body p-4 p-md-5">
                    <table className="table table-success table-striped">
                      <thead>
                        <tr>
                          <th>نحوه پرداخت</th>
                          <th>نام درس</th>
                          <th>مبلغ</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>پرداخت کلی</td>
                          <td>{props.course?.title}</td>
                          <td>
                            <NumberFormat
                              value={props.course?.total_price}
                              displayType={"text"}
                              thousandSeparator={true}
                              suffix={" تومان"}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <hr />
                    <small>
                      توجه داشته باشید اگر موجودی کیف پول شما کم تر از مقدار
                      مبلغ پرداختی باشد, تفاوتش را پرداخت خواهید کرد
                    </small>
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
                      disabled={disabledButton}
                    >
                      لغو درخواست
                    </button>
                    <button
                      type="submit"
                      className="btn btn-success px-4"
                      id="custom-button-update-user-submit"
                      disabled={disabledButton}
                    >
                      ادامه
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
}
