import React from "react";
import { withRouter } from "react-router-dom";
import AdminHeader from "../Header";
import AdminMenue from "../Menu";
import AdminFooter from "../Footer";

import AdminAllReportCard from "../../components/AdminAllReportCard";

function StudentInfo() {
  return (
    <>
      <AdminHeader />
      <AdminMenue />
      <main className="dashboard-main">
        <AdminAllReportCard />
      </main>
      <AdminFooter />
    </>
  );
}
export default withRouter(StudentInfo);
