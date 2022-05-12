import { locationReducer } from 'features/locations/index';
import {
  LocationsState,
  nextLocations,
  previousLocations,
  searchLocations
} from 'features/locations/locations.slices';

describe('LocationsSlices', () => {
  describe('when doing nothing', () => {
    it('should return the initial state', async () => {
      const previousState: LocationsState = { query: '', page: 1 };
      expect(locationReducer(previousState, { type: '' })).toEqual({ query: '', page: 1 });
    });
  });
  describe('when searching locations', () => {
    it('should return the right query', async () => {
      const previousState: LocationsState = { query: '', page: 1 };
      expect(locationReducer(previousState, searchLocations('Rick'))).toEqual({
        query: 'Rick',
        page: 1
      });
    });
  });
  describe('when increasing a page', () => {
    it('should return the next page', async () => {
      const previousState: LocationsState = { query: 'Rick', page: 3 };
      expect(locationReducer(previousState, nextLocations())).toEqual({
        query: 'Rick',
        page: 4
      });
    });
  });
  describe('when decreasing a page', () => {
    describe('and there is a previous page', () => {
      it('should return the previous page', async () => {
        const previousState: LocationsState = { query: 'Rick', page: 3 };
        expect(locationReducer(previousState, previousLocations())).toEqual({
          query: 'Rick',
          page: 2
        });
      });
    });
    describe('and there is not a valid previous page', () => {
      it('should return the same page', async () => {
        const previousState: LocationsState = { query: 'Rick', page: 1 };
        expect(locationReducer(previousState, previousLocations())).toEqual({
          query: 'Rick',
          page: 1
        });
      });
    });
  });
});
