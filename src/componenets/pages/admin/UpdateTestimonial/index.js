import React from "react";
import { withRouter } from "react-router-dom";

import UpdateTestimonial from "../../../partials/admin/containers/UpdateTestimonial";

function Dashboard() {
  return <UpdateTestimonial />;
}
export default withRouter(Dashboard);
