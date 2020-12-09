import React from "react";
import { withRouter } from "react-router-dom";
import AdminHeader from "../Header";
import AdminMenue from "../Menu";
import AdminFooter from "../Footer";

import CreateNewCourse from "../../components/CreateNewCourse";

function StudentInfo() {
  return (
    <>
      <AdminHeader />
      <AdminMenue />
      <main className="dashboard-main">
        <CreateNewCourse />
      </main>
      <AdminFooter />
    </>
  );
}
export default withRouter(StudentInfo);
