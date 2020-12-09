import React from "react";
import { withRouter } from "react-router-dom";
import UpdateMedia from "../../../partials/admin/containers/UpdateMedia";

function Dashboard() {
  return <UpdateMedia />;
}
export default withRouter(Dashboard);
