import React from "react";
import "../../../../../assets/public/css/pages/_coursesFilter.scss";
import GetAllGrades from "../../../shared/components/GetAllGrades";
import GetAllTeachers from "../../../shared/components/GetAllTeachers";
import GetAllCategories from "../../../shared/components/GetAllCategories";

export default function CoursesFilter({ ...props }) {
  return (
    <nav className="filter-navigation">
      <div className="container">
        <div className="filter-box">
          <div className="row">
            <div className="col-sm-6 col-md-5">
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  name="title"
                  id="title"
                  value={props.title}
                  onChange={(e) => {
                    props.setTitle(e.target.value);
                    props.handleFilter();
                  }}
                  placeholder="جستجو..."
                />
              </div>
            </div>

            <GetAllGrades
              gradeId={props.gradeId}
              setGradeId={props.setGradeId}
              col="col-sm-6 col-md-3"
            />
            <GetAllTeachers
              teacherId={props.teacherId}
              setTeacherId={props.setTeacherId}
              col="col-sm-6 col-md-2"
            />

            <GetAllCategories
              categoryId={props.categoryId}
              setCategoryId={props.setCategoryId}
              col="col-sm-6 col-md-2"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
