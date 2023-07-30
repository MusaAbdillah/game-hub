import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import getCroppedImage from "../services/getCroppedImage";

interface GenreListProps {
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
}

function GenreList({ selectedGenre, onSelectGenre }: GenreListProps) {
  const { data, isLoading, error } = useGenre();

  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImage(genre.image_background)}
              />
              <Button
                fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
                onClick={() => {
                  console.log("--------------------");
                  console.log(genre);
                  onSelectGenre(genre);
                }}
                variant="link"
                fontSize="lg"
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
