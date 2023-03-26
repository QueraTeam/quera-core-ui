import { useEffect, useState } from "react";

/**
 * This hook allows you to debounce any fast changing value.
 * @param value
 * @param delay
 */
export const useDebouncedValue = (value: any, delay: number) => {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
};
