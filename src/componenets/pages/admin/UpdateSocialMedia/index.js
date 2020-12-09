import React from "react";
import { withRouter } from "react-router-dom";
import UpdateSocialMedia from "../../../partials/admin/containers/UpdateSocialMedia";

function Dashboard() {
  return <UpdateSocialMedia />;
}
export default withRouter(Dashboard);
