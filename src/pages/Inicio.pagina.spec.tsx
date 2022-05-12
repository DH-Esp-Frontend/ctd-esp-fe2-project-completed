import InicioPagina from './Inicio.pagina';
import { renderWithProviders } from '../test/test-utils';
import { store } from 'store/store';

describe('InicioPagina', () => {
  describe('when render default state', () => {
    it('should have only a button displayed', async () => {
      const { getByText } = renderWithProviders(<InicioPagina />, { store });
      //
      expect(getByText('Cargando ubicaciones interplanetarias...')).toBeInTheDocument();
    });
  });
});
