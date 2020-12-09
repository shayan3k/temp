import React from "react";
import { withRouter } from "react-router-dom";
import GetAllProvince from "../../../partials/admin/containers/GetAllProvince";

function Dashboard() {
  return <GetAllProvince />;
}
export default withRouter(Dashboard);
