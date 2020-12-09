import React from "react";
import { withRouter } from "react-router-dom";

import StudentDetailReportCard from "../../../partials/student/containers/StudentDetailReportCard";

function Dashboard() {
  return <StudentDetailReportCard />;
}
export default withRouter(Dashboard);
