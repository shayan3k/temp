import React from "react";
import { withRouter } from "react-router-dom";
import GetAllTeacher from "../../../partials/admin/containers/GetAllTeacher";

function Dashboard() {
  return <GetAllTeacher />;
}
export default withRouter(Dashboard);
