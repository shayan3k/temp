import React from "react";
import { withRouter } from "react-router-dom";
import AdminGetSingleUser from "../../../partials/admin/containers/AdminGetSingleUser";

function Dashboard() {
  return <AdminGetSingleUser />;
}
export default withRouter(Dashboard);
