import React from "react";
import { withRouter } from "react-router-dom";
import AdminDetailReportCard from "../../../partials/admin/containers/AdminDetailReportCard";

function Dashboard() {
  return <AdminDetailReportCard />;
}
export default withRouter(Dashboard);
