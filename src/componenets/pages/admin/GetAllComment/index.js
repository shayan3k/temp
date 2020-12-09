import React from "react";
import { withRouter } from "react-router-dom";
import GetAllComment from "../../../partials/admin/containers/GetAllComment";

function Dashboard() {
  return <GetAllComment />;
}
export default withRouter(Dashboard);
