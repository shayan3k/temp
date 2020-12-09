import React from "react";
import { Link } from "react-router-dom";
import DangerouslySetInnerHTML from "../../../shared/components/DangerouslySetInnerHTML";

function CourseItem({ ...props }) {
  return (
    <div className={props.col}>
      <div className="course-item">
        <div className="image-box">
          <img
            src={props.courseImage}
            alt={props.courseTitle}
            title={props.courseTitle}
          />
        </div>
        <div className="content-box">
          <h2 className="title">{props.courseTitle}</h2>
          <ul className="desc-list">
            <li>
              <i className="fa fa-graduation-cap"></i>
              {props.courseGrade}
            </li>

            <li>
              <i className="fa fa-calendar"></i>
              {props.courseDate}
            </li>

            <li>
              <i className="fa fa-user"></i>
              {props.courseTeacher}
            </li>
          </ul>
          <DangerouslySetInnerHTML
            message={props.courseDescription}
            substring={100}
          />

          {props.categories && (
            <p>
              <i className="fa fa-th-list"></i> دسته ها: {props.categories}
            </p>
          )}
          <div className="text-center">
            {!props.DeleteItem && (
              <Link
                to={`/single-course/${props.id}`}
                className="btn btn-primary"
              >
                نمایش جزئیات
              </Link>
            )}
            {props.DeleteItem && (
              <>
                <Link
                  to={`/admin/update-course/${props.id}`}
                  className="btn btn-secondary hint--top mx-1 mb-1"
                  aria-label="ویرایش"
                >
                  ویرایش
                </Link>
                <button
                  className="btn btn-danger hint--top mx-1 mb-1"
                  aria-label="حذف"
                  onClick={(e) => {
                    props.DeleteItem(props.id);
                  }}
                >
                  حذف
                </button>
              </>
            )}

            {props.showExams && (
              <Link
                to={`/admin/get-course-exam/${props.id}`}
                className="btn btn-primary hint--top mx-1 mb-1"
                aria-label="آزمون ها"
              >
                آزمون ها
              </Link>
            )}

            {props.showSessons && (
              <Link
                to={`/admin/get-single-course/${props.id}`}
                className="btn btn-warning hint--top mx-1 mb-1"
                aria-label="جلسه ها"
              >
                جلسه ها
              </Link>
            )}

            {props.showAssignment && (
              <Link
                to={`/admin/get-course-assignment/${props.id}`}
                className="btn btn-success hint--top mx-1 mb-1"
                aria-label="تکالیف ارسالی"
              >
                تکالیف ارسالی
              </Link>
            )}

            {props.showReportCard && (
              <Link
                to={`/admin/get-course-record/${props.id}`}
                className="btn btn-info hint--top mx-1 mb-1"
                aria-label="کارنامه ها"
              >
                کارنامه ها
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseItem;
