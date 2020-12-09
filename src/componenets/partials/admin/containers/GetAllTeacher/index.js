import React from "react";
import { withRouter } from "react-router-dom";
import AdminHeader from "../Header";
import AdminMenue from "../Menu";
import AdminFooter from "../Footer";

import GetAllTeacher from "../../components/GetAllTeacher";

function StudentInfo() {
  return (
    <>
      <AdminHeader />
      <AdminMenue />
      <main className="dashboard-main">
        <GetAllTeacher />
      </main>
      <AdminFooter />
    </>
  );
}
export default withRouter(StudentInfo);
