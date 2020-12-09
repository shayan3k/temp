import React, { useState, useEffect } from "react";
import Axios from "axios";
import { withRouter } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageTitle from "../../components/PageTitle";
import CoursesList from "../../components/CoursesList";
import CoursesFilter from "../../components/CoursesFilter";

import "../../../../../assets/public/css/style.scss";

function CoursesPage(props) {
  const category_id = props.location.categoryId; // in az safhe ye single course miayad

  const [courseList, setCourseList] = useState([]);

  const [title, setTitle] = useState("");
  const [gradeId, setGradeId] = useState("");
  const [teacherId, setTeacherId] = useState("");
  const [categoryId, setCategoryId] = useState(category_id ? category_id : "");

  const [hasMore, setHasMore] = useState(false);
  const [itemCount, setItemCount] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const [isLoaded, setIsloaded] = useState(true);

  const breadItemsArray = [
    { title: "لیست درس ها", link: "/courses-list" },
    { title: "صفحه اصلی", link: "/" },
  ];

  useEffect(() => {
    getFilterCourse();
  }, [currentPage, title, gradeId, teacherId, categoryId]);

  const getFilterCourse = () => {
    setIsloaded(false);

    let data = new FormData();

    data.append("page", currentPage);

    if (title) {
      data.append("title_search", title);
    }

    if (gradeId) {
      data.append("grade_search", gradeId);
    }

    if (teacherId) {
      data.append("teacher_search", teacherId);
    }

    if (categoryId) {
      data.append("category_search", categoryId);
    }

    // for (var key of data.entries()) {
    //   console.log(key[0] + ", " + key[1]);
    // }

    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_HOME_GET_FILTER_COURSE,
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      method: "POST",
      data: data,
    })
      .then((res) => {
        // console.log(res.data.data);

        setHasMore(res.data.data.hasMore);
        setItemCount(res.data.data.itemCount);
        setPageCount(res.data.data.pageCount);
        setCourseList(res.data.data.data ? res.data.data.data : []);
      })
      .catch((e) => {
        // console.log(e.response)
      })
      .finally(() => {
        setIsloaded(true);
      });
  };

  return (
    <div className="girls-page">
      <Header />

      <div className="pages-main">
        <PageTitle
          pageImage={"bg_courses.png"}
          breadItemsArray={breadItemsArray}
          pageTitle="لیست درس ها"
          imageUrl={
            process.env.REACT_APP_IMAGE_URL +
            "/" +
            process.env.REACT_APP_ADMIN_WEBCONTROL_IMAGE_PATH
          }
        />

        <CoursesFilter
          title={title}
          setTitle={setTitle}
          gradeId={gradeId}
          setGradeId={setGradeId}
          teacherId={teacherId}
          setTeacherId={setTeacherId}
          categoryId={categoryId}
          setCategoryId={setCategoryId}
        />

        <CoursesList
          courseList={courseList}
          hasMore={hasMore}
          setHasMore={setHasMore}
          itemCount={itemCount}
          pageCount={pageCount}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          isLoaded={isLoaded}
          // sectionTitle="لیست درس ها"
        />
      </div>
      <Footer />
    </div>
  );
}

export default withRouter(CoursesPage);
