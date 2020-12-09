import React from "react";

import { withRouter } from "react-router-dom";
import ExamSingle from "../../../partials/public/containers/ExamSingle";

function Dashboard() {
  return <ExamSingle />;
}
export default withRouter(Dashboard);
