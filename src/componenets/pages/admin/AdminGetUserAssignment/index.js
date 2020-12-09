import React from "react";
import { withRouter } from "react-router-dom";
import AdminGetUserAssignment from "../../../partials/admin/containers/AdminGetUserAssignment";

function Dashboard() {
  return <AdminGetUserAssignment />;
}
export default withRouter(Dashboard);
