import React from "react";
import { withRouter } from "react-router-dom";

import CreateCourseExam from "../../../partials/admin/containers/CreateCourseExam";

function Dashboard() {
  return <CreateCourseExam />;
}
export default withRouter(Dashboard);
