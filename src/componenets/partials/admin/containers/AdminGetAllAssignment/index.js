import React from "react";
import { withRouter } from "react-router-dom";
import AdminHeader from "../Header";
import AdminMenue from "../Menu";
import AdminFooter from "../Footer";

import AdminGetAllAssignment from "../../components/AdminGetAllAssignment";

function StudentInfo() {
  return (
    <>
      <AdminHeader />
      <AdminMenue />
      <main className="dashboard-main">
        <AdminGetAllAssignment />
      </main>
      <AdminFooter />
    </>
  );
}
export default withRouter(StudentInfo);
