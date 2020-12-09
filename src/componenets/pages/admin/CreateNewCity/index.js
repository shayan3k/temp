import React from "react";
import { withRouter } from "react-router-dom";
import CreateNewCity from "../../../partials/admin/containers/CreateNewCity";

function Dashboard() {
  return <CreateNewCity />;
}
export default withRouter(Dashboard);
