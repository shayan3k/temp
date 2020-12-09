import React from "react";
import { withRouter } from "react-router-dom";

import CreatePopularCourse from "../../../partials/admin/containers/CreatePopularCourse";

function Dashboard() {
  return <CreatePopularCourse />;
}
export default withRouter(Dashboard);
