import React from "react";
import { withRouter } from "react-router-dom";
import AdminHeader from "../Header";
import AdminMenue from "../Menu";
import AdminFooter from "../Footer";

import CreateCourseExam from "../../components/CreateCourseExam";

function StudentInfo() {
  return (
    <>
      <AdminHeader />
      <AdminMenue />
      <main className="dashboard-main">
        <CreateCourseExam />
      </main>
      <AdminFooter />
    </>
  );
}
export default withRouter(StudentInfo);
