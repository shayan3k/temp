import React from "react";

import StudentHeader from "../Header";
import StudentMenu from "../Menu";
import StudentFooter from "../Footer";

import GiftCodeHistory from "../../components/GiftCodeHistory";

export default function StudentInfo() {
  return (
    <>
      <StudentHeader />
      <StudentMenu />
      <main className="dashboard-main">
        <GiftCodeHistory />
      </main>
      <StudentFooter />
    </>
  );
}
