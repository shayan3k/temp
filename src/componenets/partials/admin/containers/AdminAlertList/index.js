import React from "react";
import { withRouter } from "react-router-dom";
import StudentHeader from "../Header";
import StudentMenu from "../Menu";
import StudentFooter from "../Footer";

import AlertList from "../../components/AlertList";

function StudentInfo() {
  return (
    <>
      <StudentHeader />
      <StudentMenu />
      <main className="dashboard-main">
        <AlertList />
      </main>
      <StudentFooter />
    </>
  );
}
export default withRouter(StudentInfo);
