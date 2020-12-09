import React from "react";
import { withRouter } from "react-router-dom";
import AdminHeader from "../Header";
import AdminMenue from "../Menu";
import AdminFooter from "../Footer";

import AdminGetUserEnrollment from "../../components/AdminGetUserEnrollment";

function StudentInfo(props) {
  return (
    <>
      <AdminHeader />
      <AdminMenue />
      <main className="dashboard-main">
        <AdminGetUserEnrollment {...props} />
      </main>
      <AdminFooter />
    </>
  );
}
export default withRouter(StudentInfo);
