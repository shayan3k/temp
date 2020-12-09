import React, { useState, useEffect } from "react";
import DataSet from "../../../shared/components/DataSet";
import Axios from "axios";

function ReferencedUsers() {
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    updateListComponent();
  });

  const updateListComponent = async () => {
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_REFERENCED_USERS,
      withCredentials: true,
      method: "POST",
    }).then((res) => {
      // console.log(res.data);
      try {
        setUserCount(res.data.data.itemCount);
      } catch (e) {
        setUserCount(0);
      }
    });
  };

  return (
    <section className="subset-wrapper">
      <h2 className="section-title mb-3">زیر مجموعه های شما</h2>
      <DataSet
        count={userCount}
        linkTo="referencedlist"
        title={"تعداد زیر مجموعه"}
      />
    </section>
  );
}

export default ReferencedUsers;
