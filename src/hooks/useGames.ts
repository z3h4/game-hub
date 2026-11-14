import useData from "./useData";
import type { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: Platform[];
  metacritic: number;
}

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null,
) =>
  useData<Game>(
    "/games",
    {
      params: {
        genre: selectedGenre?.id,
        platform_family: selectedPlatform?.id,
      },
    },
    [selectedGenre?.id, selectedPlatform?.id],
  );

export default useGames;
