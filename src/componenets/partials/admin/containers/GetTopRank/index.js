import React from "react";
import { withRouter } from "react-router-dom";
import AdminHeader from "../Header";
import AdminMenue from "../Menu";
import AdminFooter from "../Footer";

import GetTopRank from "../../components/GetTopRank";

function StudentInfo() {
  return (
    <>
      <AdminHeader />
      <AdminMenue />
      <main className="dashboard-main">
        <GetTopRank />
      </main>
      <AdminFooter />
    </>
  );
}
export default withRouter(StudentInfo);
