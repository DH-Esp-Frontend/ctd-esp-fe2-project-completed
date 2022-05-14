import { render } from '@testing-library/react';
import FollowingPage from 'pages/Following.page';

describe('FollowingPage', () => {
  describe('when render default state', () => {
    it('should have only a text', async () => {
      const { getByText } = render(<FollowingPage />);
      //
      expect(getByText('Following Characters')).toBeInTheDocument();
    });
  });
});
