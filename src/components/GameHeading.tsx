import React from "react";
import { GameQuery } from "../App";
import { Heading } from "@chakra-ui/react";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";

interface GameHeadingProps {
  GameQuery: GameQuery;
} 

function GameHeading({ GameQuery }: GameHeadingProps) {

  const { data: genres } = useGenre();
  const selectedGenre = genres?.results.find((g) => g.id === GameQuery.GenreId)

  const { data: platforms } = usePlatform();
  const selectedPlatform = platforms?.results.find((p) => p.id === GameQuery.PlatformId)

  const gameHeading = `${selectedGenre?.name || ""} ${
    selectedPlatform?.name || ""
  } Games`;
  return (
    <Heading as="h1" paddingY={3}>
      {gameHeading}
    </Heading>
  );
}

export default GameHeading;
