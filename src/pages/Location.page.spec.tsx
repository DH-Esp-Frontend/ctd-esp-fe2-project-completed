import { render } from '@testing-library/react';
import LocationPage from 'pages/Location.page';

describe('LocationsPage', () => {
  describe('when render default state', () => {
    it('should have only a text displayed', async () => {
      const { getByText } = render(<LocationPage />);
      //
      expect(getByText('Location Page')).toBeInTheDocument();
    });
  });
});
