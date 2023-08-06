import React from "react";
import { GameQuery } from "../App";
import { Heading } from "@chakra-ui/react";

interface GameHeadingProps {
  GameQuery: GameQuery;
}

function GameHeading({ GameQuery }: GameHeadingProps) {
  const gameHeading = `${GameQuery.Genre?.name || ""} ${
    GameQuery.Platform?.name || ""
  } Games`;
  return (
    <Heading as="h1" paddingY={3}>
      {gameHeading}
    </Heading>
  );
}

export default GameHeading;
