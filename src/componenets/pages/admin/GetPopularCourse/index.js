import React from "react";
import { withRouter } from "react-router-dom";
import GetPopularCourse from "../../../partials/admin/containers/GetPopularCourse";

function Dashboard() {
  return <GetPopularCourse />;
}
export default withRouter(Dashboard);
