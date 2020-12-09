import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import StudentHeader from "../Header";
import StudentMenu from "../Menu";
import StudentFooter from "../Footer";

import ReferenceLink from "../../components/Link";
import ReferencedUsers from "../../components/ReferencedUsers";
import PeymentStatusAlert from "../../components/PeymentStatusAlert";
import qs from "qs";
import ChargeWallet from "../../components/ChargeWallet";
import StudentCalendar from "../../components/StudentCalendar";
import SubmitGiftCode from "../../components/SubmitGiftCode";
import ShowAdminAlert from "../../components/ShowAdminAlert";
import ActiveExams from "../../components/ActiveExams";

function Dashboard(props) {
  const [authority] = useState(
    qs.parse(props.location.search, { ignoreQueryPrefix: true }).Authority
  );
  const [status] = useState(
    qs.parse(props.location.search, { ignoreQueryPrefix: true }).Status
  );

  return (
    <>
      <StudentHeader />
      <StudentMenu />

      <main className="dashboard-main">
        <ActiveExams />

        {authority && status ? (
          <PeymentStatusAlert authority={authority} status={status} />
        ) : null}

        <ShowAdminAlert />
        <div className="row">
          <div className="col-md-6">
            <ReferencedUsers />
          </div>
          <div className="col-md-6">
            <ChargeWallet />
          </div>

          <div className="col-md-6">
            <SubmitGiftCode />
          </div>
          <div className="col-md-6">
            <ReferenceLink />
          </div>
        </div>

        <StudentCalendar />
      </main>
      <StudentFooter />
    </>
  );
}
export default withRouter(Dashboard);
