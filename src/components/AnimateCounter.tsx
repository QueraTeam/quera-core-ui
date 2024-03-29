import * as React from "react";
import { persianDigits } from "../utils/string";

export const AnimateCounter = ({ value, time }: { value: string; time: number }) => {
  const [timer, setTimer] = React.useState<string>("0");
  React.useEffect(() => {
    let start = 0;
    const end = parseInt(value, 10);
    const incrementTime = (time / end) * 1000;
    const step = Math.floor(end / 400) || 1;
    const timerInterval = setInterval(() => {
      start = start + step > end ? end : start + step;
      setTimer(`${start}`);
      if (start === end) {
        clearInterval(timerInterval);
      }
    }, incrementTime);
    return () => clearInterval(timerInterval);
  }, [time, value]);
  return <>{persianDigits(timer)}</>;
};
