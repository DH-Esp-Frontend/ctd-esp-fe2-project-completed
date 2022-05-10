import { Container } from '../features/styles';
import { FC } from 'react';
import { LocationsComponent } from 'features/locations';

/**
 * Esta es la pagina principal.
 *
 * Uso:
 * ``` <PaginaInicio /> ```
 *
 * @returns la pagina de inicio
 */
const PaginaInicio: FC = () => (
  <div>
    <Container>
      <LocationsComponent />
    </Container>
  </div>
);

export default PaginaInicio;
