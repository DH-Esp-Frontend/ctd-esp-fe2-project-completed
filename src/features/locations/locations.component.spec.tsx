import { screen, waitFor } from '@testing-library/react';
import { LocationsComponent } from 'features/locations/index';
import { store } from 'store/store';
import { renderWithProviders } from 'test/test-utils';

describe('Locations', () => {
  describe('when render default loading state', () => {
    it('should have a loading message', async () => {
      renderWithProviders(<LocationsComponent />, { store });
      //
      expect(screen.getByText('Cargando ubicaciones interplanetarias...')).toBeInTheDocument();
    });
  });
  describe('when api returns success', () => {
    it('should have values displayed', async () => {
      renderWithProviders(<LocationsComponent />, { store });
      //
      expect(await screen.findByText('Earth (C-137)')).toBeInTheDocument();
      expect(
        screen.queryByText('Cargando ubicaciones interplanetarias...')
      ).not.toBeInTheDocument();
    });
    it('should not display loading anymore', async () => {
      renderWithProviders(<LocationsComponent />, { store });
      //
      await waitFor(() => {
        expect(
          screen.queryByText('Cargando ubicaciones interplanetarias...')
        ).not.toBeInTheDocument();
      });
    });
  });
});
