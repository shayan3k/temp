import React from "react";
import { withRouter } from "react-router-dom";

import CreatePopularTeacher from "../../../partials/admin/containers/CreatePopularTeacher";

function Dashboard() {
  return <CreatePopularTeacher />;
}
export default withRouter(Dashboard);
