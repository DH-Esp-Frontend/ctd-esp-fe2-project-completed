import { render } from '@testing-library/react';
import DetallePagina from './Detalle.pagina';

describe('DetallePagina', () => {
  describe('when render default state', () => {
    it('should have only a button displayed', async () => {
      const { getByText } = render(<DetallePagina />);
      //
      expect(getByText('Pagina de Detalle')).toBeInTheDocument();
    });
  });
});
