import React from "react";
import { withRouter } from "react-router-dom";
import CreateTopRank from "../../../partials/admin/containers/CreateTopRank";

function Dashboard() {
  return <CreateTopRank />;
}
export default withRouter(Dashboard);
