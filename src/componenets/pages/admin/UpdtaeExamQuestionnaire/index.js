import React from "react";
import { withRouter } from "react-router-dom";

import UpdtaeExamQuestionnaire from "../../../partials/admin/containers/UpdtaeExamQuestionnaire";

function Dashboard() {
  return <UpdtaeExamQuestionnaire />;
}
export default withRouter(Dashboard);
