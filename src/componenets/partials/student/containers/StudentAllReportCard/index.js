import React from "react";

import StudentHeader from "../Header";
import StudentMenu from "../Menu";
import StudentFooter from "../Footer";

import StudentAllReportCard from "../../components/StudentAllReportCard";

export default function StudentInfo() {
  return (
    <>
      <StudentHeader />
      <StudentMenu />
      <main className="dashboard-main">
        <StudentAllReportCard />
      </main>
      <StudentFooter />
    </>
  );
}
