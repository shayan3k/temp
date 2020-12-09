import React from "react";
import { withRouter } from "react-router-dom";
import CreateNewCategory from "../../../partials/admin/containers/CreateNewCategory";

function Dashboard() {
  return <CreateNewCategory />;
}
export default withRouter(Dashboard);
