"use client";

import { useCallback, useEffect, useState } from "react";

export function useMediaQuery(query: string) {
  const getMatches = useCallback(() => {
    if (window) {
      return window.matchMedia(query).matches;
    }
  }, [query]);

  const [matches, setMatches] = useState(getMatches());

  const handleChange = useCallback(() => {
    setMatches(getMatches());
  }, [getMatches]);

  useEffect(() => {
    if (!window) return;

    const matchMedia = window.matchMedia(query);

    handleChange();

    matchMedia.addEventListener("change", handleChange);

    return () => {
      matchMedia.removeEventListener("change", handleChange);
    };
  }, [query, handleChange]);

  return matches;
}
