import React from "react";
import { withRouter } from "react-router-dom";
import AdminHeader from "../Header";
import AdminMenue from "../Menu";
import AdminFooter from "../Footer";

import GetAllProvince from "../../components/GetAllProvince";

function StudentInfo() {
  return (
    <>
      <AdminHeader />
      <AdminMenue />
      <main className="dashboard-main">
        <GetAllProvince />
      </main>
      <AdminFooter />
    </>
  );
}
export default withRouter(StudentInfo);
