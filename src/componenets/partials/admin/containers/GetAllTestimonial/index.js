import React from "react";
import { withRouter } from "react-router-dom";
import AdminHeader from "../Header";
import AdminMenue from "../Menu";
import AdminFooter from "../Footer";

import GetAllTestimonial from "../../components/GetAllTestimonial";

function StudentInfo() {
  return (
    <>
      <AdminHeader />
      <AdminMenue />
      <main className="dashboard-main">
        <GetAllTestimonial />
      </main>
      <AdminFooter />
    </>
  );
}
export default withRouter(StudentInfo);
