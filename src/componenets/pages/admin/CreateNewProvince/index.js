import React from "react";
import { withRouter } from "react-router-dom";
import CreateNewProvince from "../../../partials/admin/containers/CreateNewProvince";

function Dashboard() {
  return <CreateNewProvince />;
}
export default withRouter(Dashboard);
