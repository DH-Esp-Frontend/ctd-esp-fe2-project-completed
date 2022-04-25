import { render, screen } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  describe('when render default state', () => {
    it('should render a form with an input and submit button', () => {
      render(<SearchBar />);
      expect(screen.getByRole('form')).toBeInTheDocument();
      expect(screen.getByRole('button')).toBeInTheDocument();
      expect(screen.getByRole('textbox')).toBeInTheDocument();
    });
  });
});
