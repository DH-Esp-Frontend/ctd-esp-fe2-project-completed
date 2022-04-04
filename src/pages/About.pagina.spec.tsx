import { render } from '@testing-library/react';
import AboutPagina from './About.pagina';

describe('AboutPagina', () => {
  describe('when render default state', () => {
    it('should have only a button displayed', async () => {
      const { getByText } = render(<AboutPagina />);
      //
      expect(getByText('Pagina de About')).toBeInTheDocument();
    });
  });
});
