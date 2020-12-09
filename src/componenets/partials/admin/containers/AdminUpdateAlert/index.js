import React from "react";
import { withRouter } from "react-router-dom";
import StudentHeader from "../Header";
import StudentMenu from "../Menu";
import StudentFooter from "../Footer";

import CreateAlert from "../../components/CreateAlert";

function StudentInfo() {
  return (
    <>
      <StudentHeader />
      <StudentMenu />
      <main className="dashboard-main">
        <CreateAlert />
      </main>
      <StudentFooter />
    </>
  );
}
export default withRouter(StudentInfo);
