import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import "./index.css";

import Loading from "./componenets/partials/shared/components/Loading";
import MainRouter from "./services/MainRouter";

import { useRecoilState } from "recoil";
import {
  IsAuthenticated,
  UserRole,
  PhoneNumber,
  TriggerIsAuthenticated,
  Name,
  LastName,
  UserImage,
} from "./services/Recoils";
require("dotenv").config();

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useRecoilState(IsAuthenticated);
  const [phoneNumber, setPhoneNumber] = useRecoilState(PhoneNumber);
  const [userRole, setUserRole] = useRecoilState(UserRole);
  const [name, setName] = useRecoilState(Name);
  const [lastname, setLastname] = useRecoilState(LastName);
  const [image, setImage] = useRecoilState(UserImage);
  const [triggerIsAuthenticated, setTriggerIsAuthenticated] = useRecoilState(
    TriggerIsAuthenticated
  );

  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    checkIsAuthenticated();
  }, []);

  useEffect(() => {
    checkIsAuthenticated();
  }, [triggerIsAuthenticated]);

  const checkIsAuthenticated = () => {
    axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_IS_AUTHENTICATED,

      withCredentials: true,
      method: "POST",
    })
      .then((res) => {
        try {
          console.log({
            phone_number: res.data.data.phone_number,
            name: res.data.data.name,
            lastname: res.data.data.lastname,
          });
        } catch (e) {
          console.log({
            phone_number: "undefined",
            name: "undefined",
            lastname: "undefined",
          });
        }
        try {
          setIsAuthenticated(res.data.success);
          setPhoneNumber(res.data.data.phone_number);
          setUserRole(res.data.data.role);
          setName(res.data.data.name);
          setLastname(res.data.data.lastname);
          setImage(res.data.data.image);
        } catch (e) {}
      })
      .catch((e) => console.log(e.message))
      .finally(() => {
        setIsLoaded(true);
      });
  };

  return isLoaded ? (
    <Router>
      <MainRouter
        IsAuthenticated={IsAuthenticated}
        UserRole={UserRole}
        PhoneNumber={PhoneNumber}
      />
    </Router>
  ) : (
    <Loading />
  );
}
