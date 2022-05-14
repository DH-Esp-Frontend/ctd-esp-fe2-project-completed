import { store } from 'store/store';
import { renderWithProviders } from 'test/test-utils';
import { screen, waitFor } from '@testing-library/react';
import { CharacterCardComponent } from 'features/characters/card/index';
import { Character } from 'features/characters';
import userEvent from '@testing-library/user-event';
import { cleanCharacterFollowingList } from 'features/following/following.slices';

const character: Character = {
  id: 1,
  name: 'Rick',
  gender: 'Male',
  origin: { name: 'Earth (C-137)' },
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  episode: []
};

describe('CharacterCardComponent', () => {
  beforeEach(() => {
    store.dispatch(cleanCharacterFollowingList());
  });
  describe('when rendering a character', () => {
    it('should render their pick', async () => {
      renderWithProviders(<CharacterCardComponent character={character} />, { store });
      //
      expect(screen.getByAltText('Rick')).toBeInTheDocument();
    });
    it('should render name', async () => {
      renderWithProviders(<CharacterCardComponent character={character} />, { store });
      //
      expect(screen.getByText('Rick')).toBeInTheDocument();
    });
    it('should render a favorite button', async () => {
      renderWithProviders(<CharacterCardComponent character={character} />, { store });
      //
      expect(screen.getByRole('button')).toBeInTheDocument();
    });
    describe('when toggle fav', () => {
      it('should mark the character as favorite', async () => {
        renderWithProviders(<CharacterCardComponent character={character} />, { store });
        //
        userEvent.click(screen.getByRole('button'));
        expect(store.getState().following.followingIds).toStrictEqual([1]);
      });
      describe('when toggle again the fav', () => {
        it('should unmark the character as favorite', async () => {
          renderWithProviders(<CharacterCardComponent character={character} />, { store });
          //
          userEvent.click(screen.getByRole('button'));
          await waitFor(() => {
            userEvent.click(screen.getByRole('button'));
          });
          expect(store.getState().following.followingIds).toStrictEqual([]);
        });
      });
    });
  });
});
