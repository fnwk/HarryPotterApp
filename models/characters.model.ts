export interface Character {
  id: string;
  attributes: {
    name: string;
    house: "Gryffindor" | "Hufflepuff" | "Ravenclaw" | "Slytherin";
    slug: string;
    bloodStatus: "pure-blood" | "half-blood" | "muggle-born" | "unknown";
    nationality: string;
    species: string;
    born: string;
    died: string;
    image?: string;
  };
}

export interface CharactersList {
  data: Character[];
  meta: {
    pagination: {
      current: number;
      last: number;
    };
  };
}
