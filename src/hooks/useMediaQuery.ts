"use client";

import { useCallback, useEffect, useState } from "react";

/**
 * useMediaQuery
 * @description This hooks is used to control media queries using JS instead of CSS
 * @param query Selected media query, for example: useMediaQuery("(min-width: 768px)")
 * @returns boolean
 */
export function useMediaQuery(query: string): boolean {
  const [isClient, setIsClient] = useState(false);

  const getMatches = useCallback(() => {
    if (isClient) {
      return window.matchMedia(query).matches;
    }
  }, [isClient, query]);

  const [matches, setMatches] = useState(getMatches());

  const handleChange = useCallback(() => {
    setMatches(getMatches());
  }, [getMatches]);

  useEffect(() => {
    if (!isClient) return;

    const matchMedia = window.matchMedia(query);

    handleChange();

    matchMedia.addEventListener("change", handleChange);

    return () => {
      matchMedia.removeEventListener("change", handleChange);
    };
  }, [handleChange, isClient, query]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return !!matches;
}
