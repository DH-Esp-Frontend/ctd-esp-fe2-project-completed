import { render, screen } from '@testing-library/react';
import { Navbar } from 'features/navigation/index';

const mockNavbarDesktop = jest.fn();
jest.mock('features/navigation/desktop', () => ({
  NavDesktop: jest.fn(() => {
    mockNavbarDesktop();
    return <div>Navbar Desktop</div>;
  })
}));

const mockNavbarMobile = jest.fn();
jest.mock('features/navigation/mobile', () => ({
  NavMobile: jest.fn(() => {
    mockNavbarMobile();
    return <div>Navbar Mobile</div>;
  })
}));

describe('Navbar', () => {
  describe('when render default state', () => {
    it('should have a desktop navbar', async () => {
      render(<Navbar />);
      //
      expect(screen.getByText('Navbar Desktop')).toBeInTheDocument();
      expect(mockNavbarDesktop).toBeCalled();
    });
    it('should have a mobile navbar', async () => {
      render(<Navbar />);
      //
      expect(screen.getByText('Navbar Mobile')).toBeInTheDocument();
      expect(mockNavbarMobile).toBeCalled();
    });
  });
});
