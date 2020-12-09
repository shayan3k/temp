import React from "react";

import "../../../../../assets/public/css/pages/_courses.scss";
import Pagination from "../../../shared/components/Pagination";
import CourseItem from "./CourseItem";
import { getPersianDate2 } from "../../../../../utils/shared";

function CoursesList({ ...props }) {
  return (
    <section className="courses-wrapper wrapper">
      {/* <h2 className="title_up">{props.sectionTitle}</h2> */}

      <div className="container">
        {props.isLoaded ? (
          props.courseList.length === 0 && (
            <div className="alert alert-danger" role="alert">
              متاسفانه درسی یافت نشد!
            </div>
          )
        ) : (
          <div className="alert alert-info" role="alert">
            در حال بارگذاری...
          </div>
        )}
        <div className="row">
          {props.courseList &&
            props.courseList.map((item, index) => (
              <CourseItem
                key={index}
                col="col-md-6 col-lg-4"
                id={item._id}
                courseTitle={item.title}
                courseDate={getPersianDate2(item.createdAt)}
                courseDescription={item.description.substring(0, 100) + "..."}
                courseGrade={item.grade_id.title}
                courseTeacher={`${item.teacher_id.name} ${item.teacher_id.lastname}`}
                courseImage={
                  `${process.env.REACT_APP_IMAGE_URL}/${process.env.REACT_APP_ADMIN_COURSE_IMAGE_PATH}` +
                  item.image
                }
              />
            ))}
        </div>
      </div>

      {props.isLoaded && (
        <nav className="pt-5" aria-label="...">
          <Pagination
            class_name="justify-content-center"
            hasMore={props.hasMore}
            setHasMore={props.setHasMore}
            itemCount={props.itemCount}
            pageCount={props.pageCount}
            currentPage={props.currentPage}
            setCurrentPage={props.setCurrentPage}
          />
        </nav>
      )}
    </section>
  );
}

export default CoursesList;
