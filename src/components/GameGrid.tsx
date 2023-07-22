import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGame";

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
  const { games, error } = useGames();

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
