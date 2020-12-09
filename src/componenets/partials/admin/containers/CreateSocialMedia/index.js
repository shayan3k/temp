import React from "react";
import { withRouter } from "react-router-dom";
import AdminHeader from "../Header";
import AdminMenue from "../Menu";
import AdminFooter from "../Footer";

import CreateSocialMedia from "../../components/CreateSocialMedia";

function StudentInfo() {
  return (
    <>
      <AdminHeader />
      <AdminMenue />
      <main className="dashboard-main">
        <CreateSocialMedia />
      </main>
      <AdminFooter />
    </>
  );
}
export default withRouter(StudentInfo);
