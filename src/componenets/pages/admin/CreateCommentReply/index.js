import React from "react";
import { withRouter } from "react-router-dom";

import CreateCommentReply from "../../../partials/admin/containers/CreateCommentReply";

function Dashboard() {
  return <CreateCommentReply />;
}
export default withRouter(Dashboard);
