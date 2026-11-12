import { Card, Image } from "@chakra-ui/react";
import type { Game } from "@/hooks/useGames";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root borderRadius="10px" overflow="hidden">
      <Image src={game.background_image} />
      <Card.Body>
        <Card.Title css={{ fontSize: "2xl" }}>{game.name}</Card.Title>
        <PlatformIconList platforms={game.parent_platforms} />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
