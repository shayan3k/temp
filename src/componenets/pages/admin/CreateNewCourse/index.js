import React from "react";
import { withRouter } from "react-router-dom";
import CreateNewCourse from "../../../partials/admin/containers/CreateNewCourse";

function Dashboard() {
  return <CreateNewCourse />;
}
export default withRouter(Dashboard);
