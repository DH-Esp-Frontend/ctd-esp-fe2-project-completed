import { render, screen } from '@testing-library/react';
import { NavDesktop } from 'features/navigation/desktop/index';
import { MemoryRouter } from 'react-router-dom';
import { LanguageProvider } from 'features/language';

const mockSearchBar = jest.fn();
jest.mock('features/search', () => ({
  SearchBar: jest.fn(() => {
    mockSearchBar();
    return <div>SearchBar</div>;
  })
}));

describe('NavDesktop', () => {
  describe('when render default state', () => {
    it('should have a list of pages', async () => {
      render(
        <LanguageProvider>
          <MemoryRouter initialEntries={[{ pathname: '/' }]}>
            <NavDesktop />
          </MemoryRouter>
        </LanguageProvider>
      );
      //
      expect(screen.getByAltText('Digital House')).toBeInTheDocument();
      expect(screen.getByText('Home')).toBeInTheDocument();
      expect(screen.getByText('Following')).toBeInTheDocument();
    });
    it('should render a SearchBar', async () => {
      render(
        <LanguageProvider>
          <MemoryRouter initialEntries={[{ pathname: '/' }]}>
            <NavDesktop />
          </MemoryRouter>
        </LanguageProvider>
      );
      expect(screen.getByText('SearchBar')).toBeInTheDocument();
    });
  });
});
