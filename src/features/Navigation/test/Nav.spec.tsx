import { render } from '@testing-library/react';
import Navbar from '../Navbar';

describe('NavBar', () => {
  it('should render two components', async () => {
    const { findAllByRole } = render(<Navbar />);
    //
    expect(getByText('Pagina de About')).toBeInTheDocument();
  });
});
