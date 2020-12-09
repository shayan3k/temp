import React from "react";
import { withRouter } from "react-router-dom";
import AdminHeader from "../Header";
import AdminMenue from "../Menu";
import AdminFooter from "../Footer";

import CreateNewCity from "../../components/CreateNewCity";

function StudentInfo() {
  return (
    <>
      <AdminHeader />
      <AdminMenue />
      <main className="dashboard-main">
        <CreateNewCity />
      </main>
      <AdminFooter />
    </>
  );
}
export default withRouter(StudentInfo);
