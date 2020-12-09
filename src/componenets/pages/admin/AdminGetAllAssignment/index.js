import React from "react";
import { withRouter } from "react-router-dom";
import AdminGetAllAssignment from "../../../partials/admin/containers/AdminGetAllAssignment";

function Dashboard() {
  return <AdminGetAllAssignment />;
}
export default withRouter(Dashboard);
