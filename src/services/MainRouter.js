import React from "react";
import { Route, Switch } from "react-router-dom";
import createLazyContainer from "react-lazy-import";

import HomePage from "../componenets/partials/public/containers/HomePage";
import GirlPage from "../componenets/partials/public/containers/GirlPage";

import StudentDashboard from "../componenets/partials/student/containers/StudentDashboard";
import StudentUserInfo from "../componenets/partials/student/containers/StudentUserInfo";
import StudentReferencedList from "../componenets/partials/student/containers/StudentReferencedList";
import StudentGetDeposits from "../componenets/partials/student/containers/StudentGetDeposits";
import StudentGiftCodeHistory from "../componenets/partials/student/containers/StudentGiftCodeHistory";
import StudentAllReportCard from "../componenets/partials/student/containers/StudentAllReportCard";
import StudentDetailReportCard from "../componenets/partials/student/containers/StudentDetailReportCard";
import GetEnrolledCourse from "../componenets/partials/student/containers/GetEnrolledCourse";
import StudentGetAllAssignment from "../componenets/partials/student/containers/StudentGetAllAssignment";
import StudentGetSingleAssignment from "../componenets/partials/student/containers/StudentGetSingleAssignment";

import AdminDashboard from "../componenets/partials/admin/containers/AdminDashboard";
import AdminUserList from "../componenets/partials/admin/containers/AdminStudentList";
import AdminNationalID from "../componenets/partials/admin/containers/AdminNationalIDList";
import AdminCreateAlert from "../componenets/partials/admin/containers/AdminCreateAlert";
import AdminAlertList from "../componenets/partials/admin/containers/AdminAlertList";
import AdminUpdateAlert from "../componenets/partials/admin/containers/AdminUpdateAlert";
import GetGiftCodeLogs from "../componenets/partials/admin/containers/GetGiftCodeLogs";
import GetUserGiftCodeLogs from "../componenets/partials/admin/containers/GetUserGiftCodeLogs";
import CreateNewTeacher from "../componenets/partials/admin/containers/CreateNewTeacher";
import UpdateTeacher from "../componenets/partials/admin/containers/UpdateTeacher";
import GetAllTeacher from "../componenets/partials/admin/containers/GetAllTeacher";
import GetAllComment from "../componenets/partials/admin/containers/GetAllComment";
import CreateCommentReply from "../componenets/partials/admin/containers/CreateCommentReply";
import UpdateCommentReply from "../componenets/partials/admin/containers/UpdateCommentReply";
import GetAllCategory from "../componenets/partials/admin/containers/GetAllCategory";
import GetAllTestimonial from "../componenets/partials/admin/containers/GetAllTestimonial";
import CreateNewTestimonial from "../componenets/partials/admin/containers/CreateNewTestimonial";
import UpdateTestimonial from "../componenets/partials/admin/containers/UpdateTestimonial";
import CreateNewCategory from "../componenets/partials/admin/containers/CreateNewCategory";
import UpdateCategory from "../componenets/partials/admin/containers/UpdateCategory";
import CreateNewGrade from "../componenets/partials/admin/containers/CreateNewGrade";
import UpdateGrade from "../componenets/partials/admin/containers/UpdateGrade";
import GetAllGrade from "../componenets/partials/admin/containers/GetAllGrade";
import CreateNewCourse from "../componenets/partials/admin/containers/CreateNewCourse";
import UpdateCourse from "../componenets/partials/admin/containers/UpdateCourse";
import CreateCourseSession from "../componenets/partials/admin/containers/CreateCourseSession";
import UpdateCourseSession from "../componenets/partials/admin/containers/UpdateCourseSession";
import CreateGiftCode from "../componenets/partials/admin/containers/CreateGiftCode";
import GetAllCourse from "../componenets/partials/admin/containers/GetAllCourse";
import GetSingleCourse from "../componenets/partials/admin/containers/GetSingleCourse";
import GetGiftCode from "../componenets/partials/admin/containers/GetGiftCode";
import HomePageSetting from "../componenets/partials/admin/containers/HomePageSetting";
import GetPopularCourse from "../componenets/partials/admin/containers/GetPopularCourse";
import CreatePopularCourse from "../componenets/partials/admin/containers/CreatePopularCourse";
import UpdatePopularCourse from "../componenets/partials/admin/containers/UpdatePopularCourse";
import GetPopularTeacher from "../componenets/partials/admin/containers/GetPopularTeacher";
import CreatePopularTeacher from "../componenets/partials/admin/containers/CreatePopularTeacher";
import UpdatePopularTeacher from "../componenets/partials/admin/containers/UpdatePopularTeacher";
import GetAllSocialMedia from "../componenets/partials/admin/containers/GetAllSocialMedia";
import CreateSocialMedia from "../componenets/partials/admin/containers/CreateSocialMedia";
import UpdateSocialMedia from "../componenets/partials/admin/containers/UpdateSocialMedia";
import GetCourseExam from "../componenets/partials/admin/containers/GetCourseExam";
import CreateCourseExam from "../componenets/partials/admin/containers/CreateCourseExam";
import UpdateCourseExam from "../componenets/partials/admin/containers/UpdateCourseExam";
import GetExamQuestionnaire from "../componenets/partials/admin/containers/GetExamQuestionnaire";
import CreateExamQuestionnaire from "../componenets/partials/admin/containers/CreateExamQuestionnaire";
import UpdtaeExamQuestionnaire from "../componenets/partials/admin/containers/UpdtaeExamQuestionnaire";
import GetTopRank from "../componenets/partials/admin/containers/GetTopRank";
import CreateTopRank from "../componenets/partials/admin/containers/CreateTopRank";
import UpdateTopRank from "../componenets/partials/admin/containers/UpdateTopRank";
import GetAllMedia from "../componenets/partials/admin/containers/GetAllMedia";
import CreateNewMedia from "../componenets/partials/admin/containers/CreateNewMedia";
import UpdateMedia from "../componenets/partials/admin/containers/UpdateMedia";
import GetAllCity from "../componenets/partials/admin/containers/GetAllCity";
import CreateNewCity from "../componenets/partials/admin/containers/CreateNewCity";
import UpdateCity from "../componenets/partials/admin/containers/UpdateCity";
import GetAllProvince from "../componenets/partials/admin/containers/GetAllProvince";
import CreateNewProvince from "../componenets/partials/admin/containers/CreateNewProvince";
import UpdateProvince from "../componenets/partials/admin/containers/UpdateProvince";
import AdminAllReportCard from "../componenets/partials/admin/containers/AdminAllReportCard";
import AdminGetCourseRecord from "../componenets/partials/admin/containers/AdminGetCourseRecord";
import AdminUserExamRecord from "../componenets/partials/admin/containers/AdminUserExamRecord";
import AdminDetailReportCard from "../componenets/partials/admin/containers/AdminDetailReportCard";
import AdminGetAllAssignment from "../componenets/partials/admin/containers/AdminGetAllAssignment";
import AdminGetAllEnrollment from "../componenets/partials/admin/containers/AdminGetAllEnrollment";
import AdminGetUserAssignment from "../componenets/partials/admin/containers/AdminGetUserAssignment";
import AdminGetCourseAssignment from "../componenets/partials/admin/containers/AdminGetCourseAssignment";
import AdminGetSingleAssignment from "../componenets/partials/admin/containers/AdminGetSingleAssignment";
import AdminGetUserEnrolledCourse from "../componenets/partials/admin/containers/AdminGetUserEnrolledCourse";
import AdminGetUserDeposit from "../componenets/partials/admin/containers/AdminGetUserDeposit";
import AdminGetAllDeposit from "../componenets/partials/admin/containers/AdminGetAllDeposit";
import AdminGetSingleUser from "../componenets/partials/admin/containers/AdminGetSingleUser";
import AdminUpdateAdminInformation from "../componenets/partials/admin/containers/AdminUpdateAdminInformation";

