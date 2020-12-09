import React from "react";
import { withRouter } from "react-router-dom";
import GetAllCity from "../../../partials/admin/containers/GetAllCity";

function Dashboard() {
  return <GetAllCity />;
}
export default withRouter(Dashboard);
