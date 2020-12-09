import React from "react";
import { withRouter } from "react-router-dom";

import GetUserGiftCodeLogs from "../../../partials/admin/containers/GetUserGiftCodeLogs";

function Dashboard() {
  return <GetUserGiftCodeLogs />;
}
export default withRouter(Dashboard);
