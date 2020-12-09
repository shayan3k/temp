import React, { useState, useEffect } from "react";
import Axios from "axios";
import DatePicker from "../../../shared/components/DatePicker";
import { withRouter, Redirect } from "react-router-dom";
import { notificationAlert } from "../../../../../utils/shared";
import GetAllCourse from "../../../shared/components/GetAllCourse";
import DropZonePDFUploader from "../../../shared/components/DropZonePDFUploader";

function CreateCourseExam({ ...props }) {
  const examIId = props.match.params.id;

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [courseId, setCourseId] = useState(
    props.match.params.courseId ? props.match.params.courseId : ""
  );
  const [duration, setDuration] = useState("");
  const [passPoint, setPassPoint] = useState("");
  const [totalPoint, setTotalPoint] = useState("");
  const [negativeType, setNegativeType] = useState("");
  const [isShowKey, setIsShowKey] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [question, setQuestion] = useState("");
  const [startTime, setStartTime] = useState(new Date().toISOString());

  const [disabledButton, setDisabledButton] = useState(false);

  const [isRedirect, setIsRedirect] = useState(false);

  useEffect(() => {
    if (examIId) {
      getSingleCourseExam();
    } else {
      setIsLoaded(true);
    }
  }, []);

  // Used When Page Is Updateing
  const getSingleCourseExam = () => {
    let data = new FormData();
    if (examIId) {
      data.append("id", examIId);
    }
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_ADMIN_GET_SINGLE_COURSE_EXAM,
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      method: "POST",
      data,
    })
      .then((res) => {
        console.log(res.data.data);
        setTitle(res.data.data.title);
        setCategory(res.data.data.category);
        setCourseId(res.data.data.course_id);
        setDuration(res.data.data.duration);
        setPassPoint(res.data.data.pass_point);
        setTotalPoint(res.data.data.total_point);
        setNegativeType(res.data.data.negative_type);
        setIsShowKey(res.data.data.is_show_key);
        setStartTime(res.data.data.start_time);
      })
      .catch((e) => {
        // console.log(e);
      })
      .finally(() => setIsLoaded(true));
  };

  function submitStartDate({ value }) {
    let s = value._d;
    let d = new Date(Date.parse(s));
    // console.log(d.toISOString());
    setStartTime(d.toISOString());
  }

  const handleFormOnSubmit = (e) => {
    e.preventDefault();
    setDisabledButton(true);
    let data = new FormData();

    if (examIId) {
      data.append("id", examIId);
    }

    data.append("title", title);
    data.append("category", category);
    data.append("course_id", courseId);
    data.append("duration", duration);
    data.append("pass_point", passPoint);
    data.append("total_point", totalPoint);
    data.append("negative_type", negativeType);
    data.append("start_time", startTime);

    if (isShowKey) {
      data.append("is_show_key", isShowKey);
    }

    if (question && examIId) {
      data.append("question_optional", question);
    } else if (question) {
      data.append("question", question);
    }

    // for (var key of data.entries()) {
    //   console.log(key[0] + ", " + key[1]);
    // }

    const myUrl = examIId
      ? process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_UPDATE_COURSE_EXAM
      : process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_CREATE_COURSE_EXAM;

    Axios({
      url: myUrl,
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      method: "POST",
      data,
    })
      .then((res) => {
        // console.log(res.data);
        notificationAlert(
          res.data.success === false ? "خطا !" : "انجام شد!",
          res.data.message,
          res.data.success === false ? "error" : "success"
        );
        if (res.data.success === true) setIsRedirect(true);
      })
      .catch((e) => {
        // console.log(e);
      })
      .finally(() => {
        setDisabledButton(false);
      });
  };

  if (isRedirect) return <Redirect to={`/admin/get-course-exam/${courseId}`} />;

  return (
    <section className="form-wrapper has-icon wrapper">
      <h2 className="section-title">
        {examIId ? "ویرایش امتحان" : "افزودن امتحان"}
      </h2>
      <div className="row">
        {/* <form className="row" onSubmit={handleFormOnSubmit}> */}
        <div className="col-md-6 form-group">
          <label htmlFor="title">
            عنوان امتحان <i className="icon-user"></i>
          </label>
          <input
            className="form-control"
            type="text"
            name="title"
            id="title"
            value={title}
            placeholder="عنوان امتحان"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <GetAllCourse
          disabled={true}
          courseId={courseId}
          setCourseId={setCourseId}
        />

        <div className="col-md-6 form-group">
          <label htmlFor="negative_type">
            دسته بندی<i className="icon-map"></i>
          </label>
          <select
            name="negative_type"
            id="negative_type"
            className="form-control"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            <option value="DEFAULT">انتخاب کنید</option>
            <option value="pop quiz"> امتحان کلاسی</option>
            <option value="midterm"> امتحان میان ترم</option>
            <option value="final"> امتحان پایانی</option>
          </select>
        </div>

        <div className="col-md-6 form-group">
          <label htmlFor="passPoint">
            نمره قبولی <i className="icon-user"></i>
          </label>
          <input
            className="form-control"
            type="number"
            name="passPoint"
            id="passPoint"
            value={passPoint}
            onChange={(e) => setPassPoint(e.target.value)}
            placeholder=" نمره قبولی"
          />
        </div>
        <div className="col-md-6 form-group">
          <label htmlFor="totalPoint">
            نمره کل <i className="icon-user"></i>
          </label>
          <input
            className="form-control"
            type="number"
            name="totalPoint"
            id="totalPoint"
            value={totalPoint}
            onChange={(e) => setTotalPoint(e.target.value)}
            placeholder="نمره کل"
          />
        </div>
        <div className="col-md-6 form-group">
          <label htmlFor="duration">
            مدت زمان <i className="icon-user"></i>
          </label>
          <input
            className="form-control"
            type="number"
            name="duration"
            id="duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            placeholder="مدت زمان"
          />
        </div>

        <div className="col-md-6 form-group">
          <label htmlFor="negative_type">
            نمره منفی<i className="icon-map"></i>
          </label>
          <select
            name="negative_type"
            id="negative_type"
            className="form-control"
            onChange={(e) => setNegativeType(e.target.value)}
            value={negativeType}
          >
            <option value="">انتخاب کنید</option>
            <option value="no-negative">نمره منفی ندارد</option>
            <option value="with-negative">نمره منفی دارد</option>
          </select>
        </div>

        <div className="col-md-6 form-group">
          <label htmlFor="start_time">
            تاریخ شروع<i className="icon-user"></i>
          </label>
          <DatePicker
            datetime={startTime}
            setDateTime={setStartTime}
            isLoaded={isLoaded}
          />
        </div>

        <div className="col-12 col-lg-6 form-group">
          <label htmlFor="avatar">آپلود PDF</label>
          <DropZonePDFUploader file={question} setFile={setQuestion} />
        </div>

        <div className="col-md-6 col-lg-3 form-group">
          <label htmlFor="isShowKey"> نمایش پاسخ نامه</label>
          <div className="custom-control custom-switch">
            <input
              type="checkbox"
              className="custom-control-input"
              id="isShowKey"
              value={isShowKey}
              onChange={(e) => setIsShowKey(!isShowKey)}
              checked={isShowKey ? "checked" : ""}
            />
            <label className="custom-control-label" htmlFor="isShowKey"></label>
          </div>
        </div>

        <div className="col-12 col-md-12 form-group">
          <button
            type="submit"
            disabled={disabledButton}
            className="btn btn-success submit-exam py-3 px-4"
            onClick={handleFormOnSubmit}
          >
            {examIId ? "ویرایش امتحان" : "ثبت امتحان"}
          </button>
        </div>
        {/* </form> */}
      </div>
    </section>
  );
}
export default withRouter(CreateCourseExam);
