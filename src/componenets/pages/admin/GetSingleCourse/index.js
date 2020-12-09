import React from "react";
import { withRouter } from "react-router-dom";
import GetSingleCourse from "../../../partials/admin/containers/GetSingleCourse";

function Dashboard() {
  return <GetSingleCourse />;
}
export default withRouter(Dashboard);
