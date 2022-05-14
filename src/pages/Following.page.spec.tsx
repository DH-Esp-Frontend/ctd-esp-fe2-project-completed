import { screen } from '@testing-library/react';
import FollowingPage from 'pages/Following.page';
import { renderWithProviders } from 'test/test-utils';
import { store } from 'store/store';

describe('FollowingPage', () => {
  describe('when render default state', () => {
    it('should have only a text', async () => {
      renderWithProviders(<FollowingPage />, { store });
      //
      expect(screen.getByText('Following Characters')).toBeInTheDocument();
    });
  });
});
