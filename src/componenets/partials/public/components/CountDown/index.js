import React, { useEffect, useState } from "react";
import "../../../../../assets/public/css/index/_countDown.scss";
import Axios from "axios";

export default function CountDown({ ...props }) {
  const [countDownText, setCountDownText] = useState("");
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    let isSubscribed = true;

    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_HOME_GET_COUNT_DOWN,
      withCredentials: true,
      method: "POST",
    }).then((res) => {
      setCountDownText(res.data.data.count_down_text);
      startCountDown(
        Date.parse(res.data.data.count_down ? res.data.data.count_down : "")
      );
    });

    return () => (isSubscribed = false);
  }, []);

  const startCountDown = (theDate) => {
    setInterval(function () {
      // Calculate the remaining time
      var now = new Date();
      var timeLeft = (theDate - now) / 1000;
      //check if timer has finished
      if (timeLeft <= 0) {
        // console.log("changed");
        setIsFinished(true);
      }
      if (timeLeft > 0) updateClock(timeLeft);
    }, 1000);

    function updateClock(remainingTime) {
      // calculate (and subtract) whole days
      let days = Math.floor(remainingTime / 86400);
      remainingTime -= parseInt(days) * 86400;

      // calculate (and subtract) whole hours
      let hours = Math.floor(remainingTime / 3600) % 24;
      remainingTime -= parseInt(hours) * 3600;

      // calculate (and subtract) whole minutes
      let minutes = Math.floor(remainingTime / 60) % 60;
      remainingTime -= parseInt(minutes) * 60;

      // what's left is seconds
      let seconds = Math.floor(remainingTime % 60);

      // pad numbers if needed
      setDays(padNumber(days));
      setHours(padNumber(hours));
      setMinutes(padNumber(minutes));
      setSeconds(padNumber(seconds));
    }

    function padNumber(number) {
      return number < 10 ? "0" + number : number;
    }
  };
  if (!isFinished) {
    return (
      <section className="countdown-wrapper wrapper">
        <h2 className="title_up">{countDownText}</h2>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col">
              <div className="text-center">
                <ul>
                  <li>
                    <span className="num" id="days">
                      {days}
                    </span>
                    <span className="sbd">روز</span>
                  </li>
                  <li>
                    <span className="num" id="hours">
                      {hours}
                    </span>
                    <span className="sbd">ساعت</span>
                  </li>
                  <li>
                    <span className="num" id="minutes">
                      {minutes}
                    </span>
                    <span className="sbd">دقیقه</span>
                  </li>
                  <li>
                    <span className="num" id="seconds">
                      {seconds}
                    </span>
                    <span className="sbd">ثانیه</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return null;
  }
}
