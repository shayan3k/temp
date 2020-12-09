import React from "react";
import { withRouter } from "react-router-dom";
import AdminHeader from "../Header";
import AdminMenue from "../Menu";
import AdminFooter from "../Footer";

import GetAllComment from "../../components/GetAllComment";

function StudentInfo() {
  return (
    <>
      <AdminHeader />
      <AdminMenue />
      <main className="dashboard-main">
        <GetAllComment />
      </main>
      <AdminFooter />
    </>
  );
}
export default withRouter(StudentInfo);
