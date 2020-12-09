import React from "react";
import { withRouter } from "react-router-dom";
import AdminHeader from "../Header";
import AdminMenue from "../Menu";
import AdminFooter from "../Footer";

import GetPopularTeacher from "../../components/GetPopularTeacher";

function StudentInfo() {
  return (
    <>
      <AdminHeader />
      <AdminMenue />
      <main className="dashboard-main">
        <GetPopularTeacher />
      </main>
      <AdminFooter />
    </>
  );
}
export default withRouter(StudentInfo);
