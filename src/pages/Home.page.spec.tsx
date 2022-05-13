import { render, screen } from '@testing-library/react';
import HomePage from 'pages/Home.page';

jest.mock('features/locations', () => ({
  LocationsComponent: jest.fn(() => <div>Locations</div>)
}));

describe('InicioPagina', () => {
  describe('when render default state', () => {
    it('should have a locations UI', async () => {
      render(<HomePage />);
      //
      expect(screen.getByText('Locations')).toBeInTheDocument();
    });
  });
});
