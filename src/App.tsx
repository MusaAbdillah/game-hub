import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import MenuSelector from "./components/MenuSelector";
import { Platform } from "./hooks/useGame";
import PlatformSelector from "./components/PlatformSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  GenreId?: number;
  PlatformId?: number;
  Ordering: string;
  SearchText: string;
}

function App() {
  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
  //   null
  // );

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    // <Grid templateAreas={`"nav nav" "aside main"`}>
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar/>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList/>
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box padding={5}>
          <GameHeading/>
          <Flex>
            <Box marginRight={5}>
              <MenuSelector
              />
            </Box>
            <PlatformSelector
            />
          </Flex>
          <GameGrid />
        </Box>
      </GridItem>
    </Grid>
  );
}

export default App;
