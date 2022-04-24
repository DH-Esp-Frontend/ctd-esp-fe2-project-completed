import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavMobile from './NavMobile';

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
        <MemoryRouter initialEntries={[{ pathname: '/' }]}>
          <NavMobile />
        </MemoryRouter>
      );
    });
    it('should render only the logo and the menu button', async () => {
      expect(screen.getByAltText('Digital House')).toBeInTheDocument();
      expect(screen.getByRole('button')).toBeInTheDocument();
    });
    it('menu click should show the links and search bar', async () => {
      const button = screen.getByRole('button');
      fireEvent.click(button);
      expect(screen.getByText('About')).toBeInTheDocument();
      expect(screen.getByText('Favorites')).toBeInTheDocument();
      expect(screen.getByText('SearchBar')).toBeInTheDocument();
    });
  });
});
