import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

describe('AboutPagina', () => {
  describe('when render default state', () => {
    it('should have only a button displayed', async () => {
      render(<Navbar />);
      //
      screen.debug();
    });
  });
});
