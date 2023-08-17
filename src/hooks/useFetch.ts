import { useEffect, useState } from "react";
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

  const fetchData = async () => {
    setState({ loading: true, error: null, data: null });
    try {
      const response = await axios(url, options);
      setState({ loading: false, error: null, data: response.data });
    } catch (error) {
      setState({ loading: false, error: "Error fetching data", data: null });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [state, fetchData];
};

export default useFetch;
