import React from "react";
import { withRouter } from "react-router-dom";
import AdminHeader from "../Header";
import AdminMenue from "../Menu";
import AdminFooter from "../Footer";

import GetAllCity from "../../components/GetAllCity";

function StudentInfo() {
  return (
    <>
      <AdminHeader />
      <AdminMenue />
      <main className="dashboard-main">
        <GetAllCity />
      </main>
      <AdminFooter />
    </>
  );
}
export default withRouter(StudentInfo);
