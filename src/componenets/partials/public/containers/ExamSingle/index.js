import React from "react";
import { withRouter } from "react-router-dom";
import OnlineExam from "../../components/OnlineExam";
import "../../../../../assets/public/css/style.scss";

function ExamSingle() {
  return (
    <div>
      <OnlineExam />
    </div>
  );
}

export default withRouter(ExamSingle);
