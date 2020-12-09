import React from "react";
import { withRouter } from "react-router-dom";
import GetAllGrade from "../../../partials/admin/containers/GetAllGrade";

function Dashboard() {
  return <GetAllGrade />;
}
export default withRouter(Dashboard);
