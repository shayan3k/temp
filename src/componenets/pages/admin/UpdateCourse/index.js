import React from "react";
import { withRouter } from "react-router-dom";
import UpdateCourse from "../../../partials/admin/containers/UpdateCourse";

function Dashboard() {
  return <UpdateCourse />;
}
export default withRouter(Dashboard);
