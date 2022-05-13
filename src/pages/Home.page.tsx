import { Container } from '../features/styles';
import { FC } from 'react';
import { LocationsComponent } from 'features/locations';

/**
 * HomePage
 *
 * Usage:
 * ``` <HomePage /> ```
 *
 * @returns the home page
 */
const HomePage: FC = () => (
  <div>
    <Container>
      <LocationsComponent />
    </Container>
  </div>
);

export default HomePage;
