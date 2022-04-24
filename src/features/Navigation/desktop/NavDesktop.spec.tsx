import { render, screen } from '@testing-library/react';
import { NavDesktop } from 'features/navigation/desktop/index';
import { MemoryRouter } from 'react-router-dom';

const mockSearchBar = jest.fn();
jest.mock('features/search', () => ({
  SearchBar: jest.fn(() => {
    mockSearchBar();
    return <div>SearchBar</div>;
  })
}));

describe('NavDesktop', () => {
  describe('when render default state', () => {
    it('should have a list of pages and the SearchBar', async () => {
      render(
        <MemoryRouter initialEntries={[{ pathname: '/' }]}>
          <NavDesktop />
        </MemoryRouter>
      );
      //
      expect(screen.getByAltText('Digital House')).toBeInTheDocument();
      expect(screen.getByText('About')).toBeInTheDocument();
      expect(screen.getByText('Favorites')).toBeInTheDocument();
      expect(screen.getByRole('form')).toBeInTheDocument();
    });
  });
});
