import React from "react";
import { withRouter } from "react-router-dom";
import AdminHeader from "../Header";
import AdminMenue from "../Menu";
import AdminFooter from "../Footer";

import CreatePopularCourse from "../../components/CreatePopularCourse";

function StudentInfo(props) {
  return (
    <>
      <AdminHeader />
      <AdminMenue />
      <main className="dashboard-main">
        <CreatePopularCourse />
      </main>
      <AdminFooter />
    </>
  );
}
export default withRouter(StudentInfo);
