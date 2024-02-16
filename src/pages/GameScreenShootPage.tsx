import { Box, Spinner, Image, SimpleGrid } from '@chakra-ui/react';
import useGameScreenShoot from '../hooks/useGameScreenShoot';
import useGameTrailers from '../hooks/useGameTrailers';
interface Props {
    slug: string;
}

const GameScreenShootPage = ({slug}: Props) => {

    // call api for game scree shoot
    const {data: screenShoot, isLoading, error} = useGameScreenShoot(slug!);
    if (isLoading) return <Spinner />;  
    if (error || !screenShoot) throw error;

  return (
    <SimpleGrid columns={{base: 1, md: 2}} spacing={3}>
        {screenShoot.results.map((screenShoot) => 
            // <Box boxSize='sm'>   
                <Image key={screenShoot.id} src={screenShoot.image} />
            // </Box>
        )}
    </SimpleGrid>
  )
}

export default GameScreenShootPage
