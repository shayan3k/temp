import React from "react";
import { withRouter } from "react-router-dom";
import AdminCreateAlert from "../../../partials/admin/containers/AdminCreateAlert";

function Dashboard() {
  return <AdminCreateAlert />;
}
export default withRouter(Dashboard);
