import { Box, Button, SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import useGame, { Platform } from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenre";
import { GameQuery } from "../App";
import React from "react";

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
  const { data, error, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } = useGame(gameQuery);
  const skeletons = [];

  for (let i = 0; i < 25; i++) {
    skeletons.push(i);
  }

  console.log("--- skeletons---");
  console.log(skeletons);

  if (error) return <Text paddingY={5}>{error.message}</Text>;

  return (
    <Box padding="10px">
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={6}
      paddingY={5}
    >
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardContainer>
            <GameCardSkeleton key={skeleton} />
          </GameCardContainer>
        ))}
        {
          data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((game) => (
                  <GameCardContainer key={game.id}>
                   <GameCard key={game.id} game={game} />
                 </GameCardContainer>
              ))}
            </React.Fragment>
          ))
        }
      {/* {data?.results.map((game) => (
        <GameCardContainer>
          <GameCard key={game.id} game={game} />
        </GameCardContainer>
      ))} */}
    </SimpleGrid>
    {hasNextPage && <Button onClick={() => fetchNextPage()} marginY={5}>{ isFetchingNextPage ? 'Loading ...' : 'Load more' }</Button>}
    </Box>
  );
}

export default GameGrid;
