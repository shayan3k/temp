import React from "react";
import { withRouter } from "react-router-dom";
import UpdateProvince from "../../../partials/admin/containers/UpdateProvince";

function Dashboard() {
  return <UpdateProvince />;
}
export default withRouter(Dashboard);
