import { FC } from 'react';
import CharacterGrid from './characters.styles';
import { useGetCharactersQuery } from 'features/characters/characters.endpoints';
import { CharacterCardComponent } from 'features/characters/card';

export type CharactersComponentProps = {
  ids: number[];
};

const CharactersComponent: FC<CharactersComponentProps> = ({ ids }: CharactersComponentProps) => {
  const { data: characters, error, isLoading } = useGetCharactersQuery({ ids });

  if (isLoading) return <div>Loading characters...</div>;
  if (error || !characters) return <div>Error when loading. Please try again later.</div>;
  const character = !Array.isArray(characters) ? characters : undefined;

  return (
    <CharacterGrid>
      {Array.isArray(characters) &&
        characters.map((character) => (
          <CharacterCardComponent character={character} key={character.id} />
        ))}
      {character && <CharacterCardComponent character={character} />}
    </CharacterGrid>
  );
};

export default CharactersComponent;
