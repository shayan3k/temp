import React from "react";
import { withRouter } from "react-router-dom";
import AdminHeader from "../Header";
import AdminMenue from "../Menu";
import AdminFooter from "../Footer";

import AdminGetUserDeposit from "../../components/AdminGetUserDeposit";

function StudentInfo() {
  return (
    <>
      <AdminHeader />
      <AdminMenue />
      <main className="dashboard-main">
        <AdminGetUserDeposit />
      </main>
      <AdminFooter />
    </>
  );
}
export default withRouter(StudentInfo);
