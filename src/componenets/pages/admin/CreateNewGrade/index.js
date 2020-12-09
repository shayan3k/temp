import React from "react";
import { withRouter } from "react-router-dom";
import CreateNewGrade from "../../../partials/admin/containers/CreateNewGrade";

function Dashboard() {
  return <CreateNewGrade />;
}
export default withRouter(Dashboard);
