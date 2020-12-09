import React from "react";
import { withRouter } from "react-router-dom";
import AdminUpdateAlert from "../../../partials/admin/containers/AdminUpdateAlert";

function Dashboard() {
  return <AdminUpdateAlert />;
}
export default withRouter(Dashboard);
