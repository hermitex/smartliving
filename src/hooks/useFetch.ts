import { useCallback, useEffect, useMemo, useState } from "react";
import axios, { AxiosRequestConfig } from "axios";

interface FetchState<T> {
  loading: boolean;
  error: string | null;
  data: T | null;
}

type UseFetchReturnType<T> = [FetchState<T>, () => void];

const useFetch = <T>(
  url: string,
  options: AxiosRequestConfig = {}
): UseFetchReturnType<T> => {
  const [state, setState] = useState<FetchState<T>>({
    loading: true,
    error: null,
    data: null,
  });

  const fetchData = useCallback(async () => {
    setState({ loading: true, error: null, data: null });
    try {
      const response = await axios(url, options);
      setState({ loading: false, error: null, data: response.data });
    } catch (error) {
      setState({ loading: false, error: "Error fetching data", data: null });
    }
  }, []);

  // Create a memoized version of the fetchData function
  const memoizedFetchData = useMemo(() => fetchData, [fetchData]);

  useEffect(() => {
    memoizedFetchData(); // Use the memoized fetchData function
  }, [memoizedFetchData]);

  return [state, memoizedFetchData]; // Return the memoized fetchData function
};

export default useFetch;
