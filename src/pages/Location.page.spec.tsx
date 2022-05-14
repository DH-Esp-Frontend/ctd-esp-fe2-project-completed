import { render, screen } from '@testing-library/react';
import LocationPage from 'pages/Location.page';
import { LocationDetailContainerProps } from 'features/locations/detail';

const mockUseNavigate = jest.fn();
const mockUseParams = jest.fn().mockReturnValue({
  id: '1'
});
jest.mock('react-router-dom', () => ({
  useNavigate: () => mockUseNavigate,
  useParams: () => mockUseParams()
}));

const mockLocationDetailComponent = jest.fn();
jest.mock('features/locations/detail', () => ({
  LocationDetailContainer: jest.fn((props: LocationDetailContainerProps) => {
    mockLocationDetailComponent(props);
    return <div>Location Detail</div>;
  })
}));

describe('LocationsPage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  describe('when render with valid params', () => {
    it('should have rendered the location detail component', async () => {
      render(<LocationPage />);
      //
      expect(screen.getByText('Location Detail')).toBeInTheDocument();
      expect(mockLocationDetailComponent).toBeCalledWith({ id: 1 });
    });
    it('should have not called the navigate', async () => {
      render(<LocationPage />);
      //
      expect(mockUseNavigate).not.toBeCalled();
    });
  });
  describe('when render with invalid params', () => {
    it('should not rendered the location detail component', async () => {
      mockUseParams.mockReturnValueOnce({});
      render(<LocationPage />);
      //
      expect(screen.queryByText('Location Detail')).not.toBeInTheDocument();
      expect(mockLocationDetailComponent).not.toBeCalled();
    });
    it('should have called the navigate', async () => {
      mockUseParams.mockReturnValueOnce({});
      render(<LocationPage />);
      //
      expect(mockUseNavigate).toBeCalledWith('/');
    });
  });
});
