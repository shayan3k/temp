import React from "react";
import { withRouter } from "react-router-dom";
import AdminGetUserDeposit from "../../../partials/admin/containers/AdminGetUserDeposit";

function Dashboard() {
  return <AdminGetUserDeposit />;
}
export default withRouter(Dashboard);
