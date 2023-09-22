// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from "react";

export const isNil = (value: unknown): boolean => value === undefined || value === null;

export const isNull =  (value: unknown): boolean => value === null;

export const isPositiveNumber =  (value: number): boolean => value > 0;



export const usePrevious = (value: any): number => {
  const ref = useRef({});

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current as number;
}
