import React from "react";
import { withRouter } from "react-router-dom";
import AdminGetUserEnrolledCourse from "../../../partials/admin/containers/AdminGetUserEnrolledCourse";

function Dashboard() {
  return <AdminGetUserEnrolledCourse />;
}
export default withRouter(Dashboard);
