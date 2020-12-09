import React from "react";
import { withRouter } from "react-router-dom";

import CoursesList from "../../../partials/public/containers/CoursesList";

function Dashboard() {
  return <CoursesList />;
}
export default withRouter(Dashboard);
