import { useDisclosure } from 'features/modal/index';
import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-dom/test-utils';

describe('useDisclosure', () => {
  describe('when set initial value as true', () => {
    it('should be opened', async () => {
      const { result } = renderHook(() => useDisclosure(true));
      expect(result.current.isOpen).toBeTruthy();
    });
    describe('when toggle', () => {
      it('should be closed', async () => {
        const { result } = renderHook(() => useDisclosure(true));
        act(() => {
          result.current.toggle();
        });
        expect(result.current.isOpen).toBeFalsy();
      });
    });
  });
  describe('when set initial value as false', () => {
    it('should be closed', async () => {
      const { result } = renderHook(() => useDisclosure(false));
      expect(result.current.isOpen).toBeFalsy();
    });
    describe('when toggle', () => {
      it('should be opened', async () => {
        const { result } = renderHook(() => useDisclosure(false));
        act(() => {
          result.current.toggle();
        });
        expect(result.current.isOpen).toBeTruthy();
      });
    });
  });
});
