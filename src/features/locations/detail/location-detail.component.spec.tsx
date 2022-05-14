import { CharactersComponentProps } from 'features/characters';
import { render, screen } from '@testing-library/react';
import { LocationDetailComponent } from 'features/locations/detail/index';
import { Location } from 'features/locations';
import { locationData1Json } from 'test/mocks/locations/locations.mocks';
import { LanguageProvider } from 'features/language';

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

const location = locationData1Json as Location;

describe('LocationDetailComponent', () => {
  describe('when fetching characters', () => {
    it('should render loading', async () => {
      render(
        <LanguageProvider>
          <LocationDetailComponent loading={true} location={undefined} />
        </LanguageProvider>
      );
      //
      expect(screen.getByText('Loading...')).toBeInTheDocument();
    });
    describe('when finish loading characters', () => {
      it('should render location data', async () => {
        render(
          <LanguageProvider>
            <LocationDetailComponent loading={false} location={location} />
          </LanguageProvider>
        );
        //
        expect(screen.getByText('#1 - Planet 1')).toBeInTheDocument();
        expect(screen.getByText('Dimension C-137')).toBeInTheDocument();
      });
      it('should render characters component', async () => {
        render(
          <LanguageProvider>
            <LocationDetailComponent loading={false} location={location} />
          </LanguageProvider>
        );
        //
        expect(await screen.findByText('Characters')).toBeInTheDocument();
        expect(mockCharactersComponent).toBeCalledWith({ ids: [38] });
      });
    });
    describe('when no character', () => {
      it('should render nothing', async () => {
        render(
          <LanguageProvider>
            <LocationDetailComponent loading={false} location={undefined} />
          </LanguageProvider>
        );
        //
        expect(screen.queryByText('#1 - Planet 1')).not.toBeInTheDocument();
      });
    });
  });
});
