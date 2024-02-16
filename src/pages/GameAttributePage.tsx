import { SimpleGrid,Text } from '@chakra-ui/react'
import CriticScore from '../components/CriticScore'
import  Game  from '../entities/Game'
import DefinitionItemPage from './DefinitionItemPage'

interface Props {
    game: Game
}

const GameAttributePage = ({game}: Props) => {
  return (
    <SimpleGrid column={2} as="dl">
        <DefinitionItemPage term="Platforms"> 
            {game.parent_platforms.map(({platform}) => <Text key={platform.id}>{platform.name}</Text>)}
        </DefinitionItemPage>
        <DefinitionItemPage term="Metascore">
            <CriticScore score={game.metacritic}/>
        </DefinitionItemPage>
        {/* <DefinitionItemPage term="Genres"> 
            {game.genres.map(({genre}) => <Text key={genre.id}>{genre.name}</Text>)}
        </DefinitionItemPage>
        <DefinitionItemPage term="Publishers">
            {game.publishers.map(({publisher}) => <Text key={publisher.id}>{publisher.name}</Text>)}
        </DefinitionItemPage> */}
    </SimpleGrid>
  )
}

export default GameAttributePage
