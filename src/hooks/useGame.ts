import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/apiClient";
interface Game {
  id: number;
  name: string;
}

interface Games {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<Games>("/games", {signal: controller.signal})
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message)});

      return () => controller.abort();
  }, []);
  return { games, error };
};

export default useGames;