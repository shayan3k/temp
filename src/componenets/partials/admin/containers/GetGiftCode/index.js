import React from "react";

import AdminHeader from "../Header";
import AdminMenue from "../Menu";
import AdminFooter from "../Footer";

import GetGiftCode from "../../components/GetGiftCode";

export default function StudentInfo() {
  return (
    <>
      <AdminHeader />
      <AdminMenue />
      <main className="dashboard-main">
        <GetGiftCode />
      </main>
      <AdminFooter />
    </>
  );
}
