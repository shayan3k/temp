import React from "react";
import { ErrorStatus, ErrorMessage } from "../../../../../services/Recoils";
import { useRecoilState } from "recoil";

export default function Alert() {
  const [errorStatus] = useRecoilState(ErrorStatus);
  const [errorMessage] = useRecoilState(ErrorMessage);

  return errorMessage ? (
    <div className={"alert alert-" + errorStatus + " alert-dismissible"}>
      {errorMessage}
    </div>
  ) : null;
}
