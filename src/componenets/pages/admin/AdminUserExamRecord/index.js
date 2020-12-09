import React from "react";
import { withRouter } from "react-router-dom";
import AdminUserExamRecord from "../../../partials/admin/containers/AdminUserExamRecord";

function Dashboard() {
  return <AdminUserExamRecord />;
}
export default withRouter(Dashboard);
