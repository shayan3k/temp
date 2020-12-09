import React from "react";
import { withRouter } from "react-router-dom";
import AdminHeader from "../Header";
import AdminMenue from "../Menu";
import AdminFooter from "../Footer";

import AdminUserExamRecord from "../../components/AdminUserExamRecord";

function StudentInfo() {
  return (
    <>
      <AdminHeader />
      <AdminMenue />
      <main className="dashboard-main">
        <AdminUserExamRecord />
      </main>
      <AdminFooter />
    </>
  );
}
export default withRouter(StudentInfo);
