import { apiClient } from "@/api/api.config";
import { CharactersList } from "@/models/characters.model";
import { HogwartsHouse } from "@/models/theme.model";
import capitalizeFirstLetter from "@/utils/capitalizeFirstLetter";

export namespace CharactersApi {
  export const getCharacters = async (
    pageParam: number,
    searchQuery: string,
    house: HogwartsHouse | "",
    sort: string,
  ) => {
    const res = await apiClient.get<CharactersList>(
      `characters?page[size]=25&page[number]=${pageParam}&filter[name_cont]=${searchQuery}&sort=${sort}${house && "&filter[house_eq]=" + capitalizeFirstLetter(house)}`,
    );
    return res.data;
  };

  export const getCharacterDetails = async (id: string) => {
    const res = await apiClient.get(`characters/${id}`);
    return res.data;
  };
}
