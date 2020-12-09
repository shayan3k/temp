import React from "react";
import { withRouter } from "react-router-dom";
import AdminHeader from "../Header";
import AdminMenue from "../Menu";
import AdminFooter from "../Footer";

import CreateNewMedia from "../../components/CreateNewMedia";

function StudentInfo() {
  return (
    <>
      <AdminHeader />
      <AdminMenue />
      <main className="dashboard-main">
        <CreateNewMedia />
      </main>
      <AdminFooter />
    </>
  );
}
export default withRouter(StudentInfo);
