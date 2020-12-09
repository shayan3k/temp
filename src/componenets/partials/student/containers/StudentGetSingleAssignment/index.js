import React from "react";

import StudentHeader from "../Header";
import StudentMenu from "../Menu";
import StudentFooter from "../Footer";

import StudentGetSingleAssignment from "../../components/StudentGetSingleAssignment";

export default function StudentInfo() {
  return (
    <>
      <StudentHeader />
      <StudentMenu />
      <main className="dashboard-main">
        <StudentGetSingleAssignment />
      </main>
      <StudentFooter />
    </>
  );
}
