import React from "react";
import { withRouter } from "react-router-dom";
import AdminHeader from "../Header";
import AdminMenue from "../Menu";
import AdminFooter from "../Footer";

import GetAllCourse from "../../components/GetAllCourse";

function StudentInfo() {
  return (
    <>
      <AdminHeader />
      <AdminMenue />
      <main className="dashboard-main">
        <GetAllCourse />
      </main>
      <AdminFooter />
    </>
  );
}
export default withRouter(StudentInfo);
