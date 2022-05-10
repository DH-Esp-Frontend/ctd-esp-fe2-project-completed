import { locationReducer } from 'features/locations/index';
import { LocationsState, searchLocations } from 'features/locations/locations.slices';

describe('LocationsSlices', () => {
  describe('when doing nothing', () => {
    it('should return the initial state', async () => {
      const previousState: LocationsState = { query: '' };
      expect(locationReducer(previousState, { type: '' })).toEqual({ query: '' });
    });
  });
  describe('when searching locations', () => {
    it('should return the right query', async () => {
      const previousState: LocationsState = { query: '' };
      expect(locationReducer(previousState, searchLocations('Rick'))).toEqual({ query: 'Rick' });
    });
  });
});
