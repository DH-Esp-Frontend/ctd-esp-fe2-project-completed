export interface CharacterResult {
  result: ICharacters[];
}

export type residents = string[];
export type IDs = string[];
export interface ICharacters {
  id: string;
  name: string;
  status: string;
  species: string;
  image: string;
}
