import React from "react";
import { withRouter } from "react-router-dom";
import AdminHeader from "../Header";
import AdminMenue from "../Menu";
import AdminFooter from "../Footer";

import GetCourseExam from "../../components/GetCourseExam";

function StudentInfo() {
  return (
    <>
      <AdminHeader />
      <AdminMenue />
      <main className="dashboard-main">
        <GetCourseExam />
      </main>
      <AdminFooter />
    </>
  );
}
export default withRouter(StudentInfo);
