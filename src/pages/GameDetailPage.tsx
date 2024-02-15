import { Grid, GridItem, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/spinner";
import { useParams } from "react-router-dom";
import CriticScore from "../components/CriticScore";
import useGame from "../hooks/useGame";
import DefinitionItemPage from "./DefinitionItemPage";
import ExpandableTextPage from "./ExpandableTextPage";
import GameAttributePage from "./GameAttributePage";

function GameDetailPage() {

  const {slug} = useParams();

  const {data: game, isLoading, error} = useGame(slug!);

  if (isLoading) return <Spinner />;  
  if (error || !game) throw error;

  const description = game.description_raw[0]

  // build hook
  
  return (
    <>
      <Heading>{game.name}</Heading>
      {console.log("=============game.description_raw=============")}
      {console.log(typeof(game.description_raw))}
      {console.log(game.description_raw)}
      {/* <ExpandableTextPage> {game.description_raw}... </ExpandableTextPage> */}
      <ExpandableTextPage> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</ExpandableTextPage>
      <GameAttributePage game={game}/>
    </>
  )
}

export default GameDetailPage
