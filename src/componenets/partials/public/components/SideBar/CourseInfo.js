import React, { useState } from "react";
import { getPersianDate } from "../../../../../utils/shared";
import ModalPurchase from "../../../shared/components/ModalPurchase";
import NumberFormat from "react-number-format";

function CourseInfo({ ...props }) {
  const [modalState, setModalState] = useState(false);
  const theFirstCourseSession = props.courseSession.length
    ? props.courseSession[0]
    : null;
  // console.log("thislevel", props);
  return (
    <>
      <div className="widget">
        <div className="widget-body p-0">
          <ul className="timing-list">
            <li>
              <span className="lb">شروع جلسه</span>
              <span className="fb">
                {getPersianDate(props.courseSingle.start_time)}
              </span>
            </li>
            <li>
              <span className="lb">زمان جلسه</span>
              <span className="fb">{props.courseSingle.duration} دقیقه</span>
            </li>
            <li>
              <span className="lb">استاد</span>
              <span className="fb">
                {props.teacherInfo.name} {props.teacherInfo.lastname}
              </span>
            </li>
            <li>
              <span className="lb">پایه</span>
              <span className="fb">
                {props.gradeInfo && props.gradeInfo.title}
              </span>
            </li>
            <li>
              <span className="lb">تعداد جلسات</span>
              <span className="fb">
                {props.courseSingle && props.courseSingle.session_number}
              </span>
            </li>
            <li>
              <span className="lb">قیمت کل</span>
              {props.courseSingle.total_price === 0 ? (
                <span className="fb"> رایگان</span>
              ) : (
                <span className="fb">
                  <NumberFormat
                    value={props.courseSingle.total_price}
                    displayType={"text"}
                    thousandSeparator={true}
                    suffix={" تومان"}
                  />
                </span>
              )}
            </li>
            {/* {props.courseSingle.is_pay_all &&
            theFirstCourseSession &&
            !theFirstCourseSession?.video_url ? (
              <li>
                <span className="lb">خرید کل درس</span>
                <span className="fb text-center">
                  <button
                    className="btn btn-large btn-success px-5 py-3"
                    onClick={() => setModalState(true)}
                  >
                    خرید
                  </button>
                </span>
              </li>
            ) : (
              ""
            )} */}

            {props.isDataFeched &&
              (!props.enrollmentRecord ? (
                <li>
                  <span className="lb">خرید کل درس</span>
                  <span className="fb text-center">
                    <button
                      className="btn btn-success px-5 py-2"
                      onClick={() => setModalState(true)}
                    >
                      خرید
                    </button>
                  </span>
                </li>
              ) : (
                <li>
                  <span className="lb">خرید کل درس</span>
                  <span className="fb text-center">
                    <button
                      className="btn btn-success px-5 py-2"
                      disabled={true}
                    >
                      خریداری شده
                    </button>
                  </span>
                </li>
              ))}
          </ul>
        </div>
      </div>
      <ModalPurchase
        modalState={modalState}
        setModalState={setModalState}
        courseSession={theFirstCourseSession}
        course={props.courseSingle}
      />
    </>
  );
}
export default CourseInfo;
