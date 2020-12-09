import React from "react";
import { withRouter } from "react-router-dom";
import AdminHeader from "../Header";
import AdminMenue from "../Menu";
import AdminFooter from "../Footer";

import AdminGetCourseAssignment from "../../components/AdminGetCourseAssignment";

function StudentInfo() {
  return (
    <>
      <AdminHeader />
      <AdminMenue />
      <main className="dashboard-main">
        <AdminGetCourseAssignment />
      </main>
      <AdminFooter />
    </>
  );
}
export default withRouter(StudentInfo);
