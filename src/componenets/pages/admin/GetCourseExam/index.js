import React from "react";
import { withRouter } from "react-router-dom";
import GetCourseExam from "../../../partials/admin/containers/GetCourseExam";

function Dashboard() {
  return <GetCourseExam />;
}
export default withRouter(Dashboard);
