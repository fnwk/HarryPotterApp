import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { CharactersApi } from "@/api/requests/characters.req";
import { HogwartsHouse } from "@/models/theme.model";

interface getCharactersProps {
  searchQuery: string;
  house: HogwartsHouse | "";
  sorting: string;
}

export const charactersKeys = {
  charactersList: ["characters-list"],
  characterDetails: ["character-details"],
};

export const useGetCharacters = ({
  searchQuery,
  house,
  sorting,
}: getCharactersProps) =>
  useInfiniteQuery({
    initialPageParam: 1,
    queryKey: [...charactersKeys.charactersList, searchQuery, house, sorting],
    queryFn: ({ pageParam }) =>
      CharactersApi.getCharacters(pageParam, searchQuery, house, sorting),
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.meta.pagination.current <= lastPage.meta.pagination.last) {
        return lastPage.meta.pagination.current + 1;
      }
    },
  });

export const useGetCharacterDetails = (id: string) =>
  useQuery({
    queryKey: [...charactersKeys.characterDetails, id],
    queryFn: () => CharactersApi.getCharacterDetails(id),
  });
