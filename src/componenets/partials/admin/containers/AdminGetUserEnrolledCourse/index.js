import React from "react";
import { withRouter } from "react-router-dom";
import AdminHeader from "../Header";
import AdminMenue from "../Menu";
import AdminFooter from "../Footer";

import AdminGetUserEnrolledCourse from "../../components/AdminGetUserEnrolledCourse";

function StudentInfo() {
  return (
    <>
      <AdminHeader />
      <AdminMenue />
      <main className="dashboard-main">
        <AdminGetUserEnrolledCourse />
      </main>
      <AdminFooter />
    </>
  );
}
export default withRouter(StudentInfo);
