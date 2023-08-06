import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import useGame, { Platform } from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenre";
import { GameQuery } from "../App";

interface Game {
  id: number;
  name: string;
}

interface Games {
  count: number;
  results: Game[];
}

interface GameGridProps {
  gameQuery: GameQuery;
}

function GameGrid({ gameQuery }: GameGridProps) {
  // usestate
  const { data, error, isLoading } = useGame(gameQuery);
  const skeletons = [];

  for (let i = 0; i < 25; i++) {
    skeletons.push(i);
  }

  console.log("--- skeletons---");
  console.log(skeletons);

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={3}
        // padding={10}
        paddingY={5}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer>
              <GameCardSkeleton key={skeleton} />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer>
            <GameCard key={game.id} game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
