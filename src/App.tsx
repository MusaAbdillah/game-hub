import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import MenuSelector from "./components/MenuSelector";
import { Platform } from "./hooks/useGame";
import PlatformSelector from "./components/PlatformSelector";

export interface GameQuery {
  Genre: Genre | null;
  Platform: Platform | null;
  Ordering: string;
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
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={gameQuery.Genre}
            onSelectGenre={(genre) => {
              setGameQuery({ ...gameQuery, Genre: genre });
            }}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <HStack spacing={5} paddingLeft={10}>
          Loading
          <MenuSelector
            selectedPlatform={gameQuery.Platform}
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, Platform: platform })
            }
          />
          <PlatformSelector
            selectedSort={gameQuery.Ordering}
            onSelectSort={(sort) =>
              setGameQuery({ ...gameQuery, Ordering: sort })
            }
          />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
