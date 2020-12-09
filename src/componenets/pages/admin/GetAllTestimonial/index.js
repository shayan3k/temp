import React from "react";
import { withRouter } from "react-router-dom";
import GetAllTestimonial from "../../../partials/admin/containers/GetAllTestimonial";

function Dashboard() {
  return <GetAllTestimonial />;
}
export default withRouter(Dashboard);
