import React from "react";
import { withRouter } from "react-router-dom";
import AdminHeader from "../Header";
import AdminMenue from "../Menu";
import AdminFooter from "../Footer";

import GetUserGiftCodeLogs from "../../components/GetUserGiftCodeLogs";

function StudentInfo() {
  return (
    <>
      <AdminHeader />
      <AdminMenue />
      <main className="dashboard-main">
        <GetUserGiftCodeLogs />
      </main>
      <AdminFooter />
    </>
  );
}
export default withRouter(StudentInfo);
