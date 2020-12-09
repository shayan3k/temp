import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageTitle from "../../components/PageTitle";
import "../../../../../assets/public/css/style.scss";

import TeachersList from "../../components/TeacherList";

function TeacherPage() {
  const breadItemsArray = [
    { title: "لیست اساتید", link: "/teachers" },
    { title: "صفحه اصلی", link: "/" },
  ];
  return (
    <div className="girls-page">
      <Header />
      <div className="pages-main">
        <PageTitle
          pageImage={"bg_teachers.png"}
          breadItemsArray={breadItemsArray}
          pageTitle="لیست اساتید"
          imageUrl={
            process.env.REACT_APP_IMAGE_URL +
            "/" +
            process.env.REACT_APP_ADMIN_WEBCONTROL_IMAGE_PATH
          }
        />

        <TeachersList />
      </div>
      <Footer />
    </div>
  );
}

export default TeacherPage;
