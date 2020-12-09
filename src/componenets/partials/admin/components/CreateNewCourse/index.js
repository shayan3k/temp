import React, { useState, useEffect } from "react";
import { withRouter, Redirect } from "react-router-dom";
import Axios from "axios";
import { notificationAlert } from "../../../../../utils/shared";
import Textarea from "../../../shared/components/Textarea";
import GetAllTeachers from "../../../shared/components/GetAllTeachers";
import GetMultiSelectCategories from "../../../shared/components/GetMultiSelectCategories";
import GetAllGrades from "../../../shared/components/GetAllGrades";
import DropZoneUploaderSingle from "../../../shared/components/DropZoneUploaderSingle";

function CreateNewCourse({ ...props }) {
  const courseId = props.match.params.id;

  const [selectedCategory, setSelectedCategory] = useState([]);

  const [file, setFile] = useState("");
  const [title, setTitle] = useState("");
  const [gradeId, setGradeId] = useState("");
  const [description, setDescription] = useState("");
  const [teacherId, setTeacherId] = useState("");

  const [installment_first, setInstallment_first] = useState(0);
  const [installment_duration, setInstallment_duration] = useState(0);
  const [installment_count, setInstallment_count] = useState(0);
  const [total_price, setTotal_price] = useState(0);

  const [is_pay_all, setIs_pay_all] = useState(false);
  const [is_chat_active, setIs_chat_active] = useState(false);
  const [videoIfram, setVideoIfram] = useState("");
  const [image, setImage] = useState("default.png");
  const [disabledButton, setDisabledButton] = useState(false);
  const [isRedirect, setIsRedirect] = useState(false);
  const [isRedirect404, setIsRedirect404] = useState(false);

  useEffect(() => {
    if (courseId) {
      getSingleCourse();
    }
  }, []);

  useEffect(() => {}, [selectedCategory]);

  const getSingleCourse = () => {
    let data = new FormData();
    if (courseId) {
      data.append("id", courseId);
    }
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_ADMIN_GET_SINGLE_COURSE,
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      method: "POST",
      data,
    })
      .then((res) => {
        console.log(res.data);
        if (res.data.err === true) {
          setIsRedirect404(true);
        }
        let categories = [];
        res.data.data.category_id.map((item) => {
          categories.push(item._id);
          setSelectedCategory(categories);
          return categories;
        });

        setTitle(res.data.data.title);
        setGradeId(res.data.data.grade_id._id);
        setDescription(res.data.data.description);
        setTeacherId(res.data.data.teacher_id._id);

        if (
          res.data.data.installment_first == 0 ||
          res.data.data.installment_duration == 0 ||
          res.data.data.installment_count == 0
        )
          setIs_pay_all(true);

        setInstallment_first(res.data.data.installment_first);
        setInstallment_duration(res.data.data.installment_duration);
        setInstallment_count(res.data.data.installment_count);
        setTotal_price(res.data.data.total_price);

        setIs_chat_active(res.data.data.is_chat_active);
        setVideoIfram(res.data.data.video_url);
        setImage(res.data.data.image);
      })
      .catch((e) => {
        // console.log(e);
      });
  };

  const handleFormOnSubmit = (e) => {
    e.preventDefault();
    setDisabledButton(true);
    let data = new FormData();
    if (courseId) {
      data.append("id", courseId);
    }
    data.append("title", title);
    data.append("grade_id", gradeId);
    data.append("description", description);
    data.append("teacher_id", teacherId);
    data.append("total_price", total_price);
    if (file) data.append("image", file);
    if (is_pay_all) {
      data.append("installment_first", 0);
      data.append("installment_duration", 0);
      data.append("installment_count", 0);
    } else {
      data.append("installment_first", installment_first);
      data.append("installment_duration", installment_duration);
      data.append("installment_count", installment_count);
      //for checking the pay_all status
      data.append("is_pay_all", is_pay_all);
    }

    if (is_chat_active) {
      data.append("is_chat_active", is_chat_active);
    }
    data.append("video_url", videoIfram);

    selectedCategory.map((item) => data.append("category_id", item));

    for (var key of data.entries()) {
      console.log(key[0] + ", " + key[1]);
    }

    const myUrl = courseId
      ? process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_UPDATE_SINGLE_COURSE
      : process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_CREATE_NEW_COURSE;

    Axios({
      url: myUrl,
      withCredentials: true,
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

  if (isRedirect404) return <Redirect to="/404" />;
  if (isRedirect) return <Redirect to="/admin/get-all-course" />;

  return (
    <section className="form-wrapper has-icon wrapper">
      <h2 className="section-title">
        {courseId ? "ویرایش درس" : "افزودن درس"}
      </h2>
      <form
        className="row"
        action="."
        method="POST"
        onSubmit={handleFormOnSubmit}
      >
        <div className="col-md-6 form-group">
          <label htmlFor="title">
            عنوان درس<i className="icon-user"></i>
          </label>
          <input
            className="form-control"
            type="text"
            name="title"
            id="title"
            placeholder="عنوان درس"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <GetMultiSelectCategories
          setSelectedCategory={setSelectedCategory}
          categoryId={selectedCategory}
        />

        <GetAllGrades gradeId={gradeId} setGradeId={setGradeId} />

        <GetAllTeachers teacherId={teacherId} setTeacherId={setTeacherId} />

        <div className="col-md-12 form-group">
          <label htmlFor="title">
            لینک iframe<i className="fas fa-file"></i>
          </label>
          <input
            className="form-control"
            type="text"
            name="videoLink"
            id="videoLink"
            placeholder="iframe..."
            value={videoIfram}
            onChange={(e) => setVideoIfram(e.target.value)}
          />
        </div>

        <div className="col-md-12 form-group">
          <div>
            <label htmlFor="cv">
              توضیحات <i className="icon-user"></i>
            </label>
            <Textarea
              className="form-control"
              setMessage={setDescription}
              message={description}
            ></Textarea>
          </div>
        </div>

        <div className="col-md-6 form-group d-flex align-items-center">
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="is_chat_active"
              name="is_chat_active"
              value={is_chat_active}
              onChange={(e) => setIs_chat_active(!is_chat_active)}
              checked={is_chat_active === true ? "checked" : ""}
            />
            <label className="form-check-label" htmlFor="is_chat_active">
              دسترسی چت درس برای عموم
            </label>
          </div>
        </div>

        <div className="col-md-6 form-group d-flex align-items-center">
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="is_pay_all"
              name="is_pay_all"
              value={is_pay_all}
              onChange={(e) => {
                if (!is_pay_all) {
                  setInstallment_count(0);
                  setInstallment_duration(0);
                  setInstallment_first(0);
                }

                setIs_pay_all(!is_pay_all);
              }}
              checked={is_pay_all === true ? "checked" : ""}
              disabled={courseId}
            />
            <label className="form-check-label" htmlFor="is_pay_all">
              فقط پرداخت یکجا
            </label>
          </div>
        </div>

        <div className="col-md-6 form-group">
          <label htmlFor="title">
            درصد پیش پرداخت<i className="fas fa-file"></i>
          </label>
          <input
            className="form-control"
            type="number"
            name="installment_first"
            value={installment_first}
            min={1}
            max={100}
            onChange={(e) => setInstallment_first(e.target.value)}
            disabled={is_pay_all || courseId}
          />
        </div>

        <div className="col-md-6 form-group">
          <label htmlFor="title">
            مدت زمان اقساط(روز)<i className="fas fa-file"></i>
          </label>
          <input
            className="form-control"
            type="number"
            name="installment_duration"
            value={installment_duration}
            min={1}
            onChange={(e) => setInstallment_duration(e.target.value)}
            disabled={is_pay_all || courseId}
          />
        </div>

        <div className="col-md-6 form-group">
          <label htmlFor="title">
            تعداد اقساط<i className="fas fa-file"></i>
          </label>
          <input
            className="form-control"
            type="number"
            name="installment_count"
            min={1}
            max={100}
            value={installment_count}
            onChange={(e) => setInstallment_count(e.target.value)}
            disabled={is_pay_all || courseId}
          />
        </div>

        <div className="col-md-6 form-group">
          <label htmlFor="title">
            قیمت کل(تومان)<i className="fas fa-file"></i>
          </label>
          <input
            className="form-control"
            type="number"
            name="total_price"
            min={0}
            value={total_price}
            onChange={(e) => setTotal_price(e.target.value)}
            disabled={courseId}
          />
        </div>

        <div className="col-12 col-lg-6 form-group">
          <label htmlFor="avatar">آپلود آواتار</label>
          <DropZoneUploaderSingle
            file={file}
            setFile={setFile}
            prevImageUrl={
              process.env.REACT_APP_IMAGE_URL +
              "/" +
              process.env.REACT_APP_ADMIN_COURSE_IMAGE_PATH +
              image
            }
          />
        </div>
        <div className="col-12 form-group">
          <button
            type="submit"
            className="btn btn-success submit-teacher py-3 px-4"
            disabled={disabledButton}
          >
            {courseId ? "ویرایش" : "ثبت درس"}
          </button>
        </div>
      </form>
    </section>
  );
}
export default withRouter(CreateNewCourse);
