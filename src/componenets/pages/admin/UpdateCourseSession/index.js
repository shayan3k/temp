import React from "react";
import { withRouter } from "react-router-dom";
import UpdateCourseSession from "../../../partials/admin/containers/UpdateCourseSession";

function Dashboard() {
  return <UpdateCourseSession />;
}
export default withRouter(Dashboard);
