import React from "react";
import { withRouter } from "react-router-dom";
import TeacherSinglePage from "../../../partials/public/containers/TeacherSingle";

function Dashboard() {
  return <TeacherSinglePage />;
}

export default withRouter(Dashboard);
