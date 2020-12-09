import React from "react";
import { withRouter } from "react-router-dom";

import CreateNewTestimonial from "../../../partials/admin/containers/CreateNewTestimonial";

function Dashboard() {
  return <CreateNewTestimonial />;
}
export default withRouter(Dashboard);
