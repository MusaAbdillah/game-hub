import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import { Genre } from "../entities/Genre";
import getCroppedImage from "../services/getCroppedImage";
import useGameQueryStore from "../store";

interface GenreListProps {
  selectedGenreId?: number;
  onSelectGenre: (genre: Genre) => void;
}

function GenreList() {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;

  const selectedGenreId =  useGameQueryStore(s => s.gameQuery.GenreId)
  const setSelectedGenreId =  useGameQueryStore(s => s.setGenreId)

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genre
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImage(genre.image_background)}
              />
              <Button
                fontWeight={selectedGenreId === genre.id ? "bold" : "normal"}
                onClick={() => {
                  console.log("--------------------");
                  console.log(genre);
                  setSelectedGenreId(genre.id);
                }}
                variant="link"
                fontSize="lg"
                whiteSpace="normal"
                textAlign="left"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default GenreList;
