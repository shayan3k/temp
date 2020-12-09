import React from "react";

import AdminHeader from "../Header";
import AdminMenue from "../Menu";
import AdminFooter from "../Footer";

import CreateGiftCode from "../../components/CreateGiftCode";

export default function StudentInfo() {
  return (
    <>
      <AdminHeader />
      <AdminMenue />
      <main className="dashboard-main">
        <CreateGiftCode />
      </main>
      <AdminFooter />
    </>
  );
}
