import { useEffect, useState } from "react";

/**
 * useDebounce
 * @description This hooks is used to add a delay into the search bar
 * @param value This is the search value to debounce
 * @param delay This is the timeout delay, default = 300 ms
 * @returns Debounced value
 */
export function useDebounce<T>(value: T, delay = 300): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}
