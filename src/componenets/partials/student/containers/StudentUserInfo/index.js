import React from "react";

import StudentHeader from "../Header";
import StudentMenu from "../Menu";
import StudentFooter from "../Footer";

import StudentInfoForm from "../../components/StudentInfoForm";
import UpdateNationalID from "../../components/UpdateNationalID";
import "../../../../../assets/student/css/student_dashboard.scss";

export default function StudentInfo() {
  return (
    <>
      <StudentHeader />
      <StudentMenu />
      <main className="dashboard-main">
        <StudentInfoForm />
        <UpdateNationalID />
      </main>
      <StudentFooter />
    </>
  );
}
