import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { NavMobile } from 'features/navigation/mobile/index';
import { LanguageProvider } from 'features/language';

const mockSearchBar = jest.fn();
jest.mock('features/search', () => ({
  SearchBar: jest.fn(() => {
    mockSearchBar();
    return <div>SearchBar</div>;
  })
}));

describe('NavMobile', () => {
  describe('when render default state', () => {
    beforeEach(() => {
      render(
        <LanguageProvider>
          <MemoryRouter initialEntries={[{ pathname: '/' }]}>
            <NavMobile />
          </MemoryRouter>
        </LanguageProvider>
      );
    });
    it('should render the logo and the menu button', async () => {
      expect(screen.getByAltText('Digital House')).toBeInTheDocument();
      expect(screen.getByRole('button')).toBeInTheDocument();
    });
    it('should not render the pages list', async () => {
      expect(screen.queryByText('Home')).not.toBeInTheDocument();
      expect(screen.queryByText('Following')).not.toBeInTheDocument();
      expect(screen.queryByText('SearchBar')).not.toBeInTheDocument();
    });
    it('should not render the search bar', async () => {
      expect(screen.queryByText('SearchBar')).not.toBeInTheDocument();
    });
    describe('when click on the menu button', () => {
      it('should show the links and search bar', async () => {
        const button = screen.getByRole('button');
        userEvent.click(button);
        expect(await screen.findByText('Home')).toBeInTheDocument();
        expect(await screen.findByText('Following')).toBeInTheDocument();
      });
      it('should show the search bar', async () => {
        const button = screen.getByRole('button');
        userEvent.click(button);
        expect(await screen.findByText('SearchBar')).toBeInTheDocument();
      });
    });
  });
});
