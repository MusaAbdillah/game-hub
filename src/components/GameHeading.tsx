import React from "react";
import { GameQuery } from "../App";
import { Heading } from "@chakra-ui/react";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";
import useGameQueryStore from "../store";

interface GameHeadingProps {
  gameQuery: GameQuery;
} 

function GameHeading() {

  const genreId = useGameQueryStore(s => s.gameQuery.GenreId);
  const genre = useGenre(genreId);

  const platformId = useGameQueryStore(s => s.gameQuery.PlatformId);
  const platform = usePlatform(platformId);
  
  

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
