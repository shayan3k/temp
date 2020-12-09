import React from "react";
import { withRouter } from "react-router-dom";
import AdminHeader from "../Header";
import AdminMenue from "../Menu";
import AdminFooter from "../Footer";

import AdminGetSingleAssignment from "../../components/AdminGetSingleAssignment";

function StudentInfo() {
  return (
    <>
      <AdminHeader />
      <AdminMenue />
      <main className="dashboard-main">
        <AdminGetSingleAssignment />
      </main>
      <AdminFooter />
    </>
  );
}
export default withRouter(StudentInfo);
