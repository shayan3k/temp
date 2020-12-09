import React from "react";
import { withRouter } from "react-router-dom";

import UpdateCommentReply from "../../../partials/admin/containers/UpdateCommentReply";

function Dashboard() {
  return <UpdateCommentReply />;
}
export default withRouter(Dashboard);
