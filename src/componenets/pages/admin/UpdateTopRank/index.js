import React from "react";
import { withRouter } from "react-router-dom";
import UpdateTopRank from "../../../partials/admin/containers/UpdateTopRank";

function Dashboard() {
  return <UpdateTopRank />;
}
export default withRouter(Dashboard);
