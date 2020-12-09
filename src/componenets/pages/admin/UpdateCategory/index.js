import React from "react";
import { withRouter } from "react-router-dom";
import UpdateCategory from "../../../partials/admin/containers/UpdateCategory";

function Dashboard() {
  return <UpdateCategory />;
}
export default withRouter(Dashboard);
