import { useState, useEffect } from "react";
import apiClient from "../services/apiClient";
import { Text } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
}

interface Games {
  count: number;
  results: Game[];
}

function GameGrid() {
  // usestate
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  // useeffect
  useEffect(() => {
    apiClient
      .get<Games>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  });

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>
            <p>{game.name}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default GameGrid;
