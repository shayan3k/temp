import React from "react";

import StudentHeader from "../Header";
import StudentMenu from "../Menu";
import StudentFooter from "../Footer";

import GetEnrolledCourse from "../../components/GetEnrolledCourse";

export default function StudentInfo() {
  return (
    <>
      <StudentHeader />
      <StudentMenu />
      <main className="dashboard-main">
        <GetEnrolledCourse />
      </main>
      <StudentFooter />
    </>
  );
}
