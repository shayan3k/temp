import React from "react";
import { withRouter } from "react-router-dom";

import SingleCourse from "../../../partials/public/containers/SingleCourse";

function Dashboard() {
  return <SingleCourse />;
}
export default withRouter(Dashboard);
