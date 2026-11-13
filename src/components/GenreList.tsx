import useGenres from "@/hooks/useGenres";
import { HStack, Image, List, Text } from "@chakra-ui/react";

const GenreList = () => {
  const { data: genres } = useGenres();

  return (
    <List.Root>
      {genres.map((genre) => (
        <List.Item key={genre.id} paddingY="5px">
          <HStack>
            <Image
              src={genre.image_background}
              boxSize="32px"
              borderRadius={8}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
