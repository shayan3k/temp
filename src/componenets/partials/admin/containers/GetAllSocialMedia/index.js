import React from "react";
import { withRouter } from "react-router-dom";
import AdminHeader from "../Header";
import AdminMenue from "../Menu";
import AdminFooter from "../Footer";

import GetAllSocialMedia from "../../components/GetAllSocialMedia";

function StudentInfo() {
  return (
    <>
      <AdminHeader />
      <AdminMenue />
      <main className="dashboard-main">
        <GetAllSocialMedia />
      </main>
      <AdminFooter />
    </>
  );
}
export default withRouter(StudentInfo);
