import React from "react";
import { Link } from "react-router-dom";
// import "../assets/admin/css/style.scss";
function RouteLinks() {
  return (
    <div>
      <section className="index wv-100 hv-100">
        <nav className="container">
          <h4>Public Routes</h4>
          <ul className="row">
            <li className="col-6 col-md-4 text-center p-4 border d-flex justify-content-center align-items-center bg-primary">
              <Link className="text-white" to="/">
                Index Boys
              </Link>
            </li>
            <li className="col-6 col-md-4 text-center p-4 border d-flex justify-content-center align-items-center bg-primary">
              <Link className="text-white" to="/girls">
                Index Girl
              </Link>
            </li>
            <li className="col-6 col-md-4 text-center p-4 border d-flex justify-content-center align-items-center bg-primary">
              <Link className="text-white" to="/signin">
                signin
              </Link>
            </li>
            <li className="col-6 col-md-4 text-center p-4 border d-flex justify-content-center align-items-center bg-primary">
              <Link className="text-white" to="/signin/0912717126">
                signin 09127171206
              </Link>
            </li>

            <li className="col-6 col-md-4 text-center p-4 border d-flex justify-content-center align-items-center bg-primary">
              <Link className="text-white" to="/courses">
                Courses List
              </Link>
            </li>

            <li className="col-6 col-md-4 text-center p-4 border d-flex justify-content-center align-items-center bg-primary">
              <Link className="text-white" to="/about-us">
                About Page
              </Link>
            </li>

            <li className="col-6 col-md-4 text-center p-4 border d-flex justify-content-center align-items-center bg-primary">
              <Link className="text-white" to="/contact-us">
                Contact Page
              </Link>
            </li>

            <li className="col-6 col-md-4 text-center p-4 border d-flex justify-content-center align-items-center bg-primary">
              <Link className="text-white" to="/single-course">
                Single Course
              </Link>
            </li>

            <li className="col-6 col-md-4 text-center p-4 border d-flex justify-content-center align-items-center bg-primary">
              <Link className="text-white" to="/teachers">
                Teachers List
              </Link>
            </li>

            <li className="col-6 col-md-4 text-center p-4 border d-flex justify-content-center align-items-center bg-primary">
              <Link className="text-white" to="/single-teacher">
                Teachers Single
              </Link>
            </li>

            <li className="col-6 col-md-4 text-center p-4 border d-flex justify-content-center align-items-center bg-primary">
              <Link className="text-white" to="/single-exam">
                Exam Single
              </Link>
            </li>
          </ul>
        </nav>
        <br />
        <hr />
        <br />

        <nav className="container">
          <h4>Student Routes</h4>
          <ul className="row">
            <li className="col-6 col-md-4 text-center p-4 border d-flex justify-content-center align-items-center bg-success">
              <Link className="text-white" to="student/dashboard">
                Student/Dashboard
              </Link>
            </li>
            <li className="col-6 col-md-4 text-center p-4 border d-flex justify-content-center align-items-center bg-success">
              <Link className="text-white" to="student/user-info">
                Student/Userinfo
              </Link>
            </li>
            <li className="col-6 col-md-4 text-center p-4 border d-flex justify-content-center align-items-center bg-success">
              <Link className="text-white" to="student/referenced-list">
                Student/ReferencedList
              </Link>
            </li>
            <li className="col-6 col-md-4 text-center p-4 border d-flex justify-content-center align-items-center bg-success">
              <Link className="text-white" to="student/get_deposits">
                Student/GetDeposits
              </Link>
            </li>
            <li className="col-6 col-md-4 text-center p-4 border d-flex justify-content-center align-items-center bg-success">
              <Link className="text-white" to="student/gift-code-history">
                Student/GiftCodeHistory
              </Link>
            </li>

            <li className="col-6 col-md-4 text-center p-4 border d-flex justify-content-center align-items-center bg-success">
              <Link className="text-white" to="/student/all-report-card">
                Student/AllReportCard
              </Link>
            </li>

            <li className="col-6 col-md-4 text-center p-4 border d-flex justify-content-center align-items-center bg-success">
              <Link className="text-white" to="/student/get-enrolled-course">
                Student/GetEnrolledCourse
              </Link>
            </li>
            <li className="col-6 col-md-4 text-center p-4 border d-flex justify-content-center align-items-center bg-success">
              <Link className="text-white" to="/student/get-all-assignment">
                Student/Get All Assignment
              </Link>
            </li>
          </ul>
        </nav>
        <br />
        <hr />
        <br />

        <nav className="container">
          <h4>Admin Routes</h4>

          <ul className="row">
            <li className="col-6 col-md-4 text-center p-4 border d-flex justify-content-center align-items-center bg-dark">
              <Link className="text-white" to="admin/dashboard">
                Admin/Dashboard
              </Link>
            </li>
            <li className="col-6 col-md-4 text-center p-4 border d-flex justify-content-center align-items-center bg-dark">
              <Link className="text-white" to="admin/create-alert">
                Admin/CreateAlert
              </Link>
            </li>
            <li className="col-6 col-md-4 text-center p-4 border d-flex justify-content-center align-items-center bg-dark">
              <Link className="text-white" to="/admin/alert-list">
                Admin/Alert List
              </Link>
            </li>
            <li className="col-6 col-md-4 text-center p-4 border d-flex justify-content-center align-items-center bg-dark">
              <Link className="text-white" to="admin/user-list">
                Admin/Userlist
              </Link>
            </li>
            <li className="col-6 col-md-4 text-center p-4 border d-flex justify-content-center align-items-center bg-dark">
              <Link className="text-white" to="admin/national-id">
                Admin/NationalId
              </Link>
            </li>
            <li className="col-6 col-md-4 text-center p-4 border d-flex justify-content-center align-items-center bg-dark">
              <Link className="text-white" to="/admin/get-gift-code">
                admin/Get Gift Code
              </Link>
            </li>
            <li className="col-6 col-md-4 text-center p-4 border d-flex justify-content-center align-items-center bg-dark">
              <Link className="text-white" to="/admin/get-gift-code-logs">
                admin/Get Gift Code Logs
              </Link>
            </li>

            <li className="col-6 col-md-4 text-center p-4 border d-flex justify-content-center align-items-center bg-dark">
              <Link className="text-white" to="/admin/create-new-teacher">
                admin/Create New Teacher
              </Link>
            </li>
            <li className="col-6 col-md-4 text-center p-4 border d-flex justify-content-center align-items-center bg-dark">
              <Link className="text-white" to="/admin/get-all-teacher">
                admin/Get All Teacher
              </Link>
            </li>
            <li className="col-6 col-md-4 text-center p-4 border d-flex justify-content-center align-items-center bg-dark">
              <Link className="text-white" to="/admin/get-all-comment">
                admin/Get All Comment
              </Link>
            </li>

            <li className="col-6 col-md-4 text-center p-4 border d-flex justify-content-center align-items-center bg-dark">
              <Link className="text-white" to="/admin/get-all-category">
                admin/Get All Category
              </Link>
            </li>
            <li className="col-6 col-md-4 text-center p-4 border d-flex justify-content-center align-items-center bg-dark">
              <Link className="text-white" to="/admin/create-new-category">
                admin/Create New Category
              </Link>
            </li>

            <li className="col-6 col-md-4 text-center p-4 border d-flex justify-content-center align-items-center bg-dark">
              <Link className="text-white" to="/admin/get-all-grade">
                admin/Get All Grade
              </Link>
            </li>
            <li className="col-6 col-md-4 text-center p-4 border d-flex justify-content-center align-items-center bg-dark">
              <Link className="text-white" to="/admin/get-all-course">
                admin/Get All Course
              </Link>
            </li>
            <li className="col-6 col-md-4 text-center p-4 border d-flex justify-content-center align-items-center bg-dark">
              <Link className="text-white" to="/admin/create-new-course">
                admin/create new course
              </Link>
            </li>

            <li className="col-6 col-md-4 text-center p-4 border d-flex justify-content-center align-items-center bg-dark">
              <Link className="text-white" to="/admin/create-gift-code">
                admin/Create Gift Code
              </Link>
            </li>
            <li className="col-6 col-md-4 text-center p-4 border d-flex justify-content-center align-items-center bg-dark">
              <Link className="text-white" to="/admin/home-page-setting">
                admin/Home Page Setting
              </Link>
            </li>
            <li className="col-6 col-md-4 text-center p-4 border d-flex justify-content-center align-items-center bg-dark">
              <Link className="text-white" to="/admin/get-all-testimonial">
                admin/Get All Testimonial
              </Link>
            </li>
            <li className="col-6 col-md-4 text-center p-4 border d-flex justify-content-center align-items-center bg-dark">
              <Link className="text-white" to="/admin/create-new-testimonial">
                admin/Create New Testimonial
              </Link>
            </li>
            <li className="col-6 col-md-4 text-center p-4 border d-flex justify-content-center align-items-center bg-dark">
              <Link className="text-white" to="/admin/get-popular-course">
                admin/Get Popular Course
              </Link>
            </li>
            <li className="col-6 col-md-4 text-center p-4 border d-flex justify-content-center align-items-center bg-dark">
              <Link className="text-white" to="/admin/create-popular-course">
                admin/Create Popular Course
              </Link>
            </li>
            <li className="col-6 col-md-4 text-center p-4 border d-flex justify-content-center align-items-center bg-dark">
              <Link className="text-white" to="/admin/get-popular-teacher">
                admin/Get Popular Teacher
              </Link>
            </li>
            <li className="col-6 col-md-4 text-center p-4 border d-flex justify-content-center align-items-center bg-dark">
              <Link className="text-white" to="/admin/get-social-media">
                admin/Get Social Media
              </Link>
            </li>
            <li className="col-6 col-md-4 text-center p-4 border d-flex justify-content-center align-items-center bg-dark">
              <Link className="text-white" to="/admin/create-social-media">
                admin/Create Social Media
              </Link>
            </li>

            <li className="col-6 col-md-4 text-center p-4 border d-flex justify-content-center align-items-center bg-dark">
              <Link className="text-white" to="/admin/get-exam-questionnaire">
                admin/Get Exam Questionnaire
              </Link>
            </li>

            <li className="col-6 col-md-4 text-center p-4 border d-flex justify-content-center align-items-center bg-dark">
              <Link className="text-white" to="/admin/get-top-rank">
                admin/Get Top Rank
              </Link>
            </li>
            <li className="col-6 col-md-4 text-center p-4 border d-flex justify-content-center align-items-center bg-dark">
              <Link className="text-white" to="/admin/create-top-rank">
                admin/Create Top Rank
              </Link>
            </li>
            <li className="col-6 col-md-4 text-center p-4 border d-flex justify-content-center align-items-center bg-dark">
              <Link className="text-white" to="/admin/get-all-media">
                admin/Get All Media
              </Link>
            </li>
            <li className="col-6 col-md-4 text-center p-4 border d-flex justify-content-center align-items-center bg-dark">
              <Link className="text-white" to="/admin/create-new-media">
                admin/Create New Media
              </Link>
            </li>
            <li className="col-6 col-md-4 text-center p-4 border d-flex justify-content-center align-items-center bg-dark">
              <Link className="text-white" to="/admin/get-all-city">
                admin/Get All City
              </Link>
            </li>
            <li className="col-6 col-md-4 text-center p-4 border d-flex justify-content-center align-items-center bg-dark">
              <Link className="text-white" to="/admin/create-new-city">
                admin/Create New City
              </Link>
            </li>
            <li className="col-6 col-md-4 text-center p-4 border d-flex justify-content-center align-items-center bg-dark">
              <Link className="text-white" to="/admin/get-all-province">
                admin/ Get All Province
              </Link>
            </li>
            <li className="col-6 col-md-4 text-center p-4 border d-flex justify-content-center align-items-center bg-dark">
              <Link className="text-white" to="/admin/create-new-province">
                admin/Create New Province
              </Link>
            </li>
            <li className="col-6 col-md-4 text-center p-4 border d-flex justify-content-center align-items-center bg-dark">
              <Link className="text-white" to="/admin/all-report-card">
                admin/All Report Card
              </Link>
            </li>
            <li className="col-6 col-md-4 text-center p-4 border d-flex justify-content-center align-items-center bg-dark">
              <Link className="text-white" to="/admin/get-all-assignment">
                admin/Get All Assignment
              </Link>
            </li>
            <li className="col-6 col-md-4 text-center p-4 border d-flex justify-content-center align-items-center bg-dark">
              <Link className="text-white" to="/admin/get-all-deposit">
                admin/Get All Deposit
              </Link>
            </li>
            <li className="col-6 col-md-4 text-center p-4 border d-flex justify-content-center align-items-center bg-dark">
              <Link className="text-white" to="/admin/update-admin-information">
                admin/Update Admin Information
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  );
}
export default RouteLinks;
