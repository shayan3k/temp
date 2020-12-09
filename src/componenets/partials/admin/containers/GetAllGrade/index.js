import React from "react";
import { withRouter } from "react-router-dom";
import AdminHeader from "../Header";
import AdminMenue from "../Menu";
import AdminFooter from "../Footer";

import GetAllGrade from "../../components/GetAllGrade";

function StudentInfo() {
  return (
    <>
      <AdminHeader />
      <AdminMenue />
      <main className="dashboard-main">
        <GetAllGrade />
      </main>
      <AdminFooter />
    </>
  );
}
export default withRouter(StudentInfo);
