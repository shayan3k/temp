import React from "react";
import { withRouter } from "react-router-dom";

import UpdatePopularTeacher from "../../../partials/admin/containers/UpdatePopularTeacher";

function Dashboard() {
  return <UpdatePopularTeacher />;
}
export default withRouter(Dashboard);
