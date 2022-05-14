import { screen } from '@testing-library/react';
import { renderWithProviders } from 'test/test-utils';
import { store } from 'store/store';
import userEvent from '@testing-library/user-event';
import { SearchBar } from 'features/search/index';

const mockUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  useNavigate: () => mockUseNavigate
}));

describe('SearchBar', () => {
  describe('when render default state', () => {
    it('should render a form with an input and submit button', async () => {
      renderWithProviders(<SearchBar />, { store });
      expect(screen.getByRole('form')).toBeInTheDocument();
      expect(screen.getByRole('button')).toBeInTheDocument();
      expect(screen.getByRole('textbox')).toBeInTheDocument();
    });
    it('should render empty search bar', async () => {
      renderWithProviders(<SearchBar />, { store });
      expect(screen.getByRole('textbox')).toHaveValue('');
    });
    describe('when enter some text', () => {
      it('should update the searchbar', async () => {
        renderWithProviders(<SearchBar />, { store });
        userEvent.type(screen.getByRole('textbox'), 'Earth');
        expect(await screen.findByRole('textbox')).toHaveValue('Earth');
      });
      it('should call the navigate to home', async () => {
        renderWithProviders(<SearchBar />, { store });
        userEvent.type(screen.getByRole('textbox'), 'Earth');
        expect(mockUseNavigate).toHaveBeenCalledWith('/');
      });
    });
  });
});
