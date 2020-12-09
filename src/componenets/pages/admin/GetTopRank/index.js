import React from "react";
import { withRouter } from "react-router-dom";
import GetTopRank from "../../../partials/admin/containers/GetTopRank";

function Dashboard() {
  return <GetTopRank />;
}
export default withRouter(Dashboard);
