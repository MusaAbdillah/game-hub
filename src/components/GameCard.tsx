import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGame";
import PlatformList from "./PlatformList";
import CriticScore from "./CriticScore";
import getCroppedImage from "../services/getCroppedImage";
import Emoji from "./Emoji";
import InfiniteScroll from "react-infinite-scroll-component";

interface GameCardProps {
  game: Game;
}

function GameCard({ game }: GameCardProps) {
  return (
    <Card>
      <Image src={getCroppedImage(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformList
            platforms={game.platforms.map((platform) => platform.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          {game.name} <Emoji ratingTop={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
}

export default GameCard;