import SigninPrivateRoute from "../utils/SigninPrivateRoute";
import StudentPrivateRoute from "../utils/StudentPrivateRoute";
import AdminPrivateRoute from "../utils/AdminPrivateRoute";

import NotFoundPage from "../componenets/partials/shared/components/NotFoundPage";
import RouteLinks from "./RouterLinks";

// New Components
import CoursesList from "../componenets/pages/public/CoursesList";
import SingleCourse from "../componenets/pages/public/SingleCourse";
import AboutPage from "../componenets/pages/public/AboutPage";
import ContactPage from "../componenets/pages/public/ContactPage";
import TeachersPage from "../componenets/pages/public/TeachersList";
import TeacherSingle from "../componenets/pages/public/TeacherSingle";
import ExamSingle from "../componenets/pages/public/ExamSingle";
import Loading from "../componenets/partials/shared/components/Loading";
import Error from "../componenets/partials/shared/components/NotFoundPage";
import AdminGetUserEnrollment from "../componenets/partials/admin/containers/AdminGetUserEnrollment";

export default function MainRouter(props) {
  // const { isAuthenticated, userRole } = props;

  const SignIn = createLazyContainer(
    () => import("../componenets/pages/public/SignIn"),
    Loading,
    Error
  );

  return (
    <Switch>
      {/* Just for test  */}

      {/* Public routes */}
      {/* index */}
      <Route
        exact
        path="/"
        name="index"
        render={(props) => {
          return <GirlPage {...props} />;
        }}
      />
      {/* GIRL TEST */}
      <Route
        exact
        path="/boys"
        name="boysIndex"
        render={(props) => {
          return <HomePage {...props} />;
        }}
      />
      {/* Login Route */}
      <Route
        exact
        path="/signin"
        name="signin"
        render={(props) => (
          <SigninPrivateRoute>
            <SignIn {...props} />
          </SigninPrivateRoute>
        )}
      />
      {/* Login Route */}
      <Route
        exact
        path="/signin/:id"
        name="signin"
        render={(props) => (
          <SigninPrivateRoute>
            <SignIn {...props} />
          </SigninPrivateRoute>
        )}
      />
      {/* Links */}
      <Route
        exact
        path="/links"
        name="links"
        render={(props) => {
          return <RouteLinks {...props} />;
        }}
      />
      {/* list for courses */}
      <Route
        exact
        path="/courses"
        name="courses"
        render={(props) => {
          return <CoursesList title="لیست درس ها" {...props} />;
        }}
      />
      <Route
        exact
        path="/single-course/:id"
        name="singleCourse"
        render={(props) => {
          return <SingleCourse title="صفحه سینگل درس" {...props} />;
        }}
      />
      <Route
        exact
        path="/about-us"
        name="aboutUs"
        render={(props) => {
          return <AboutPage title="درباره ما" {...props} />;
        }}
      />
      <Route
        exact
        path="/contact-us"
        name="contactUs"
        render={(props) => {
          return <ContactPage title="تماس با ما" {...props} />;
        }}
      />
      <Route
        exact
        path="/teachers"
        name="teachers"
        render={(props) => {
          return <TeachersPage title="لیست دبیران" {...props} />;
        }}
      />
      <Route
        exact
        path="/single-teacher/:id"
        name="singleTeacher"
        render={(props) => {
          return <TeacherSingle title="اسم دبیر در این قسمت" {...props} />;
        }}
      />
      {/* Student stake the exam */}
      <Route
        exact
        path="/single-exam/:courseId/:examId"
        name="singleExam"
        render={(props) => (
          <StudentPrivateRoute>
            <ExamSingle title="صفحه آزمون آنلاین" {...props} />
          </StudentPrivateRoute>
        )}
      />
      {/* STUDENT ROUTES */}
      {/* admin dashboard */}
      <Route
        exact
        path="/student/dashboard"
        name="studentDashboard"
        render={(props) => (
          <StudentPrivateRoute>
            <StudentDashboard {...props} />
          </StudentPrivateRoute>
        )}
      />
      <Route
        exact
        path="/student/user-info"
        name="studentUserInfo"
        render={(props) => (
          <StudentPrivateRoute>
            <StudentUserInfo {...props} />
          </StudentPrivateRoute>
        )}
      />
      {/* Student Referenced list */}
      <Route
        exact
        path="/student/referenced-list"
        name="studentReferencedList"
        render={(props) => (
          <StudentPrivateRoute>
            <StudentReferencedList {...props} />
          </StudentPrivateRoute>
        )}
      />
      {/* Student Get Deposit History */}
      <Route
        exact
        path="/student/get_deposits"
        name="studentGetDeposits"
        render={(props) => (
          <StudentPrivateRoute>
            <StudentGetDeposits {...props} />
          </StudentPrivateRoute>
        )}
      />
      {/* Student Gift Code History */}
      <Route
        exact
        path="/student/gift-code-history"
        name="GiftCodeHistory"
        render={(props) => (
          <StudentPrivateRoute>
            <StudentGiftCodeHistory {...props} />
          </StudentPrivateRoute>
        )}
      />
      {/* Student All Report Card  کارنامه */}
      <Route
        exact
        path="/student/all-report-card"
        name="StudentAllReportCard"
        render={(props) => (
          <StudentPrivateRoute>
            <StudentAllReportCard {...props} />
          </StudentPrivateRoute>
        )}
      />
      {/* Student Get All Assignment */}
      <Route
        exact
        path="/student/get-all-assignment"
        name="StudentGetAllAssignment"
        render={(props) => (
          <StudentPrivateRoute>
            <StudentGetAllAssignment {...props} />
          </StudentPrivateRoute>
        )}
      />
      {/* Student Get Single Assignment */}
      <Route
        exact
        path="/student/get-single-assignment/:id"
        name="getSingleAssignment"
        render={(props) => (
          <StudentPrivateRoute>
            <StudentGetSingleAssignment {...props} />
          </StudentPrivateRoute>
        )}
      />
      {/* Student Detail Report Card  کارنامه */}
      <Route
        exact
        path="/student/detail-report-card/:reportId/:examId"
        name="StudentDetailReportCard"
        render={(props) => (
          <StudentPrivateRoute>
            <StudentDetailReportCard {...props} />
          </StudentPrivateRoute>
        )}
      />
      {/* Student Get Enrolled Course */}
      <Route
        exact
        path="/student/get-enrolled-course"
        name="getEnrolledCourse"
        render={(props) => (
          <StudentPrivateRoute>
            <GetEnrolledCourse {...props} />
          </StudentPrivateRoute>
        )}
      />
      {/* Student Gift Code History */}
      <Route
        exact
        path="/student/gift-code-history"
        name="GiftCodeHistory"
        render={(props) => (
          <StudentPrivateRoute>
            <StudentGiftCodeHistory {...props} />
          </StudentPrivateRoute>
        )}
      />
      {/* ADMIN ROUTES */}
      {/* Admin Dashboard */}
      <Route
        exact
        path="/admin/dashboard"
        name="adminDashboard"
        render={(props) => (
          <AdminPrivateRoute>
            <AdminDashboard {...props} />
          </AdminPrivateRoute>
        )}
      />
      {/* Userlist for admin */}
      <Route
        exact
        path="/admin/user-list"
        name="adminUserList"
        render={(props) => (
          <AdminPrivateRoute>
            <AdminUserList {...props} />
          </AdminPrivateRoute>
        )}
      />
      {/* Admin Creates Alert */}
      <Route
        exact
        path="/admin/create-alert"
        name="adminCreateAlert"
        render={(props) => (
          <AdminPrivateRoute>
            <AdminCreateAlert {...props} />
          </AdminPrivateRoute>
        )}
      />
      {/* Admin  Alert List */}
      <Route
        exact
        path="/admin/alert-list"
        name="adminAlertList"
        render={(props) => (
          <AdminPrivateRoute>
            <AdminAlertList {...props} />
          </AdminPrivateRoute>
        )}
      />
      {/* Admin Update Alert */}
      <Route
        exact
        path="/admin/update-alert/:id"
        name="adminUpdateAlert"
        render={(props) => (
          <AdminPrivateRoute>
            <AdminUpdateAlert {...props} />
          </AdminPrivateRoute>
        )}
      />
      {/* Admin Review National Ids */}
      <Route
        exact
        path="/admin/national-id"
        name="adminNationalId"
        render={(props) => (
          <AdminPrivateRoute>
            <AdminNationalID {...props} />
          </AdminPrivateRoute>
        )}
      />
      {/* Admin Create Gift Code */}
      <Route
        exact
        path="/admin/create-gift-code"
        name="adminCreateGiftCode"
        render={(props) => (
          <AdminPrivateRoute>
            <CreateGiftCode {...props} />
          </AdminPrivateRoute>
        )}
      />
      {/* Admin Get Ongoing Gift Code */}
      <Route
        exact
        path="/admin/get-gift-code"
        name="adminGetGiftCode"
        render={(props) => (
          <AdminPrivateRoute>
            <GetGiftCode {...props} />
          </AdminPrivateRoute>
        )}
      />
      {/* Admin Get Gift Code Logs */}
      <Route
        exact
        path="/admin/get-gift-code-logs"
        name="adminGetCodeLogs"
        render={(props) => (
          <AdminPrivateRoute>
            <GetGiftCodeLogs {...props} />
          </AdminPrivateRoute>
        )}
      />
      {/* Admin Get User Gift Code Logs */}
      <Route
        exact
        path="/admin/get-user-gift-code-logs/:id"
        name="adminGetCodeLogsSingle"
        render={(props) => (
          <AdminPrivateRoute>
            <GetUserGiftCodeLogs {...props} />
          </AdminPrivateRoute>
        )}
      />
      {/* Admin Get All Teacher  */}
      <Route
        exact
        path="/admin/get-all-teacher"
        name="adminGetAllTeacher"
        render={(props) => (
          <AdminPrivateRoute>
            <GetAllTeacher {...props} />
          </AdminPrivateRoute>
        )}
      />
      {/* Admin Create New Teacher */}
      <Route
        exact
        path="/admin/create-new-teacher"
        name="adminCreateNewTeacher"
        render={(props) => (
          <AdminPrivateRoute>
            <CreateNewTeacher {...props} />
          </AdminPrivateRoute>
        )}
      />
      {/* Admin Update Teacher */}
      <Route
        exact
        path="/admin/update-teacher/:id"
        name="adminUpdateTeacher"
        render={(props) => (
          <AdminPrivateRoute>
            <UpdateTeacher {...props} />
          </AdminPrivateRoute>
        )}
      />
      {/* Admin Home Page Setting */}
      <Route
        exact
        path="/admin/home-page-setting"
        name="adminHomePageSetting"
        render={(props) => (
          <AdminPrivateRoute>
            <HomePageSetting {...props} />
          </AdminPrivateRoute>
        )}
      />
      {/* Admin Get All Comment  */}
      <Route
        exact
        path="/admin/get-all-comment"
        name="adminGetAllComment"
        render={(props) => (
          <AdminPrivateRoute>
            <GetAllComment {...props} />
          </AdminPrivateRoute>
        )}
      />
      {/* Admin Create Comment Replay  */}
      <Route
        exact
        path="/admin/create-comment-reply"
        name="adminCreateCommentReply"
        render={(props) => (
          <AdminPrivateRoute>
            <CreateCommentReply {...props} />
          </AdminPrivateRoute>
        )}
      />
      {/* Admin Update Comment Replay  */}
      <Route
        exact
        path="/admin/update-comment-reply/:comment_id/:comment_reply_id"
        name="adminUpdateCommentReply"
        render={(props) => (
          <AdminPrivateRoute>
            <UpdateCommentReply {...props} />
          </AdminPrivateRoute>
        )}
      />
      {/* Admin Get All Category */}
      <Route
        exact
        path="/admin/get-all-category"
        name="adminGetAllCategory"
        render={(props) => (
          <AdminPrivateRoute>
            <GetAllCategory {...props} />
          </AdminPrivateRoute>
        )}
      />
      {/* Admin Create New Category */}
      <Route
        exact
        path="/admin/create-new-category/:id?"
        name="adminCreateNewCategory"
        render={(props) => (
          <AdminPrivateRoute>
            <CreateNewCategory {...props} />
          </AdminPrivateRoute>
        )}
      />
      {/* Admin Update Category */}
      <Route
        exact
        path="/admin/update-category/:id"
        name="adminUpdateCategory"
        render={(props) => (
          <AdminPrivateRoute>
            <UpdateCategory {...props} />
          </AdminPrivateRoute>
        )}
      />
      {/* Admin Get Social Media */}
      <Route
        exact
        path="/admin/get-social-media"
        name="adminGetSocialMedia"
        render={(props) => (
          <AdminPrivateRoute>
            <GetAllSocialMedia {...props} />
          </AdminPrivateRoute>
        )}
      />
      {/* Admin Create Social Media */}
      <Route
        exact
        path="/admin/create-social-media"
        name="adminCreateSocialMedia"
        render={(props) => (
          <AdminPrivateRoute>
            <CreateSocialMedia {...props} />
          </AdminPrivateRoute>
        )}
      />
      {/* Admin Update Social Media */}
      <Route
        exact
        path="/admin/update-social-media/:id"
        name="adminUpdtaeSocialMedia"
        render={(props) => (
          <AdminPrivateRoute>
            <UpdateSocialMedia {...props} />
          </AdminPrivateRoute>
        )}
      />
      {/* Admin GET ALL TESTIMONIAL */}
      <Route
        exact
        path="/admin/get-all-testimonial"
        name="adminGetAllTestimonial"
        render={(props) => (
          <AdminPrivateRoute>
            <GetAllTestimonial {...props} />
          </AdminPrivateRoute>
        )}
      />
      {/* Admin Get Popular Course */}
      <Route
        exact
        path="/admin/get-popular-course"
        name="adminGetPopularCourse"
        render={(props) => (
          <AdminPrivateRoute>
            <GetPopularCourse {...props} />
          </AdminPrivateRoute>
        )}
      />
      {/* Admin Create Popular Course */}
      <Route
        exact
        path="/admin/create-popular-course"
        name="adminCreatePopularCourse"
        render={(props) => (
          <AdminPrivateRoute>
            <CreatePopularCourse {...props} />
          </AdminPrivateRoute>
        )}
      />
      {/* Admin Update Popular Course */}
      <Route
        exact
        path="/admin/update-popular-course/:id"
        name="adminUpdatePopularCourse"
        render={(props) => (
          <AdminPrivateRoute>
            <UpdatePopularCourse {...props} />
          </AdminPrivateRoute>
        )}
      />
      {/* Admin Get Popular Teacher */}
      <Route
        exact
        path="/admin/get-popular-teacher"
        name="adminGetPopularTeacher"
        render={(props) => (
          <AdminPrivateRoute>
            <GetPopularTeacher {...props} />
          </AdminPrivateRoute>
        )}
      />
      {/* Admin Create Popular Teacher */}
      <Route
        exact
        path="/admin/create-popular-teacher"
        name="adminCreatePopularTeacher"
        render={(props) => (
          <AdminPrivateRoute>
            <CreatePopularTeacher {...props} />
          </AdminPrivateRoute>
        )}
      />
      {/* Admin Update Popular Teacher */}
      <Route
        exact
        path="/admin/update-popular-teacher/:id"
        name="adminUpdatePopularTeacher"
        render={(props) => (
          <AdminPrivateRoute>
            <UpdatePopularTeacher {...props} />
          </AdminPrivateRoute>
        )}
      />
      {/* Admin Create New TESTIMONIAL */}
      <Route
        exact
        path="/admin/create-new-testimonial"
        name="adminCreateNewTestimonial"
        render={(props) => (
          <AdminPrivateRoute>
            <CreateNewTestimonial {...props} />
          </AdminPrivateRoute>
        )}
      />
      {/* Admin Update TESTIMONIAL */}
      <Route
        exact
        path="/admin/update-testimonial/:id"
        name="adminUpdateTestimonial"
        render={(props) => (
          <AdminPrivateRoute>
            <UpdateTestimonial {...props} />
          </AdminPrivateRoute>
        )}
      />
      {/* Admin Get All Grade */}
      <Route
        exact
        path="/admin/get-all-grade"
        name="adminGetAllGrade"
        render={(props) => (
          <AdminPrivateRoute>
            <GetAllGrade {...props} />
          </AdminPrivateRoute>
        )}
      />
      {/* Admin Create New Grade */}
      <Route
        exact
        path="/admin/create-new-grade"
        name="adminCreateNewGrade"
        render={(props) => (
          <AdminPrivateRoute>
            <CreateNewGrade {...props} />
          </AdminPrivateRoute>
        )}
      />
      {/* Admin Update Grade */}
      <Route
        exact
        path="/admin/update-grade/:id"
        name="adminUpdateGrade"
        render={(props) => (
          <AdminPrivateRoute>
            <UpdateGrade {...props} />
          </AdminPrivateRoute>
        )}
      />
      {/* Admin Get All Course */}
      <Route
        exact
        path="/admin/get-all-course"
        name="adminGetAllCourse"
        render={(props) => (
          <AdminPrivateRoute>
            <GetAllCourse {...props} />
          </AdminPrivateRoute>
        )}
      />
      {/* Admin Get Single Course */}
      <Route
        exact
        path="/admin/get-single-course/:id"
        name="adminGetSingleCourse"
        render={(props) => (
          <AdminPrivateRoute>
            <GetSingleCourse {...props} />
          </AdminPrivateRoute>
        )}
      />
      {/* Admin Update Course */}
      <Route
        exact
        path="/admin/update-course/:id"
        name="adminUpdateCourse"
        render={(props) => (
          <AdminPrivateRoute>
            <UpdateCourse {...props} />
          </AdminPrivateRoute>
        )}
      />
      {/* Admin Create New Course Course */}
      <Route
        exact
        path="/admin/create-new-course"
        name="adminCreateNewCourse"
        render={(props) => (
          <AdminPrivateRoute>
            <CreateNewCourse {...props} />
          </AdminPrivateRoute>
        )}
      />
      {/* Admin Create Course Session */}
      <Route
        exact
        path="/admin/create-course-session/:courseId"
        name="createCourseSession"
        render={(props) => (
          <AdminPrivateRoute>
            <CreateCourseSession {...props} />
          </AdminPrivateRoute>
        )}
      />
      {/* Admin Update Course Session */}
      <Route
        exact
        path="/admin/update-course-session/:id"
        name="updateCourseSession"
        render={(props) => (
          <AdminPrivateRoute>
            <UpdateCourseSession {...props} />
          </AdminPrivateRoute>
        )}
      />
      {/* Admin Get Course Exam */}
      <Route
        exact
        path="/admin/get-course-exam/:id"
        name="getCourseExam"
        render={(props) => (
          <AdminPrivateRoute>
            <GetCourseExam {...props} />
          </AdminPrivateRoute>
        )}
      />
      {/* Admin Create Course Exam */}
      <Route
        exact
        path="/admin/create-course-exam/:courseId"
        name="createCourseExam"
        render={(props) => (
          <AdminPrivateRoute>
            <CreateCourseExam {...props} />
          </AdminPrivateRoute>
        )}
      />
      {/* Admin Update Course Exam */}
      <Route
        exact
        path="/admin/update-course-exam/:id"
        name="updateCourseExam"
        render={(props) => (
          <AdminPrivateRoute>
            <UpdateCourseExam {...props} />
          </AdminPrivateRoute>
        )}
      />
      {/* Admin Get Exam Questionnaire */}
      <Route
        exact
        path="/admin/get-exam-questionnaire/:id"
        name="getExamQuestionnaire"
        render={(props) => (
          <AdminPrivateRoute>
            <GetExamQuestionnaire {...props} />
          </AdminPrivateRoute>
        )}
      />
      {/* Admin Create Exam Questionnaire */}
      <Route
        exact
        path="/admin/create-exam-questionnaire/:examId"
        name="createExamQuestionnaire"
        render={(props) => (
          <AdminPrivateRoute>
            <CreateExamQuestionnaire {...props} />
          </AdminPrivateRoute>
        )}
      />
      {/* Admin Update Questionnaire */}
      <Route
        exact
        path="/admin/update-exam-questionnaire/:id"
        name="updateExamQuestionnaire"
        render={(props) => (
          <AdminPrivateRoute>
            <UpdtaeExamQuestionnaire {...props} />
          </AdminPrivateRoute>
        )}
      />
      {/* Admin Get Top Rank */}
      <Route
        exact
        path="/admin/get-top-rank"
        name="getTopRank"
        render={(props) => (
          <AdminPrivateRoute>
            <GetTopRank {...props} />
          </AdminPrivateRoute>
        )}
      />
      {/* Admin Create Top Rank */}
      <Route
        exact
        path="/admin/create-top-rank"
        name="createTopRank"
        render={(props) => (
          <AdminPrivateRoute>
            <CreateTopRank {...props} />
          </AdminPrivateRoute>
        )}
      />
      {/* Admin Update Top Rank */}
      <Route
        exact
        path="/admin/update-top-rank/:id"
        name="updateTopRank"
        render={(props) => (
          <AdminPrivateRoute>
            <UpdateTopRank {...props} />
          </AdminPrivateRoute>
        )}
      />
      {/* Admin Get All Media */}
      <Route
        exact
        path="/admin/get-all-media"
        name="getAllMedia"
        render={(props) => (
          <AdminPrivateRoute>
            <GetAllMedia {...props} />
          </AdminPrivateRoute>
        )}
      />
      {/* Admin Create New Media */}
      <Route
        exact
        path="/admin/create-new-media"
        name="createNewMedia"
        render={(props) => (
          <AdminPrivateRoute>
            <CreateNewMedia {...props} />
          </AdminPrivateRoute>
        )}
      />
      {/* Admin Update Media */}
      <Route
        exact
        path="/admin/update-media/:id"
        name="updateMedia"
        render={(props) => (
          <AdminPrivateRoute>
            <UpdateMedia {...props} />
          </AdminPrivateRoute>
        )}
      />
      {/* Admin Get All City */}
      <Route
        exact
        path="/admin/get-all-city"
        name="getAllCity"
        render={(props) => (
          <AdminPrivateRoute>
            <GetAllCity {...props} />
          </AdminPrivateRoute>
        )}
      />
      {/* Admin Create New City */}
      <Route
        exact
        path="/admin/create-new-city"
        name="createNewCity"
        render={(props) => (
          <AdminPrivateRoute>
            <CreateNewCity {...props} />
          </AdminPrivateRoute>
        )}
      />
      {/* Admin Update City */}
      <Route
        exact
        path="/admin/update-city/:id"
        name="updateCity"
        render={(props) => (
          <AdminPrivateRoute>
            <UpdateCity {...props} />
          </AdminPrivateRoute>
        )}
      />
      {/* Admin Get All Province */}
      <Route
        exact
        path="/admin/get-all-province"
        name="getAllProvince"
        render={(props) => (
          <AdminPrivateRoute>
            <GetAllProvince {...props} />
          </AdminPrivateRoute>
        )}
      />
      {/* Admin Create New Province */}
      <Route
        exact
        path="/admin/create-new-province"
        name="createNewProvince"
        render={(props) => (
          <AdminPrivateRoute>
            <CreateNewProvince {...props} />
          </AdminPrivateRoute>
        )}
      />
      {/* Admin Update Province */}
      <Route
        exact
        path="/admin/update-province/:id"
        name="updateProvince"
        render={(props) => (
          <AdminPrivateRoute>
            <UpdateProvince {...props} />
          </AdminPrivateRoute>
        )}
      />
      {/* Admin All Report Card  کارنامه */}
      <Route
        exact
        path="/admin/all-report-card"
        name="adminAllReportCard"
        render={(props) => (
          <AdminPrivateRoute>
            <AdminAllReportCard {...props} />
          </AdminPrivateRoute>
        )}
      />
      {/* Admin Get Course Record */}
      <Route
        exact
        path="/admin/get-course-record/:id"
        name="getCourseRecord"
        render={(props) => (
          <AdminPrivateRoute>
            <AdminGetCourseRecord {...props} />
          </AdminPrivateRoute>
        )}
      />
      {/* Detail All Report Card  کارنامه */}
      <Route
        exact
        path="/admin/detail-report-card/:id"
        name="adminDetailReportCard"
        render={(props) => (
          <AdminPrivateRoute>
            <AdminDetailReportCard {...props} />
          </AdminPrivateRoute>
        )}
      />
      {/* Admin Report Card For Speciphic User  کارنامه */}
      <Route
        exact
        path="/admin/user-exam-record/:id"
        name="adminUserExamRecord"
        render={(props) => (
          <AdminPrivateRoute>
            <AdminUserExamRecord {...props} />
          </AdminPrivateRoute>
        )}
      />
      {/* Admin Get All Assignment */}
      <Route
        exact
        path="/admin/get-all-assignment"
        name="getAllAssignment"
        render={(props) => (
          <AdminPrivateRoute>
            <AdminGetAllAssignment {...props} />
          </AdminPrivateRoute>
        )}
      />
      {/* Admin Get Single Assignment */}
      <Route
        exact
        path="/admin/get-single-assignment/:id"
        name="getSingleAssignment"
        render={(props) => (
          <AdminPrivateRoute>
            <AdminGetSingleAssignment {...props} />
          </AdminPrivateRoute>
        )}
      />

      {/* Admin Get All Enrollment */}
      <Route
        exact
        path="/admin/get-all-enrollment"
        name="AdminGetAllEnrollment"
        render={(props) => (
          <AdminPrivateRoute>
            <AdminGetAllEnrollment {...props} />
          </AdminPrivateRoute>
        )}
      />

      <Route
        exact
        path="/admin/get-user-enrollment/:id"
        name="AdminGetUserEnrollment"
        render={(props) => (
          <AdminPrivateRoute>
            <AdminGetUserEnrollment {...props} />
          </AdminPrivateRoute>
        )}
      />

      {/* Admin Get User Enrolled Course */}
      <Route
        exact
        path="/admin/user-enrolled-course/:id"
        name="getSingleAssignment"
        render={(props) => (
          <AdminPrivateRoute>
            <AdminGetUserEnrolledCourse {...props} />
          </AdminPrivateRoute>
        )}
      />
      {/* Admin Get User Deposit */}
      <Route
        exact
        path="/admin/get-user-deposit/:id"
        name="getUserDeposit"
        render={(props) => (
          <AdminPrivateRoute>
            <AdminGetUserDeposit {...props} />
          </AdminPrivateRoute>
        )}
      />
      {/* Admin Get All Deposit */}
      <Route
        exact
        path="/admin/get-all-deposit"
        name="getAllDeposit"
        render={(props) => (
          <AdminPrivateRoute>
            <AdminGetAllDeposit {...props} />
          </AdminPrivateRoute>
        )}
      />
      {/* Admin Get User Assignment */}
      <Route
        exact
        path="/admin/get-user-assignment/:id"
        name="getUserAssignment"
        render={(props) => (
          <AdminPrivateRoute>
            <AdminGetUserAssignment {...props} />
          </AdminPrivateRoute>
        )}
      />
      {/* Admin Get Course Assignment */}
      <Route
        exact
        path="/admin/get-course-assignment/:id"
        name="getCourseAssignment"
        render={(props) => (
          <AdminPrivateRoute>
            <AdminGetCourseAssignment {...props} />
          </AdminPrivateRoute>
        )}
      />

      {/* Admin Get Single User */}
      <Route
        exact
        path="/admin/get-single-user/:id"
        name="getSingleUser"
        render={(props) => (
          <AdminPrivateRoute>
            <AdminGetSingleUser {...props} />
          </AdminPrivateRoute>
        )}
      />

      {/* Admin Update Admin Information */}
      <Route
        exact
        path="/admin/update-admin-information"
        name="updateAdminInformationt"
        render={(props) => (
          <AdminPrivateRoute>
            <AdminUpdateAdminInformation {...props} />
          </AdminPrivateRoute>
        )}
      />

      {/* Not Found */}
      <Route
        name="notFound"
        render={(props) => {
          return (
            <NotFoundPage
              title="خطا ...!"
              text=" صفحه مورد نظر یافت نشد"
              mound_text="404"
              link="/"
              link_text="بازگشت به خانه"
              {...props}
            />
          );
        }}
      />
    </Switch>
  );
}
