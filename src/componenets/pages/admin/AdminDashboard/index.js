import React from "react";
import { withRouter } from "react-router-dom";

import AdminDashboard from "../../../partials/admin/containers/AdminDashboard";

function Dashboard() {
  return <AdminDashboard />;
}
export default withRouter(Dashboard);
