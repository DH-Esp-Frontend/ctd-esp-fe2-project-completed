import { render } from '@testing-library/react';
import InicioPagina from './Inicio.pagina';

describe('InicioPagina', () => {
  describe('when render default state', () => {
    it('should have only a button displayed', async () => {
      const { getByText } = render(<InicioPagina />);
      //
      expect(getByText('Pagina de Inicio')).toBeInTheDocument();
    });
  });
});
