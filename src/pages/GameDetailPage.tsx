import { Heading, Text } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/spinner";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";

function GameDetailPage() {

  const {slug} = useParams();

  const {data: game, isLoading, error} = useGame(slug!);

  if (isLoading) return <Spinner />;  
  if (error || !game) throw error;

  // build hook
  
  return (
    <div>
      <Heading>{game.name}</Heading>
      <Text>{game.description_raw}</Text>
    </div>
  )
}

export default GameDetailPage
