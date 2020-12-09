import React from "react";
import { withRouter } from "react-router-dom";

import CreateNewTeacher from "../../../partials/admin/containers/CreateNewTeacher";

function Dashboard() {
  return <CreateNewTeacher />;
}
export default withRouter(Dashboard);
