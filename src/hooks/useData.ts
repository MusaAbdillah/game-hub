import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/apiClient";
import { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
    count: number;
    results: T[];
  }

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, dependencies?: any[]) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
      const controller = new AbortController();
      setLoading(true);
  
      apiClient
        .get<FetchResponse<T>>(endpoint, {signal: controller.signal, ...requestConfig})
        .then((res) => {
          setData(res.data.results);
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        });
  
        return () => controller.abort();
    }, dependencies ? [...dependencies] : []);
    return { data, error, isLoading };
}

export default useData;