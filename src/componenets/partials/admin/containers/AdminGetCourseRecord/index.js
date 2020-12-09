import React from "react";
import { withRouter } from "react-router-dom";
import AdminHeader from "../Header";
import AdminMenue from "../Menu";
import AdminFooter from "../Footer";

import AdminGetCourseRecord from "../../components/AdminGetCourseRecord";

function StudentInfo() {
  return (
    <>
      <AdminHeader />
      <AdminMenue />
      <main className="dashboard-main">
        <AdminGetCourseRecord />
      </main>
      <AdminFooter />
    </>
  );
}
export default withRouter(StudentInfo);
