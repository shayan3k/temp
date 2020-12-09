import React from "react";
import { withRouter } from "react-router-dom";
import CreateSocialMedia from "../../../partials/admin/containers/CreateSocialMedia";

function Dashboard() {
  return <CreateSocialMedia />;
}
export default withRouter(Dashboard);
