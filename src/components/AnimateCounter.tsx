import { useEffect, useState } from "react";
import { persianDigits } from "../utils/string";

const AnimateCounter = ({ value, time }: { value: string; time: number }) => {
  const [timer, setTimer] = useState<string>("0");
  useEffect(() => {
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

export { AnimateCounter };
