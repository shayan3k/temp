import React from "react";

import AdminHeader from "../Header";
import AdminMenue from "../Menu";
import AdminFooter from "../Footer";

import GiftCodeLogs from "../../components/GiftCodeLogs";

export default function StudentInfo() {
  return (
    <>
      <AdminHeader />
      <AdminMenue />
      <main className="dashboard-main">
        <GiftCodeLogs />
      </main>
      <AdminFooter />
    </>
  );
}
