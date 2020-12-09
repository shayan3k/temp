import React from "react";

import StudentHeader from "../Header";
import StudentMenu from "../Menu";
import StudentFooter from "../Footer";

import GetDeposits from "../../components/GetDeposits";

export default function StudentInfo() {
  return (
    <>
      <StudentHeader />
      <StudentMenu />
      <main className="dashboard-main">
        <GetDeposits />
      </main>
      <StudentFooter />
    </>
  );
}
