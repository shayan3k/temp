import React from "react";
import { withRouter } from "react-router-dom";
import AdminHeader from "../Header";
import AdminMenue from "../Menu";
import AdminFooter from "../Footer";

import GetPopularCourse from "../../components/GetPopularCourse";

function StudentInfo() {
  return (
    <>
      <AdminHeader />
      <AdminMenue />
      <main className="dashboard-main">
        <GetPopularCourse />
      </main>
      <AdminFooter />
    </>
  );
}
export default withRouter(StudentInfo);
