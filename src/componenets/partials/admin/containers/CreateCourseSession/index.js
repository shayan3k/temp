import React from "react";

import AdminHeader from "../Header";
import AdminMenue from "../Menu";
import AdminFooter from "../Footer";

import CreateCourseSession from "../../components/CreateCourseSession";

export default function StudentInfo() {
  return (
    <>
      <AdminHeader />
      <AdminMenue />
      <main className="dashboard-main">
        <CreateCourseSession />
      </main>
      <AdminFooter />
    </>
  );
}
