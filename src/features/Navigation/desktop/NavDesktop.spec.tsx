import { render, screen } from '@testing-library/react';
import { NavDesktop } from 'features/navigation/desktop/index';
import { MemoryRouter } from 'react-router-dom';

describe('NavDesktop', () => {
  describe('when render default state', () => {
    it('should have a list of pages', async () => {
      render(
        <MemoryRouter initialEntries={[{ pathname: '/' }]}>
          <NavDesktop />
        </MemoryRouter>
      );
      //
      expect(screen.getByAltText('Digital House')).toBeInTheDocument();
      expect(screen.getByText('About')).toBeInTheDocument();
      expect(screen.getByText('Favorites')).toBeInTheDocument();
    });
  });
});
