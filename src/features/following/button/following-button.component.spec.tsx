import { render, screen } from '@testing-library/react';
import FollowingButtonComponent from 'features/following/button/following-button.component';
import userEvent from '@testing-library/user-event';

describe('FollowingButtonComponent', () => {
  describe('when render default state', () => {
    it('should not be favorite', async () => {
      const mockOnToggleFavorite = jest.fn();
      render(<FollowingButtonComponent isFav={false} onToggleFavorite={mockOnToggleFavorite} />);
      //
      expect(screen.getByAltText('is_not_favorite')).toBeInTheDocument();
    });
  });
  describe('when render as fav', () => {
    it('should be favorite', async () => {
      const mockOnToggleFavorite = jest.fn();
      render(<FollowingButtonComponent isFav={true} onToggleFavorite={mockOnToggleFavorite} />);
      //
      expect(screen.getByAltText('is_favorite')).toBeInTheDocument();
    });
  });
  describe('when clicking the button', () => {
    it('should call toggle', async () => {
      const mockOnToggleFavorite = jest.fn();
      render(<FollowingButtonComponent isFav={true} onToggleFavorite={mockOnToggleFavorite} />);
      //
      userEvent.click(screen.getByRole('button'));
      expect(mockOnToggleFavorite).toBeCalledWith(false);
    });
  });
});
