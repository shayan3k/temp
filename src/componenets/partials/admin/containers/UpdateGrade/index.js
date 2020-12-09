import React from "react";
import { withRouter } from "react-router-dom";
import AdminHeader from "../Header";
import AdminMenue from "../Menu";
import AdminFooter from "../Footer";

import CreateNewGrade from "../../components/CreateNewGrade";

function StudentInfo() {
  return (
    <>
      <AdminHeader />
      <AdminMenue />
      <main className="dashboard-main">
        <CreateNewGrade />
      </main>
      <AdminFooter />
    </>
  );
}
export default withRouter(StudentInfo);
