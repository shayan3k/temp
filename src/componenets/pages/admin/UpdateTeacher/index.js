import React from "react";
import { withRouter } from "react-router-dom";

import UpdateTeacher from "../../../partials/admin/containers/UpdateTeacher";

function Dashboard() {
  return <UpdateTeacher />;
}
export default withRouter(Dashboard);
