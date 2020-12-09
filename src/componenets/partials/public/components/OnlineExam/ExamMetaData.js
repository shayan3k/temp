import React from "react";
export default function ExamMetaData(props) {
  return (
    <div className="text-color">
      <p>
        <b>
          {props.userInfo.name} {props.userInfo.lastname}
        </b>{" "}
        عزیز، برای شما در این آزمون آرزوی موفقیت میکنیم
      </p>
      <ul>
        <li>
          <i className="fas fa-mobile-alt"></i>
          شماره تماس شما:{" "}
          <b className="ltr-text">{props.userInfo.phone_number}</b>
        </li>
        <li>
          <i className="fas fa-book-reader"></i>
          عنوان امتحان : {props.examInfo.title}
        </li>
        <li>
          <i className="fas fa-book-reader"></i>
          درس : {props.courseInfo.title}
        </li>
        <li>
          <i className="fas fa-book-reader"></i>
          نوع امتحان : {props.examInfo.category}
        </li>

        <li>
          <i className="fas fa-school"></i>
          مدت زمان امتحان: <b>{props.examInfo.duration}</b> دقیقه
        </li>
        <li>
          <i className="fas fa-graduation-cap"></i>
          نمره امتحان: <b>{props.examInfo.total_point}</b> نمره
        </li>
        <li>
          <i className="fas fa-award"></i>
          حداقل نمره قبولی: <b>{props.examInfo.pass_point}</b>
        </li>
        <li>
          <i className="fas fa-award"></i>
          نمره منفی :{" "}
          <b>
            {props.examInfo.negative_type === "with-negative"
              ? "دارد"
              : "ندارد"}
          </b>
        </li>
      </ul>
    </div>
  );
}
