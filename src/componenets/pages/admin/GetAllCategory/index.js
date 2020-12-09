import React from "react";
import { withRouter } from "react-router-dom";
import GetAllCategory from "../../../partials/admin/containers/GetAllCategory";

function Dashboard() {
  return <GetAllCategory />;
}
export default withRouter(Dashboard);
