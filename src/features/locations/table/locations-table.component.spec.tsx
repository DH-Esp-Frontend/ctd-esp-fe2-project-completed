import { render, screen } from '@testing-library/react';
import { LocationsTable } from 'features/locations/table/index';
import userEvent from '@testing-library/user-event';
import { TrackingProvider } from 'features/tracking/tracking.context';

const data = [
  {
    id: 1,
    name: 'Earth (C-137)',
    type: 'Planet',
    dimension: 'Dimension C-137',
    residents: [
      'https://rickandmortyapi.com/api/character/38',
      'https://rickandmortyapi.com/api/character/45',
      'https://rickandmortyapi.com/api/character/71'
    ],
    url: 'https://rickandmortyapi.com/api/location/1',
    created: '2017-11-10T12:42:04.162Z'
  },
  {
    id: 2,
    name: 'Abadango',
    type: 'Cluster',
    dimension: 'unknown',
    residents: ['https://rickandmortyapi.com/api/character/6'],
    url: 'https://rickandmortyapi.com/api/location/2',
    created: '2017-11-10T13:06:38.182Z'
  }
];

const mockUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  useNavigate: () => mockUseNavigate
}));

describe('LocationsTable', () => {
  describe('when render with no data', () => {
    it('should display only the headers', async () => {
      render(
        <TrackingProvider>
          <LocationsTable locations={[]} />
        </TrackingProvider>
      );
      //
      expect(screen.getByText('ID')).toBeInTheDocument();
      expect(screen.getByText('Name')).toBeInTheDocument();
      expect(screen.getByText('Type')).toBeInTheDocument();
      expect(screen.getByText('Dimension')).toBeInTheDocument();
      expect(screen.getByText('# of Characters')).toBeInTheDocument();
    });
  });
  describe('when render with data', () => {
    it('should display the headers', async () => {
      render(
        <TrackingProvider>
          <LocationsTable locations={[]} />
        </TrackingProvider>
      );
      //
      expect(screen.getByText('ID')).toBeInTheDocument();
      expect(screen.getByText('Name')).toBeInTheDocument();
      expect(screen.getByText('Type')).toBeInTheDocument();
      expect(screen.getByText('Dimension')).toBeInTheDocument();
      expect(screen.getByText('# of Characters')).toBeInTheDocument();
    });
    it('should display the first entry', async () => {
      render(
        <TrackingProvider>
          <LocationsTable locations={data} />
        </TrackingProvider>
      );
      //
      expect(screen.getByText('#1')).toBeInTheDocument();
      expect(screen.getByText('Earth (C-137)')).toBeInTheDocument();
      expect(screen.getByText('Planet')).toBeInTheDocument();
      expect(screen.getByText('Dimension C-137')).toBeInTheDocument();
      expect(screen.getByText('3')).toBeInTheDocument();
    });
    it('should display the second entry', async () => {
      render(
        <TrackingProvider>
          <LocationsTable locations={data} />
        </TrackingProvider>
      );
      //
      expect(screen.getByText('#2')).toBeInTheDocument();
      expect(screen.getByText('Abadango')).toBeInTheDocument();
      expect(screen.getByText('Cluster')).toBeInTheDocument();
      expect(screen.getByText('unknown')).toBeInTheDocument();
      expect(screen.getByText('1')).toBeInTheDocument();
    });
    describe('when click in an entry row', () => {
      it('should navigate to that row', async () => {
        render(
          <TrackingProvider>
            <LocationsTable locations={data} />
          </TrackingProvider>
        );
        userEvent.click(screen.getByText('#2'));
        expect(mockUseNavigate).toBeCalledWith('/location/2');
      });
    });
  });
});
