import React, { useState, useEffect } from "react";

/**
 * @brief Timer component to display the time remaining until a future moment.
 *
 * @param props The component props.
 * @param props.futureMoment The future moment in milliseconds.
 * @returns The rendered Timer component.
 */
const Timer = ({ futureMoment }) => {
  const [timeRemaining, setTimeRemaining] = useState("");

  /**
   * @brief Calculates the time remaining based on the difference between the future moment and the current time.
   *
   * @param difference The time difference in milliseconds.
   * @param suffix The suffix to append to the time remaining.
   */
  const calculateTimeRemaining = (difference, suffix) => {
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

    if (days > 3) {
      setTimeRemaining(`${days} ngày ${suffix}`);
    } else {
      setTimeRemaining(`${days} ngày ${hours} giờ ${minutes} phút ${suffix}`);
    }
  };

  useEffect(() => {
    const currentTime = new Date().getTime();
    if (futureMoment > currentTime) {
      const interval = setInterval(() => {
        const difference = futureMoment - currentTime;
        calculateTimeRemaining(difference, "nữa ...");
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    } else {
      const difference = currentTime - futureMoment;
      calculateTimeRemaining(difference, "bên nhau");
    }
  }, [futureMoment]);

  return <div>{timeRemaining}</div>;
};

export default Timer;
