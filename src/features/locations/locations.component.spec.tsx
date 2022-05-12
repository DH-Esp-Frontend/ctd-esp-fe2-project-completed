import { screen, waitFor } from '@testing-library/react';
import { LocationsComponent } from 'features/locations/index';
import { store } from 'store/store';
import { renderWithProviders } from 'test/test-utils';
import userEvent from '@testing-library/user-event';

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
      expect(await screen.findByText('Planet 1')).toBeInTheDocument();
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
    it('should display 2 pagination components', async () => {
      renderWithProviders(<LocationsComponent />, { store });
      expect((await screen.findAllByRole('button', { name: /Previous/i })).length).toBe(2);
      expect((await screen.findAllByRole('button', { name: /Next/i })).length).toBe(2);
    });
    describe('when click on next page', () => {
      it('should display a valid page 2', async () => {
        renderWithProviders(<LocationsComponent />, { store });
        userEvent.click((await screen.findAllByRole('button', { name: /Next/i }))[0]);
        //
        await waitFor(() => {
          expect(screen.queryByText('Planet 1')).not.toBeInTheDocument();
        });
        expect(screen.getByText('Planet 4')).toBeInTheDocument();
      });
      describe('when click on previous page', () => {
        it('should display a valid page 1 again', async () => {
          renderWithProviders(<LocationsComponent />, { store });
          userEvent.click((await screen.findAllByRole('button', { name: /Previous/i }))[0]);
          //
          expect(await screen.findByText('Planet 1')).toBeInTheDocument();
        });
      });
    });
  });
});
