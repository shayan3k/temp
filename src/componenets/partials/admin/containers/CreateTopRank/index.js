import React from "react";
import { withRouter } from "react-router-dom";
import AdminHeader from "../Header";
import AdminMenue from "../Menu";
import AdminFooter from "../Footer";

import CreateTopRank from "../../components/CreateTopRank";

function StudentInfo() {
  return (
    <>
      <AdminHeader />
      <AdminMenue />
      <main className="dashboard-main">
        <CreateTopRank />
      </main>
      <AdminFooter />
    </>
  );
}
export default withRouter(StudentInfo);
