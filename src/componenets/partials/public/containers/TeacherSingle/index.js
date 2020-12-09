import React from "react";
import { withRouter } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import "../../../../../assets/public/css/style.scss";
// import Logo from "../../../../../assets/public/images/logo.png";

import TeacherSingle from "../../components/TeacherSingle";

function TeacherSinglePage() {
  return (
    <div className="girls-page">
      <Header />
      <div className="pages-main">
        <TeacherSingle />
      </div>
      <Footer />
    </div>
  );
}
export default withRouter(TeacherSinglePage);
