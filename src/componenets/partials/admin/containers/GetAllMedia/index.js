import React from "react";
import { withRouter } from "react-router-dom";
import AdminHeader from "../Header";
import AdminMenue from "../Menu";
import AdminFooter from "../Footer";

import GetAllMedia from "../../components/GetAllMedia";

function StudentInfo() {
  return (
    <>
      <AdminHeader />
      <AdminMenue />
      <main className="dashboard-main">
        <GetAllMedia />
      </main>
      <AdminFooter />
    </>
  );
}
export default withRouter(StudentInfo);
