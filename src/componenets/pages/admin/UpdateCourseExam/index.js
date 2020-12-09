import React from "react";
import { withRouter } from "react-router-dom";

import UpdateCourseExam from "../../../partials/admin/containers/UpdateCourseExam";

function Dashboard() {
  return <UpdateCourseExam />;
}
export default withRouter(Dashboard);
