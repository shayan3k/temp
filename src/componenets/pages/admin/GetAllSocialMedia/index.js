import React from "react";
import { withRouter } from "react-router-dom";
import GetAllSocialMedia from "../../../partials/admin/containers/GetAllSocialMedia";

function Dashboard() {
  return <GetAllSocialMedia />;
}
export default withRouter(Dashboard);
