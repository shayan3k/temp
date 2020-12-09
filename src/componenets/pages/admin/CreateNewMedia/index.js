import React from "react";
import { withRouter } from "react-router-dom";
import CreateNewMedia from "../../../partials/admin/containers/CreateNewMedia";

function Dashboard() {
  return <CreateNewMedia />;
}
export default withRouter(Dashboard);
