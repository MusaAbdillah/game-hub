import { Grid, Show, GridItem, Flex, Box } from '@chakra-ui/react';
import GameGrid from '../components/GameGrid';
import GameHeading from '../components/GameHeading';
import GenreList from '../components/GenreList';
import MenuSelector from '../components/MenuSelector';
import PlatformSelector from '../components/PlatformSelector';

function HomePage() {
  return (
    // <Grid templateAreas={`"nav nav" "aside main"`}>
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
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

export default HomePage
