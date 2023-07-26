import { Badge } from "@chakra-ui/react";

interface CriticScoreProps {
  score: number;
}
function CriticScore({ score }: CriticScoreProps) {
  const color = score > 75 ? "green" : score > 60 ? "yello" : "red";

  return (
    <>
      <Badge
        fontSize="14px"
        colorScheme={color}
        paddingX={2}
        borderRadius="5px"
      >
        {" "}
        {score}
      </Badge>
    </>
  );
}

export default CriticScore;
