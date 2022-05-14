import { CharactersComponentProps } from 'features/characters';
import { store } from 'store/store';
import { renderWithProviders } from 'test/test-utils';
import { screen } from '@testing-library/react';
import { locationsApi } from 'features/locations';
import LocationDetailComponent from 'features/locations/detail/location-detail.component';

const mockCharactersComponent = jest.fn();
jest.mock('features/characters', () => {
  const actualCharactersModule = jest.requireActual('features/characters');
  return {
    ...actualCharactersModule,
    CharactersComponent: jest.fn((props: CharactersComponentProps) => {
      mockCharactersComponent(props);
      return <div>Characters</div>;
    })
  };
});

describe('LocationDetailComponent', () => {
  beforeEach(() => {
    store.dispatch(locationsApi.util.resetApiState());
  });
  describe('when fetching characters', () => {
    it('should render loading', async () => {
      renderWithProviders(<LocationDetailComponent id={1} />, { store });
      //
      expect(screen.getByText('Loading location...')).toBeInTheDocument();
    });
    describe('when finish loading characters', () => {
      it('should render location data', async () => {
        renderWithProviders(<LocationDetailComponent id={1} />, { store });
        //
        expect(await screen.findByText('#1 - Planet 1')).toBeInTheDocument();
        expect(screen.getByText('Dimension C-137')).toBeInTheDocument();
      });
      it('should render characters component', async () => {
        renderWithProviders(<LocationDetailComponent id={1} />, { store });
        //
        expect(await screen.findByText('Characters')).toBeInTheDocument();
        expect(mockCharactersComponent).toBeCalledWith({ ids: [38] });
      });
    });
  });
});
