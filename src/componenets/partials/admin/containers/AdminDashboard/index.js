import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import AdminHeader from "../Header";
import AdminMenue from "../Menu";
import AdminFooter from "../Footer";
import DataSet from "../../../shared/components/DataSet";
import Axios from "axios";

function Admin() {
  const [dashboardData, setDashboardData] = useState({
    peymentCount: 0,
    activeGiftCode: 0,
    activeUserCount: 0,
    assignmentCount: 0,
    blockedUserCount: 0,
    examCount: 0,
    examRecordCount: 0,
    finishedGiftCode: 0,
    sessionCount: 0,
    totalDashboardBalance: 0,
    totalGiftCodeValue: 0,
    totalPeyment: 0,
    courseCount: 0,
  });

  useEffect(() => {
    updateListComponent();
  }, []);

  const updateListComponent = async () => {
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_ADMIN_GET_DASHBOARD_STATISTICS,
      withCredentials: true,
      method: "POST",
    }).then((res) => {
      // console.log(res.data);
      try {
        setDashboardData(res.data.data);
      } catch (e) {}
    });
  };

  return (
    <div>
      <AdminHeader />
      <AdminMenue />
      <main className="dashboard-main">
        <section className="subset-wrapper">
          <h2 className="section-title mb-3 mt-5">اطلاعات کاربرها</h2>
          <div className="row px-0 mx-0 ">
            <div className="col-md-6 col-lg-4 my-2">
              <DataSet
                count={dashboardData?.activeUserCount}
                linkTo="/admin/user-list"
                title={"تعداد کاربر های اکتیو"}
              />
            </div>
            <div className="col-md-6 col-lg-4 my-2">
              <DataSet
                count={dashboardData?.blockedUserCount}
                linkTo="/admin/user-list"
                title={"تعداد کاربر های بلاک شده"}
              />
            </div>
            <div className="col-md-6 col-lg-4 my-2">
              <DataSet
                count={dashboardData?.peymentCount}
                linkTo="/admin/dashboard"
                title={"تعداد پرداختی ها"}
              />
            </div>
            <div className="col-md-6 col-lg-4 my-2">
              <DataSet
                count={dashboardData?.totalPeyment}
                // linkTo="/admin/dashboard"
                title={"مبلغ کل پرداختی ها"}
              />
            </div>
            <div className="col-md-6 col-lg-4 my-2">
              <DataSet
                count={dashboardData?.totalDashboardBalance}
                // linkTo="/admin/dashboard"
                title={"مبلغ فعلی کیف پول کاربران"}
              />
            </div>
          </div>
          <h2 className="section-title mb-3 mt-5">اطلاعات درس ها</h2>
          <div className="row px-0 mx-0 ">
            <div className="col-md-6 col-lg-4 my-2">
              <DataSet
                bgColor="gray"
                count={dashboardData?.courseCount}
                linkTo="/admin/get-all-course"
                title={"تعداد کل درس ها"}
              />
            </div>
            <div className="col-md-6 col-lg-4 my-2">
              <DataSet
                bgColor="gray"
                count={dashboardData?.sessionCount}
                // linkTo="/admin/dashboard"
                title={"تعداد کل جلسه ها"}
              />
            </div>
            <div className="col-md-6 col-lg-4 my-2">
              <DataSet
                bgColor="gray"
                count={dashboardData?.examCount}
                // linkTo="/admin/dashboard"
                title={"تعداد کل امتحان ها"}
              />
            </div>
            <div className="col-md-6 col-lg-4 my-2">
              <DataSet
                bgColor="gray"
                count={dashboardData?.assignmentCount}
                // linkTo="/admin/dashboard"
                title={"تعداد کل تکالیف ها"}
              />
            </div>
            <div className="col-md-6 col-lg-4 my-2">
              <DataSet
                bgColor="gray"
                count={dashboardData?.examRecordCount}
                // linkTo="/admin/dashboard"
                title={"تعداد کل کارنامه ها"}
              />
            </div>
          </div>
          <h2 className="section-title mb-3 mt-5">اطلاعات کارت های هدیه</h2>
          <div className="row px-0 mx-0 ">
            <div className="col-md-6 col-lg-4 my-2">
              <DataSet
                bgColor="red"
                count={dashboardData?.activeGiftCode}
                linkTo="/admin/get-gift-code"
                title={"تعداد کارت های هدیه اکتیو"}
              />
            </div>
            <div className="col-md-6 col-lg-4 my-2">
              <DataSet
                bgColor="red"
                count={dashboardData?.finishedGiftCode}
                linkTo="/admin/get-gift-code"
                title={"تعداد کارت های هدیه تمام شده"}
              />
            </div>
            <div className="col-md-6 col-lg-4 my-2">
              <DataSet
                bgColor="red"
                count={dashboardData?.totalGiftCodeValue}
                // linkTo="/admin/dashboard"
                title={"مبلغ کل کارت های هدیه"}
              />
            </div>
          </div>
        </section>
      </main>
      <AdminFooter />
    </div>
  );
}
export default withRouter(Admin);
