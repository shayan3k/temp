import React from "react";
import { withRouter } from "react-router-dom";
import AdminHeader from "../Header";
import AdminMenue from "../Menu";
import AdminFooter from "../Footer";

import CreatePopularTeacher from "../../components/CreatePopularTeacher";

function StudentInfo() {
  return (
    <>
      <AdminHeader />
      <AdminMenue />
      <main className="dashboard-main">
        <CreatePopularTeacher />
      </main>
      <AdminFooter />
    </>
  );
}
export default withRouter(StudentInfo);
