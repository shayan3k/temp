import React from "react";
import { withRouter } from "react-router-dom";
import GetPopularTeacher from "../../../partials/admin/containers/GetPopularTeacher";

function Dashboard() {
  return <GetPopularTeacher />;
}
export default withRouter(Dashboard);
