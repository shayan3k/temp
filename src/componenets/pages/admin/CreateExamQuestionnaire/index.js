import React from "react";
import { withRouter } from "react-router-dom";

import CreateExamQuestionnaire from "../../../partials/admin/containers/CreateExamQuestionnaire";

function Dashboard() {
  return <CreateExamQuestionnaire />;
}
export default withRouter(Dashboard);
