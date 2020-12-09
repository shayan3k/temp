import React, { useState, useEffect } from "react";
import { getPersianDate } from "../../../../../utils/shared";
import Axios from "axios";
import { Calendar, momentLocalizer, DateLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import BigCalendar from "jalali-react-big-calendar";

import "../../../../../assets/admin/css/dashboard/_calendar.scss";

const StudentCalendar = () => {
  const [courseExamsEvent, setCourseExamsEvent] = useState([]);
  const [courseSessionEvent, setCourseSessionEvent] = useState([]);

  useEffect(() => {
    getFuturEvent();
  }, []);
  const getFuturEvent = () => {
    Axios({
      url:
        process.env.REACT_APP_BACKEND_URL +
        process.env.REACT_APP_GET_FUTURE_EVENT,
      method: "POST",
      withCredentials: true,
    })
      .then((res) => {
        try {
          // console.log(res.data.data);
          setCourseExamsEvent(
            res.data.data ? res.data.data.ModifiedTheCourseExams : []
          );
          setCourseSessionEvent(
            res.data.data ? res.data.data.ModifiedTheCourseSessions : []
          );
        } catch (e) {
          // console.log(e);
        }
      })
      .catch((e) => {
        // console.log(e);
      });
  };

  const localizer = momentLocalizer(moment);

  const handleSlotSelection = ({ start, end, action }) => {
    return { style: { backgroundColor: "red" } };
  };
  const handleonSelectEvent = () => {
    // console.log("handleonSelectEvent");
  };

  const examEvents = courseExamsEvent.map((item) => {
    const container = {};
    container.start = item.start_time;
    container.end = item.end_time;
    container.title = item.title;
    container.type = "exam";
    return container;
  });

  const sessionEvents = courseSessionEvent.map((item) => {
    const container = {};
    container.start = item.start_time;
    container.end = item.end_time;
    container.title = item.subject;
    container.type = "session";

    return container;
  });

  // console.log(examEvents);
  // console.log(sessionEvents);

  return (
    <div className="container-fluid">
      <BigCalendar
        selectable={true}
        popup
        localizer={localizer}
        // events={[
        //   ...temp.ModifiedTheCourseExams,
        //   ...temp.ModifiedTheCourseSessions,
        // ]}
        events={[...examEvents, ...sessionEvents]}
        startAccessor="start"
        endAccessor="end"
        style={{
          display: "flex",
          paddingTop: "20px",
          height: "75vh",
        }}
        showMultiDayTimes
        onSelectSlot={handleSlotSelection}
        onSelectEvent={handleonSelectEvent}
        components={{
          event: Event,
          agenda: {
            event: EventAgenda,
          },
        }}
      />
    </div>
  );
};

const Event = ({ event }) => {
  return (
    <span className={"custom-event custom-event-" + event.type}>
      <strong>{event.title}</strong>
      {event.desc && ":  " + event.desc}
    </span>
  );
};

const EventAgenda = ({ event }) => {
  return (
    <span>
      <em style={{ color: "magenta" }}>{event.title}</em>
      <p>{event.desc}</p>
    </span>
  );
};

export default StudentCalendar;
