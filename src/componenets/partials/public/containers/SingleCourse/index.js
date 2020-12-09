import React from "react";
import { withRouter } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SingleCourse from "../../components/SingleCourse";

import "../../../../../assets/public/css/style.scss";

function SingleCoursePage() {
  return (
    <div className="girls-page">
      <Header />
      <div className="pages-main">
        <SingleCourse />
      </div>
      <Footer />
    </div>
  );
}
export default withRouter(SingleCoursePage);
