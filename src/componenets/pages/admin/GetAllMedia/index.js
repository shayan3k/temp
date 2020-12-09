import React from "react";
import { withRouter } from "react-router-dom";
import GetAllMedia from "../../../partials/admin/containers/GetAllMedia";

function Dashboard() {
  return <GetAllMedia />;
}
export default withRouter(Dashboard);
