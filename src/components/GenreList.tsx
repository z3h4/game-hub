import { HStack, Image, Link, List } from "@chakra-ui/react";
import useGenres, { type Genre } from "@/hooks/useGenres";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data: genres, isLoading } = useGenres();
  const skeletons = Array.from({ length: 25 }, (_, i) => i + 1);

  return (
    <>
      <List.Root listStyleType="none">
        {isLoading &&
          skeletons.map((skeleton) => <GenreListSkeleton key={skeleton} />)}

        {genres.map((genre) => (
          <List.Item key={genre.id} paddingY="5px">
            <HStack>
              <Image
                src={genre.image_background}
                boxSize="32px"
                borderRadius={8}
              />
              <Link onClick={() => onSelectGenre(genre)} fontSize="lg">
                {genre.name}
              </Link>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
