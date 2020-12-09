import React from "react";
import { withRouter } from "react-router-dom";
import UpdateGrade from "../../../partials/admin/containers/UpdateGrade";

function Dashboard() {
  return <UpdateGrade />;
}
export default withRouter(Dashboard);
