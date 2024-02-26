import { useState } from "react";

type CallbackFunction = (...args: any[]) => any;
type UseFetchingReturn = [() => Promise<void>, boolean, string];

export const useFetching = (callback: CallbackFunction): UseFetchingReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetching = async (...args: Parameters<CallbackFunction>) => {
    try {
      setIsLoading(true);
      await callback(...args);
    } catch (e) {
      setError(e instanceof Error ? e.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return [fetching, isLoading, error];
};
