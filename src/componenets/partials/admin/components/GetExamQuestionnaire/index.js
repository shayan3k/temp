import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import Axios from "axios";
import Pagination from "../../../shared/components/Pagination";
import ExamQuestionnaireItems from "./ExamQuestionnaireItems";
import { notificationAlert } from "../../../../../utils/shared";
import GetAllExam from "../../../shared/components/GetAllExam";
function GetExamQuestionnaire(props) {
  const [questioExamList, setQuestioExamList] = useState([]);
  const [disabledButton, setDisabledButton] = useState("");

  const [examId, setExamId] = useState(
    props.match.params.id ? props.match.params.id : ""
  );
  const [hasMore, setHasMore] = useState(false);
  const [itemCount, setItemCount] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    if (examId) {
      getQuestionExam();
    }
  }, [currentPage]);

  const handleFormOnSubmit = (e) => {
    e.preventDefault();
    setDisabledButton(true);
    getQuestionExam();
  };
  //Get All Question Exam
  const getQuestionExam = () => {
    setIsLoaded(false);
    let data = new FormData();
    data.append("page", currentPage);
    data.append("exam_id", examId);

    // for (var key of data.entries()) {
    //   console.log(key[0] + ", " + key[1]);
    // }

    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_ADMIN_GET_EXAM_QUESTIONNAIRE,
      method: "POST",
      withCredentials: true,
      data,
    })
      .then((res) => {
        try {
          // console.log(res.data);
          setHasMore(res.data.data.hasMore);
          setItemCount(res.data.data.itemCount);
          setPageCount(res.data.data.pageCount);
          setQuestioExamList(res.data.data.data ? res.data.data.data : []);
        } catch (e) {
          // console.log(e);
        }
      })
      .catch((e) => console.log(e.message))
      .finally(() => setIsLoaded(true));
  };

  //DELETE Exam Questionnaire
  const deleteExamQuestionnaire = (id) => {
    let data = new FormData();
    data.append("id", id);
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_DELETE_EXAM_QUESTIONNAIRE,

      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      method: "POST",
      data,
    })
      .then((res) => {
        getQuestionExam();
        notificationAlert(
          res.data.success === false ? "خطا !" : "انجام شد!",
          res.data.message,
          res.data.success === false ? "error" : "success"
        );
      })
      .finally(() => {
        return false;
      });
  };

  return (
    <>
      {!props.match.params.id && (
        <section className="form-wrapper has-icon wrapper">
          <h2 className="section-title mb-4"> انتخاب امتحان</h2>

          <form className="row" onSubmit={handleFormOnSubmit}>
            <GetAllExam exameId={examId} setExamId={setExamId} />
            <div className="col-12 col-md-12 form-group">
              <button
                type="submit"
                disabled={disabledButton}
                className="btn btn-success submit-popularCourse"
              >
                ثبت امتحان
              </button>
            </div>
          </form>
        </section>
      )}

      <section className="form-wrapper has-icon wrapper">
        <h2 className="section-title mb-4"> پاسخنامه</h2>

        <Link
          to={`/admin/create-exam-questionnaire/${examId}`}
          className="btn btn-success"
        >
          ثبت سوال جدید
        </Link>
        <hr />
        {isLoaded ? (
          questioExamList.length > 0 ? (
            <div>
              <table className="table table-bordered table-striped text-center">
                <thead className="thead-light">
                  <tr>
                    <th scope="col">عنوان امتحان</th>
                    <th scope="col"> شماره سوال</th>
                    <th scope="col"> پاسخ</th>
                    <th scope="col">ویرایش / حذف</th>
                  </tr>
                </thead>
                <tbody>
                  {questioExamList.map((item, index) => (
                    <ExamQuestionnaireItems
                      key={index}
                      item={item}
                      DeleteItem={deleteExamQuestionnaire}
                    />
                  ))}
                </tbody>
              </table>

              <nav aria-label="...">
                <Pagination
                  hasMore={hasMore}
                  setHasMore={setHasMore}
                  itemCount={itemCount}
                  pageCount={pageCount}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                />
              </nav>
            </div>
          ) : (
            <div className="alert alert-danger" role="alert">
              برای امتحان مورد نظر پاسخنامه ثبت نشده
            </div>
          )
        ) : (
          <div className="alert alert-info" role="alert">
            در حال بارگذاری...
          </div>
        )}
      </section>
    </>
  );
}
export default withRouter(GetExamQuestionnaire);
