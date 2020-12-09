import React from "react";
import { withRouter } from "react-router-dom";
import StudentHeader from "../Header";
import StudentMenu from "../Menu";
import StudentFooter from "../Footer";

import StudentDetailReportCard from "../../components/StudentDetailReportCard";

function StudentInfo() {
  return (
    <>
      <StudentHeader />
      <StudentMenu />
      <main className="dashboard-main">
        <StudentDetailReportCard />
      </main>
      <StudentFooter />
    </>
  );
}
export default withRouter(StudentInfo);
