import React, { useState, useEffect } from "react";
import Axios from "axios";
import { TriggerUserInfoFormSubmit } from "../../../../../services/Recoils";
import { useRecoilState } from "recoil";
import { withRouter, Redirect } from "react-router-dom";
import { notificationAlert } from "../../../../../utils/shared";
import GetAllGrades from "../../../shared/components/GetAllGrades";
import GetProvinceAndCity from "../../../shared/components/GetProvinceAndCity";
import DropZoneUploaderSingle from "../../../shared/components/DropZoneUploaderSingle";

function StudentInfoForm(props) {
  const userId = props.match.params.id;

  const [file, setFile] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [reference_phone_number, setReference_phone_number] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [name_english, setName_english] = useState("");
  const [lastname_english, setLastname_english] = useState("");
  const [father_name, setFather_name] = useState("");
  const [grade, setGrade] = useState("");
  const [school, setSchool] = useState("");
  const [email, setEmail] = useState("");
  const [balance, setBalance] = useState(0);
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [image, setImage] = useState("default.png");
  const [disabledButton, setDisabledButton] = useState(false);

  const [isRedirect, setIsRedirect] = useState(false);

  const [
    triggerUserInfoFormSubmit,
    setTriggerUserInfoFormSubmit,
  ] = useRecoilState(TriggerUserInfoFormSubmit);

  useEffect(() => {
    updateListComponent();
  }, []);

  const handleFormOnSubmit = (e) => {
    e.preventDefault();
    setDisabledButton(true);

    let data = new FormData();

    data.append("phone_number", phone_number);
    data.append("reference_phone_number", reference_phone_number);
    data.append("name", name);
    data.append("lastname", lastname);
    data.append("name_english", name_english);
    data.append("lastname_english", lastname_english);
    data.append("father_name", father_name);
    if (grade) data.append("grade_id", grade);
    data.append("school", school);
    data.append("email", email);
    data.append("balance", balance);
    data.append("province_id", province);
    data.append("city_id", city);
    if (file) data.append("image", file);

    for (var key of data.entries()) {
      console.log(key[0] + ", " + key[1]);
    }
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_UPDATE_SINGLE_USER,
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      method: "POST",
      data: data,
    })
      .then((res) => {
        console.log(res.data);

        notificationAlert(
          res.data.success === false ? "خطا !" : "انجام شد!",
          res.data.message,
          res.data.success === false ? "error" : "success"
        );

        setTriggerUserInfoFormSubmit(!triggerUserInfoFormSubmit);
        // Its may not be a good practise to reset fields after submition like this
        if (res.data.success) {
          updateListComponent();
          setFile("");
        }
      })
      .finally(() => {
        setDisabledButton(false);
      });
  };

  const updateListComponent = async () => {
    let data = new FormData();

    let myUrl = "";
    if (userId) {
      data.append("id", userId);

      myUrl =
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_ADMIN_GET_SINGLE_USER;
    } else {
      myUrl =
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_GET_USER_INFORMATION;
    }
    Axios({
      url: myUrl,
      withCredentials: true,
      method: "POST",
      data,
    }).then((res) => {
      console.log("this", res.data.data);

      try {
        if (res.data.err === true) {
          setIsRedirect(true);
        }

        setPhone_number(res.data.data.phone_number);
        setReference_phone_number(res.data.data.reference_phone_number);
        setName(res.data.data.name);
        setLastname(res.data.data.lastname);
        setName_english(res.data.data.name_english);
        setLastname_english(res.data.data.lastname_english);
        setFather_name(res.data.data.father_name);
        setGrade(res.data.data.grade_id?._id);
        setSchool(res.data.data.school);
        setEmail(res.data.data.email);
        setBalance(res.data.data.balance);
        setProvince(res.data.data.city_id?.province_id._id);
        setCity(res.data.data.city_id?._id);
        setImage(res.data.data.image);
      } catch (e) {
        // console.log(e.response);
      }
    });
  };
  if (isRedirect) return <Redirect to="/404" />;
  return (
    <section className="form-wrapper has-icon wrapper">
      <h2 className="section-title">ویرایش حساب کاربری</h2>
      <div className="container-fluid">
        <form className="row" onSubmit={handleFormOnSubmit}>
          <div className="col-md-6 form-group">
            <label htmlFor="phoneNumber">
              شماره تماس<i className="icon-people"></i>
            </label>
            <input
              className="form-control"
              type="text"
              name="phone_number"
              id="phoneNumber"
              value={phone_number}
              placeholder="شماره تماس"
              readOnly
            />
          </div>

          <div className="col-md-6  form-group">
            <label htmlFor="referencePhoneNumber">
              شماره تماس معرف<i className="icon-people"></i>
            </label>
            <input
              className="form-control"
              type="text"
              name="reference-phone-number"
              id="referencePhoneNumber"
              value={reference_phone_number}
              placeholder="بدون معرف"
              readOnly
            />
          </div>

          <div className="col-md-6 form-group">
            <label htmlFor="name">
              نام <i className="icon-user"></i>
            </label>
            <input
              className="form-control"
              type="text"
              name="name"
              id="name"
              placeholder="نام شما"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required={true}
            />
          </div>

          <div className="col-md-6 form-group">
            <label htmlFor="lastname">
              نام خانوادگی <i className="icon-user-follow"></i>
            </label>
            <input
              className="form-control"
              type="text"
              name="lastname"
              id="lastname"
              placeholder="نام خانوادگی شما"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              required={true}
            />
          </div>

          <div className="col-md-6 form-group">
            <label htmlFor="name-eng">
              نام به انگلیسی <i className="icon-user"></i>
            </label>
            <input
              className="form-control"
              type="text"
              name="name-eng"
              id="name-eng"
              placeholder="Your Name"
              value={name_english}
              onChange={(e) => setName_english(e.target.value)}
              required={true}
            />
          </div>

          <div className="col-md-6 form-group">
            <label htmlFor="lastname-eng">
              نام خانوادگی به انگلیسی <i className="icon-user-follow"></i>
            </label>
            <input
              className="form-control"
              type="text"
              name="lastname-eng"
              id="lastname-eng"
              placeholder="Your lastname"
              value={lastname_english}
              onChange={(e) => setLastname_english(e.target.value)}
              required={true}
            />
          </div>

          <div className="col-md-6  form-group">
            <label htmlFor="fatherName">
              نام پدر<i className="icon-people"></i>
            </label>
            <input
              className="form-control"
              type="text"
              name="father-name"
              id="fatherName"
              placeholder="نام پدر شما"
              value={father_name}
              onChange={(e) => setFather_name(e.target.value)}
              required={true}
            />
          </div>

          <div className="col-md-6 form-group">
            <label htmlFor="fatherName">
              ایمیل<i className="icon-email"></i>
            </label>
            <input
              className="form-control"
              type="email"
              placeholder="ایمیل شما"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required={true}
            />
          </div>
          <GetAllGrades gradeId={grade} setGradeId={setGrade} />

          <div className="col-md-6  form-group">
            <label htmlFor="schoolName">
              نام مدرسه <i className="icon-graduation"></i>
            </label>
            <input
              className="form-control"
              type="text"
              name="school"
              id="schoolName"
              placeholder="نام مدرسه شما"
              value={school}
              onChange={(e) => setSchool(e.target.value)}
              required={true}
            />
          </div>
          <GetProvinceAndCity
            province={province}
            city={city}
            setCity={setCity}
            setProvince={setProvince}
          />

          <div className="col-md-6  form-group">
            <label htmlFor="balance">
              بالانس مالی <i className="icon-graduation"></i>
            </label>
            <input
              className="form-control"
              type="number"
              id="balance"
              name="balance"
              placeholder="مبلغ"
              value={balance}
              onChange={(e) => setBalance(e.target.value)}
              required={true}
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
                process.env.REACT_APP_USER_IMAGE_PATH +
                image
              }
            />
          </div>

          <div className="col-12 form-group md-5">
            <div className="text-center">
              <input
                type="submit"
                className="btn btn-success w-50 pt-3 pb-3"
                id="custom-button-submit"
                value="ثبت اطلاعات"
                disabled={disabledButton}
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
export default withRouter(StudentInfoForm);
