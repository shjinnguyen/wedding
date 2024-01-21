import React, { useState, useEffect } from "react";
import moment from "moment";

import "./styles.scss";

const Timer = ({ futureMoment }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const calculateTimeLeft = (futureMoment) => {
    const now = moment();
    const duration = moment.duration(futureMoment.diff(now));

    const days = Math.floor(duration.asDays());
    const hours = duration.hours();
    const minutes = duration.minutes();
    const seconds = duration.seconds();

    setDays(days);
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
  };

  useEffect(() => {
    calculateTimeLeft(futureMoment);
    const interval = setInterval(() => calculateTimeLeft(futureMoment), 1000);
    return () => clearInterval(interval);
  }, [futureMoment]);

  return (
    <div className="timer-left">
      <div className="timer-block">
        <h2>{days}</h2>
        <p>Ngày</p>
      </div>
      <div className="timer-block">
        <h2>{hours}</h2>
        <p>Giờ</p>
      </div>
      <div className="timer-block">
        <h2>{minutes}</h2>
        <p>Phút</p>
      </div>
      <div className="timer-block">
        <h2>{seconds}</h2>
        <p>Giây</p>
      </div>
    </div>
  );
};

export default Timer;
