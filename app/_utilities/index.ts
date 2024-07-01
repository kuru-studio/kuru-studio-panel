import camelCase from 'lodash/camelCase';
import { useState, useEffect } from 'react';

type Column = {
  title: string;
  dataIndex: string;
  key: string;
};

export const createColumnsForTable = (columns: string[]): Column[] => {
  return columns.map((column) => ({
    title: column,
    dataIndex: camelCase(column),
    key: camelCase(column),
  }));
};

type Breakpoints = {
  [key: string]: number;
};

export const breakpoints: Breakpoints = {
  "sm": 640,
  "md": 768,
  "lg": 1024,
  "xl": 1280,
  "2xl": 1536,
};

export const useBreakpoint = (breakpoint: keyof typeof breakpoints): boolean => {
  const [matches, setMatches] = useState(false);
  const query = `(min-width: ${breakpoints[breakpoint]}px)`;

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => setMatches(event.matches);
    mediaQuery.addEventListener("change", handler);

    return () => {
      mediaQuery.removeEventListener("change", handler);
    };
  }, [query]);

  return matches;
};
