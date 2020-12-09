import React, { useState, useEffect } from "react";
import DangerouslySetInnerHTML from "../../../shared/components/DangerouslySetInnerHTML";

function TeacherList({ ...props }) {
  const [teacherInfo, setTeacherInfo] = useState({
    image: "default.png",
  });

  useEffect(() => {
    if (props.teacherInfo?.image) setTeacherInfo(props.teacherInfo);
  }, [props]);

  return (
    <div className="teachers mb-5">
      <h3 className="box-title">استاد این درس</h3>
      <ul>
        <li>
          <div className="image">
            <img
              src={
                process.env.REACT_APP_IMAGE_URL +
                "/" +
                process.env.REACT_APP_ADMIN_TEACHER_IMAGE_PATH +
                teacherInfo.image
              }
              alt={teacherInfo.lastname}
              title={teacherInfo.lastname}
            />
          </div>
          <div className="content">
            <h4 className="title">
              {teacherInfo.name} {teacherInfo.lastname}
            </h4>
            <span className="education">{teacherInfo.diploma}</span>

            <DangerouslySetInnerHTML message={teacherInfo.cv} />
          </div>
        </li>
      </ul>
    </div>
  );
}

export default TeacherList;
