import React from "react";

import StudentHeader from "../Header";
import StudentMenu from "../Menu";
import StudentFooter from "../Footer";

import StudentGetAllAssignment from "../../components/StudentGetAllAssignment";

export default function StudentInfo() {
  return (
    <>
      <StudentHeader />
      <StudentMenu />
      <main className="dashboard-main">
        <StudentGetAllAssignment />
      </main>
      <StudentFooter />
    </>
  );
}
