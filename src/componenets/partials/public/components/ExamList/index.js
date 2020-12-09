import React from "react";
import { withRouter } from "react-router-dom";
import ExamRowItems from "./ExamRowItems";

function ExamList(props) {
  return (
    <div className="curriculum-box">
      {props.courseExamList.length > 0 && (
        <>
          <h5 className="title"> عنوان امتحان</h5>
          <div className="accordition">
            {props.courseExamList.map(
              (item, index) =>
                item.is_active === true && (
                  <ExamRowItems
                    key={index}
                    title={item.title}
                    category={item.category}
                    duration={item.duration}
                    start_time={item.start_time}
                    duration={item.duration}
                    id={item._id}
                  />
                )
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default withRouter(ExamList);
