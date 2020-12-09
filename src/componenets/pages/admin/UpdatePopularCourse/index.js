import React from "react";
import { withRouter } from "react-router-dom";

import UpdatePopularCourse from "../../../partials/admin/containers/UpdatePopularCourse";

function Dashboard() {
  return <UpdatePopularCourse />;
}
export default withRouter(Dashboard);
