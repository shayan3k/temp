import React from "react";
import { withRouter } from "react-router-dom";
import AdminGetSingleAssignment from "../../../partials/admin/containers/AdminGetSingleAssignment";

function Dashboard() {
  return <AdminGetSingleAssignment />;
}
export default withRouter(Dashboard);
