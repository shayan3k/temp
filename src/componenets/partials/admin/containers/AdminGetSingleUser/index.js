import React from "react";
import { withRouter } from "react-router-dom";
import AdminHeader from "../Header";
import AdminMenue from "../Menu";
import AdminFooter from "../Footer";
import AdminGetSingleUser from "../../components/AdminGetSingleUser";

function StudentInfo() {
  return (
    <>
      <AdminHeader />
      <AdminMenue />
      <main className="dashboard-main">
        <AdminGetSingleUser />
      </main>
      <AdminFooter />
    </>
  );
}
export default withRouter(StudentInfo);
