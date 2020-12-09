import React from "react";

import AdminHeader from "../Header";
import AdminMenue from "../Menu";
import AdminFooter from "../Footer";

import UpdateIntroSection from "../../components/UpdateIntroSection";
import UpdateCountDown from "../../components/UpdateCountDown";
import UpdateAboutUs from "../../components/UpdateAboutUs";
import UpdateContactDetail from "../../components/UpdateContactDetail";
import UpdateSecondarySection from "../../components/UpdateSecondarySection";
import UpdateFreeSection from "../../components/UpdateFreeSection";
import UpdateRankSection from "../../components/UpdateRankSection";
import UpdateTeacherSection from "../../components/UpdateTeacherSection";

export default function StudentInfo() {
  return (
    <>
      <AdminHeader />
      <AdminMenue />
      <main className="dashboard-main editHomePage">
        <UpdateIntroSection />
        <UpdateSecondarySection />
        <UpdateTeacherSection />
        <UpdateFreeSection />
        <UpdateRankSection />
        <UpdateCountDown />
        <UpdateAboutUs />
        <UpdateContactDetail />
      </main>
      <AdminFooter />
    </>
  );
}
