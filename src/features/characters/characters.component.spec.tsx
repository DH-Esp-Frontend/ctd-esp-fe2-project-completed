import { screen } from '@testing-library/react';
import { CharacterCardProps } from 'features/characters/card';
import { charactersApi, CharactersComponent } from 'features/characters/index';
import { renderWithProviders } from 'test/test-utils';
import { store } from 'store/store';

const mockCharacterCardComponent = jest.fn();
jest.mock('features/characters/card', () => ({
  CharacterCardComponent: jest.fn((props: CharacterCardProps) => {
    mockCharacterCardComponent(props);
    return <div>Character card</div>;
  })
}));

describe('CharactersComponent', () => {
  beforeEach(() => {
    store.dispatch(charactersApi.util.resetApiState());
  });
  describe('when fetching characters', () => {
    it('should render loading', async () => {
      renderWithProviders(<CharactersComponent ids={[1]} />, { store });
      //
      expect(screen.getByText('Loading characters...')).toBeInTheDocument();
    });
  });
  describe('when finish loading with only one id', () => {
    it('should render one card', async () => {
      renderWithProviders(<CharactersComponent ids={[1]} />, { store });
      //
      expect(await screen.findByText('Character card')).toBeInTheDocument();
    });
  });
  describe('when finish loading with multiple ids', () => {
    it('should render multiple cards', async () => {
      renderWithProviders(<CharactersComponent ids={[1, 3]} />, { store });
      //
      expect((await screen.findAllByText('Character card')).length).toBe(2);
    });
  });
});
