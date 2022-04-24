import { fireEvent, render, screen } from '@testing-library/react';
import { NavMobile } from 'features/navigation/mobile';
import { MemoryRouter } from 'react-router-dom';

let mockIsOpen = false;
const mockOnOpen = jest.fn();
jest.mock('features/modal/useDisclosure', () =>
  jest.fn(() => ({
    isOpen: mockIsOpen,
    onOpen: mockOnOpen
  }))
);

describe('useDisclosure', () => {
  it('onOpen should be call when menu is clicked ', async () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: '/' }]}>
        <NavMobile />
      </MemoryRouter>
    );
    const button = screen.getByLabelText('menu-button');
    fireEvent.click(button);
    expect(mockOnOpen).toBeCalled();
  });
  it('should show the modal if isOpen is true', async () => {
    mockIsOpen = true;
    render(
      <MemoryRouter initialEntries={[{ pathname: '/' }]}>
        <NavMobile />
      </MemoryRouter>
    );
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Favorites')).toBeInTheDocument();
  });
  it('should not show the modal if isOpen is false', async () => {
    mockIsOpen = false;
    render(
      <MemoryRouter initialEntries={[{ pathname: '/' }]}>
        <NavMobile />
      </MemoryRouter>
    );
    expect(screen.queryByText('About')).not.toBeInTheDocument();
    expect(screen.queryByText('Favorites')).not.toBeInTheDocument();
  });
});
