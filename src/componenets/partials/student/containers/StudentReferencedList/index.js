import React from "react";

import StudentHeader from "../Header";
import StudentMenu from "../Menu";
import StudentFooter from "../Footer";

import ReferencedUserList from "../../components/ReferencedUserList";

export default function StudentInfo() {
  return (
    <>
      <StudentHeader />
      <StudentMenu />
      <main className="dashboard-main">
        <ReferencedUserList />
      </main>
      <StudentFooter />
    </>
  );
}
