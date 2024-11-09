import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

type DataResponse<T> = {
  data: T | null;
  loading: boolean;
};

const useFetch = <T>(url: string, interval: number): DataResponse<T> => {
  const BASE_URL = import.meta.env.VITE_BACKEND_URL;
  const FULL_URL = BASE_URL + url;

  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get<T>(FULL_URL);
        setData(response.data);
      } catch (error) {
        console.error((error as AxiosError).message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
    const intervalId = setInterval(fetchData, interval);
    return () => clearInterval(intervalId);
  }, [url, interval, FULL_URL]);

  return { data, loading };
};

export default useFetch;
