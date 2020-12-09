import React from "react";
import { withRouter } from "react-router-dom";
import AdminHeader from "../Header";
import AdminMenue from "../Menu";
import AdminFooter from "../Footer";

import GetAllCategory from "../../components/GetAllCategory";

function StudentInfo() {
  return (
    <>
      <AdminHeader />
      <AdminMenue />
      <main className="dashboard-main">
        <GetAllCategory />
      </main>
      <AdminFooter />
    </>
  );
}
export default withRouter(StudentInfo);
