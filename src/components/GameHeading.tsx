import React from "react";
import { GameQuery } from "../App";
import { Heading } from "@chakra-ui/react";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";

interface GameHeadingProps {
  gameQuery: GameQuery;
} 

function GameHeading({ gameQuery }: GameHeadingProps) {

  const genre = useGenre(gameQuery.GenreId);

  const platform = usePlatform(gameQuery.PlatformId);

  

  const gameHeading = `${genre?.name || ""} ${
    platform?.name || ""
  } Games`;
  return (
    <Heading as="h1" paddingY={3}>
      {gameHeading}
    </Heading>
  );
}

export default GameHeading;
