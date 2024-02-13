import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
interface GameCardContainerProps {
  children: ReactNode;
}
function GameCardContainer({ children }: GameCardContainerProps) {
  return (
    <>
      <Box 
        borderRadius={10} 
        overflow="hidden" 
        _hover={{
          transform: "scale(1.03)",
          transition: "transform .15s ease-in"
        }}
    >
        {children}
      </Box>
    </>
  );
}

export default GameCardContainer;
