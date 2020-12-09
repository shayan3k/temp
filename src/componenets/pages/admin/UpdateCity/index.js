import React from "react";
import { withRouter } from "react-router-dom";
import UpdateCity from "../../../partials/admin/containers/UpdateCity";

function Dashboard() {
  return <UpdateCity />;
}
export default withRouter(Dashboard);
