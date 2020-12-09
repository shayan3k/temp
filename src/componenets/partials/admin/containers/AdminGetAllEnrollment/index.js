import React from "react";
import { withRouter } from "react-router-dom";
import AdminHeader from "../Header";
import AdminMenue from "../Menu";
import AdminFooter from "../Footer";

import AdminGetAllEnrollment from "../../components/AdminGetAllEnrollment";

function StudentInfo() {
  return (
    <>
      <AdminHeader />
      <AdminMenue />
      <main className="dashboard-main">
        <AdminGetAllEnrollment />
      </main>
      <AdminFooter />
    </>
  );
}
export default withRouter(StudentInfo);
