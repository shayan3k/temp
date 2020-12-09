import React from "react";
import { DatePicker } from "jalali-react-datepicker";

export default function index(props) {
  function submitDateTime({ value }) {
    let s = value._d;
    let d = new Date(Date.parse(s));
    console.log(props);
    props.setDateTime(d.toISOString());
  }

  if (props.isLoaded) {
    return (
      <DatePicker
        label={props.label}
        onClickSubmitButton={submitDateTime}
        value={Date.parse(props.datetime)}
      />
    );
  } else {
    return "";
  }
}
