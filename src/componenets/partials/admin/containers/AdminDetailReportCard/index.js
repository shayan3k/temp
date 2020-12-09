import React from "react";
import { withRouter } from "react-router-dom";
import AdminHeader from "../Header";
import AdminMenue from "../Menu";
import AdminFooter from "../Footer";

import AdminDetailReportCard from "../../components/AdminDetailReportCard";

function StudentInfo() {
  return (
    <>
      <AdminHeader />
      <AdminMenue />
      <main className="dashboard-main">
        <AdminDetailReportCard />
      </main>
      <AdminFooter />
    </>
  );
}
export default withRouter(StudentInfo);
