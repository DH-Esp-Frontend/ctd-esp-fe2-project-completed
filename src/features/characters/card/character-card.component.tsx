import { Character } from 'features/characters';
import { FC } from 'react';
import CharacterCard, { CharacterCardBody } from 'features/characters/card/character-card.styles';
import { FollowingButtonComponent } from 'features/following/button';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import {
  addCharacterToFollowingList,
  removeCharacterToFollowingList
} from 'features/following/following.slices';

export type CharacterCardProps = {
  character: Character;
};

const CharacterCardComponent: FC<CharacterCardProps> = ({ character }: CharacterCardProps) => {
  const dispatch = useAppDispatch();
  const followingIds = useAppSelector((state) => state.following.followingIds);

  const onToggleFavorite = (setFav: boolean) => {
    if (setFav) {
      dispatch(addCharacterToFollowingList(character.id));
    } else {
      dispatch(removeCharacterToFollowingList(character.id));
    }
  };
  return (
    <CharacterCard>
      <img src={character.image} alt={character.name} />
      <CharacterCardBody>
        <span>{character.name}</span>
        <FollowingButtonComponent
          isFav={followingIds.indexOf(character.id) >= 0}
          onToggleFavorite={onToggleFavorite}
        />
      </CharacterCardBody>
    </CharacterCard>
  );
};

export default CharacterCardComponent;
