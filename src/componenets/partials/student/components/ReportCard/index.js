import React from "react";

function ReportCard() {
  return (
    <section className="form-wrapper has-icon wrapper report-wrapper">
      <h3 className="section-title report-title">کارنامه درس</h3>
      <h2 className="section-title report-course">نام درس</h2>
      <div className="container-fluid">
        <form className="row" action="." method="POST">
          <div className="col-md-12 form-group">
            <div className=" user-report-name">
              <label htmlFor="name">
                نام داوطلب<i className="icon-user"></i>
              </label>
              <input
                className="form-control"
                type="text"
                id="name"
                disabled
                value="نام داوطلب"
              />
            </div>
          </div>
          <div className="col-md-6 form-group">
            <label htmlFor="name">
              شروع درس<i className="icon-user"></i>
            </label>
            <input className="form-control" type="date" id="name" disabled />
          </div>
          <div className="col-md-6 form-group">
            <label htmlFor="name">
              پایان درس<i className="icon-user"></i>
            </label>
            <input className="form-control" type="date" id="name" disabled />
          </div>
          <div className="col-md-3 form-group">
            <label htmlFor="name">
              تعداد کل سوالات<i className="icon-user"></i>
            </label>
            <input
              className="form-control"
              type="number"
              id="name"
              disabled
              value="20"
            />
          </div>
          <div className="col-md-3 form-group">
            <label htmlFor="name">
              پاسخ های درست<i className="icon-user"></i>
            </label>
            <input
              className="form-control"
              type="number"
              id="name"
              disabled
              value="12"
            />
          </div>
          <div className="col-md-3 form-group">
            <label htmlFor="name">
              پاسخ های نادرست<i className="icon-user"></i>
            </label>
            <input
              className="form-control"
              type="number"
              id="name"
              disabled
              value="6"
            />
          </div>
          <div className="col-md-3 form-group">
            <label htmlFor="name">
              نمره کل<i className="icon-user"></i>
            </label>
            <input
              className="form-control"
              type="number"
              id="name"
              disabled
              value="9"
            />
          </div>
        </form>
      </div>
    </section>
  );
}
export default ReportCard;
