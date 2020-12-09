import React, { useState, useEffect } from "react";
import Axios from "axios";
import { withRouter, Redirect } from "react-router-dom";
import { notificationAlert } from "../../../../../utils/shared";
import DatePicker from "../../../shared/components/DatePicker";
import GetAllCourse from "../../../shared/components/GetAllCourse";
import DropZonePDFUploader from "../../../shared/components/DropZonePDFUploader";

function CreateCourseSession(props) {
  const sessionId = props.match.params.id;
  const [courseId, setCourseId] = useState(
    props.match.params.courseId ? props.match.params.courseId : ""
  );
  const [subject, setSubject] = useState("");
  const [duration, setDuration] = useState("");
  const [startTime, setStartTime] = useState(new Date().toISOString());
  const [index, setIndex] = useState("");
  const [lectureNote, setLectureNote] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [disabledButton, setDisabledButton] = useState(false);
  const [isRedirect, setIsRedirect] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (sessionId) {
      getSingleCourseSession();
    } else {
      setIsLoaded(true);
    }
  }, []);

  const getSingleCourseSession = () => {
    let data = new FormData();
    if (sessionId) {
      data.append("id", sessionId);
    }
    // for (var key of data.entries()) {
    //   console.log(key[0] + ", " + key[1]);
    // }

    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_ADMIN_SINGLE_COURSE_SESSION,
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      method: "POST",
      data,
    })
      .then((res) => {
        try {
          console.log(res.data.data);
          setCourseId(res.data.data.course_id._id);
          setSubject(res.data.data.subject);
          setDuration(res.data.data.duration);
          setStartTime(res.data.data.start_time);
          setIndex(res.data.data.index);
          setVideoUrl(res.data.data.video_url);
        } catch (e) {}
      })
      .catch((e) => {
        // console.log(e);
      })
      .finally(() => setIsLoaded(true));
  };

  const handleFormOnSubmit = (e) => {
    e.preventDefault();
    setDisabledButton(true);

    let data = new FormData();
    if (sessionId) {
      data.append("id", sessionId);
    }
    data.append("course_id", courseId);
    data.append("subject", subject);
    data.append("duration", duration);
    data.append("start_time", startTime);
    data.append("index", index);
    if (!sessionId) {
      data.append("lecture_note", lectureNote);
    } else {
      data.append("lecture_note", lectureNote);
    }
    data.append("video_url", videoUrl);

    for (var key of data.entries()) {
      console.log(key[0] + ", " + key[1]);
    }
    let myUrl = "";
    if (sessionId) {
      myUrl =
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_ADMIN_UPDATE_COURSE_SESSION;
    } else {
      myUrl =
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_ADMIN_CREATE_COURSE_SESSION;
    }

    Axios({
      url: myUrl,
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      method: "POST",
      data: data,
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
      .finally(() => {
        setDisabledButton(false);
      });
  };

  if (isRedirect)
    return <Redirect to={`/admin/get-single-course/${courseId}`} />;
  return (
    <div className="container-fluid">
      <section className="form-wrapper has-icon wrapper">
        <h2 className="section-title">
          {sessionId ? "ویرایش جلسه" : "افزودن جلسه به جلسه"}
        </h2>
        <div className="container-fluid ">
          {/* <form
            className="row"
            onSubmit={handleFormOnSubmit}
          > */}
          <div className="row">
            <div className="col-md-6 form-group">
              <label htmlFor="subject">
                موضوع/مبحث<i className="icon-user"></i>
              </label>
              <input
                className="form-control"
                type="text"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="موضوع/مبحث"
              />
            </div>
            <GetAllCourse
              disabled={true}
              courseId={courseId}
              setCourseId={setCourseId}
            />

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
            <div className="col-md-6 form-group">
              <label htmlFor="duration">
                مدت جلسه (دقیقه)<i className="icon-user"></i>
              </label>
              <input
                className="form-control"
                type="number"
                id="duration"
                name="duration"
                placeholder="مدت جلسه (دقیقه)"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              />
            </div>

            <div className="col-md-12 form-group">
              <label htmlFor="video_url">
                لینک ویدیو جلسه<i className="icon-user"></i>
              </label>
              <input
                className="form-control"
                type="text"
                id="video_url"
                name="video_url"
                placeholder="لینک جلسه"
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
              />
            </div>

            <div className="col-md-6 form-group">
              <label htmlFor="index">
                ایندکس<i className="icon-user"></i>
              </label>
              <input
                className="form-control"
                type="number"
                id="index"
                name="index"
                placeholder="ایندکس"
                value={index}
                onChange={(e) => setIndex(e.target.value)}
              />
            </div>
            <div className="col-12 col-lg-6 form-group">
              <label htmlFor="avatar">آپلود PDF</label>
              <DropZonePDFUploader
                file={lectureNote}
                setFile={setLectureNote}
              />
            </div>

            <div className="col-12 col-lg-12 form-group">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={disabledButton}
                onClick={handleFormOnSubmit}
              >
                {sessionId ? "ویرایش جلسه" : "ثبت جلسه"}
              </button>
            </div>
          </div>
          {/* </form> */}
        </div>
      </section>
    </div>
  );
}
export default withRouter(CreateCourseSession);
