import React from "react";
import PdfReader from "../../../student/components/PdfReader";
// import aks01 from "../../../../../assets/public/images/onlineExam/01.jpg";
export default function Exams(props) {
  return (
    <>
      <h2>پرسش نامه</h2>
      <div className="text-center">
        <PdfReader
          file={
            process.env.REACT_APP_IMAGE_URL +
            "/" +
            process.env.REACT_APP_ADMIN_COURSE_EXAM_QUESTION +
            props.examInfo.question
          }
        />
      </div>
    </>
  );
}
