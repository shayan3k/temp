import React from "react";
import { withRouter } from "react-router-dom";
import GetAllCourse from "../../../partials/admin/containers/GetAllCourse";

function Dashboard() {
  return <GetAllCourse />;
}
export default withRouter(Dashboard);
