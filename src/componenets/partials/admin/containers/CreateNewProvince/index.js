import React from "react";
import { withRouter } from "react-router-dom";
import AdminHeader from "../Header";
import AdminMenue from "../Menu";
import AdminFooter from "../Footer";

import CreateNewProvince from "../../components/CreateNewProvince";

function StudentInfo() {
  return (
    <>
      <AdminHeader />
      <AdminMenue />
      <main className="dashboard-main">
        <CreateNewProvince />
      </main>
      <AdminFooter />
    </>
  );
}
export default withRouter(StudentInfo);
