import React from "react";
import { withRouter } from "react-router-dom";
import AdminHeader from "../Header";
import AdminMenue from "../Menu";
import AdminFooter from "../Footer";

import CreateCourseSession from "../../components/CreateCourseSession";

function StudentInfo() {
  return (
    <>
      <AdminHeader />
      <AdminMenue />
      <main className="dashboard-main">
        <CreateCourseSession />
      </main>
      <AdminFooter />
    </>
  );
}
export default withRouter(StudentInfo);
