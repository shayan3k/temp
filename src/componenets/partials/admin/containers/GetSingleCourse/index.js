import React from "react";
import { withRouter } from "react-router-dom";
import AdminHeader from "../Header";
import AdminMenue from "../Menu";
import AdminFooter from "../Footer";

import GetSingleCourse from "../../components/GetSingleCourse";

function StudentInfo() {
  return (
    <>
      <AdminHeader />
      <AdminMenue />
      <main className="dashboard-main">
        <GetSingleCourse />
      </main>
      <AdminFooter />
    </>
  );
}
export default withRouter(StudentInfo);
