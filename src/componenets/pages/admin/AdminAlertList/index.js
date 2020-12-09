import React from "react";
import { withRouter } from "react-router-dom";
import AdminAlertList from "../../../partials/admin/containers/AdminAlertList";

function Dashboard() {
  return <AdminAlertList />;
}

export default withRouter(Dashboard);
