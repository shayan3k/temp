import React from "react";
import { withRouter } from "react-router-dom";
import GetExamQuestionnaire from "../../../partials/admin/containers/GetExamQuestionnaire";

function Dashboard() {
  return <GetExamQuestionnaire />;
}
export default withRouter(Dashboard);
