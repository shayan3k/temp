import React from "react";
import { withRouter } from "react-router-dom";
import AdminHeader from "../Header";
import AdminMenue from "../Menu";
import AdminFooter from "../Footer";

import AdminGetAllDeposit from "../../components/AdminGetAllDeposit";

function StudentInfo() {
  return (
    <>
      <AdminHeader />
      <AdminMenue />
      <main className="dashboard-main">
        <AdminGetAllDeposit />
      </main>
      <AdminFooter />
    </>
  );
}
export default withRouter(StudentInfo);
