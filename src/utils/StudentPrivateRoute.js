import React from "react";

import { Route, Redirect } from "react-router-dom";
import { useRecoilState } from "recoil";
import { IsAuthenticated, UserRole } from "../services/Recoils";
import NotFoundPage from "../componenets/partials/shared/components/NotFoundPage";

export default function StudentPrivateRoute({ children, ...rest }) {
  const [isAuthenticated, setIsAuthenticated] = useRecoilState(IsAuthenticated);
  const [userRole, setUserRole] = useRecoilState(UserRole);

  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (isAuthenticated && userRole === "student") return children;
        return (
          <NotFoundPage
            title="خطا ...!"
            text=" صفحه مورد نظر پیدا نشد"
            mound_text="404"
            link="/"
            link_text="بازگشت به خانه"
          />
        );
      }}
    />
  );
}
