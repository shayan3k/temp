import { immediateToast } from "izitoast-react";

// show notification using izitoast-react plugin
export const notificationAlert = (title, message, type) => {
  //   immediateToast("warning", {
  //     message: "Hi, how it is going",
  //     title: "Hey",
  //   });
  immediateToast(type, {
    title: title,
    message: message,
  });
};

// show current persian date
export const getCurrentDate = () => {
  let moment = require("moment-jalaali");
  moment.loadPersian({ usePersianDigits: true, dialect: "persian-modern" });
  return (
    moment(new Date()).format("dddd") + //show day-name
    ", " +
    moment(new Date()).format("jDD jMMMM jYYYY") //show day mount-name and year
  );
};

//convert date to persian date
export const getPersianDate = (date) => {
  if (!date) {
    return "نا مشخص";
  }
  let moment = require("moment-jalaali");
  moment.loadPersian({ usePersianDigits: true, dialect: "persian-modern" });
  return moment(date).format("jDD jMMMM jYYYY"); //show day mount-name and year
};

export const getPersianDateWithSeconds = (date) => {
  if (!date) {
    return "نا مشخص";
  }
  let moment = require("moment-jalaali");
  moment.loadPersian({ usePersianDigits: true, dialect: "persian-modern" });
  return moment(date).format("HH:SS - jDD jMMMM jYYYY"); //show day mount-name and year
};

export const getPersianDate2 = (date) => {
  if (!date) {
    return "نا مشخص";
  }
  let moment = require("moment-jalaali");
  moment.loadPersian({ usePersianDigits: true, dialect: "persian-modern" });
  return moment(date).locale("fa").format("jYYYY/jM/jD"); //show day mount-name and year
};

export const getPersianFullDate = (date) => {
  if (!date) {
    return "نا مشخص";
  }
  let moment = require("moment-jalaali");
  moment.loadPersian({ usePersianDigits: true, dialect: "persian-modern" });
  return moment(date).locale("fa").format("jYYYY/jM/jD HH:mm:ss"); //show day mount-name and year
};
