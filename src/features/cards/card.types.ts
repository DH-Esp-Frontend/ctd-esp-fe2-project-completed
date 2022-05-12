export interface CharacterResult {
  result: ICharacters[];
}

export type residentsList = string[];
export type IDs = string[];
export interface ICharacters {
  id: string;
  name: string;
  status: string;
  species: string;
  image: string;
}
