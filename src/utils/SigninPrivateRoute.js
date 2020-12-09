import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useRecoilState } from "recoil";

import { IsAuthenticated, UserRole } from "../services/Recoils";

export default function SigninPrivateRoute({ children, ...rest }) {
  const [isAuthenticated, setIsAuthenticated] = useRecoilState(IsAuthenticated);
  const [userRole, setUserRole] = useRecoilState(UserRole);

  return (
    <Route
      {...rest}
      render={() => {
        if (isAuthenticated && userRole === "student")
          return (
            <Redirect
              to={{
                pathname: "/student/dashboard",
              }}
            />
          );
        else if (isAuthenticated && userRole === "admin")
          return (
            <Redirect
              to={{
                pathname: "/admin/dashboard",
              }}
            />
          );
        else return children;
      }}
    />
  );
}
