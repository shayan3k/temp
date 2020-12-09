import React from "react";

import StudentHeader from "../Header";
import StudentMenu from "../Menu";
import StudentFooter from "../Footer";

import NationalIDLIst from "../../components/NationalIDLIst";

export default function StudentInfo() {
  return (
    <>
      <StudentHeader />
      <StudentMenu />
      <main className="dashboard-main">
        <NationalIDLIst />
      </main>
      <StudentFooter />
    </>
  );
}
