import { render, screen } from '@testing-library/react';
import { Pagination } from 'features/pagination/index';
import PaginationInfo from 'features/pagination/pagination.types';
import userEvent from '@testing-library/user-event';

describe('Pagination', () => {
  describe('when render default state', () => {
    it('should render two buttons', async () => {
      const onPreviousPageMock = jest.fn();
      const onNextPageMock = jest.fn();
      render(
        <Pagination
          pagination={{ prev: null, next: 'next', count: 20, pages: 2 } as PaginationInfo}
          onPreviousPage={onPreviousPageMock}
          onNextPage={onNextPageMock}
        />
      );
      expect(screen.getByRole('button', { name: /previous/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /next/i })).toBeInTheDocument();
    });
    it('should render previous as disabled', async () => {
      const onPreviousPageMock = jest.fn();
      const onNextPageMock = jest.fn();
      render(
        <Pagination
          pagination={{ prev: null, next: 'next', count: 20, pages: 2 } as PaginationInfo}
          onPreviousPage={onPreviousPageMock}
          onNextPage={onNextPageMock}
        />
      );
      expect(screen.getByRole('button', { name: /previous/i })).toBeDisabled();
    });
    it('should render next as enabled', async () => {
      const onPreviousPageMock = jest.fn();
      const onNextPageMock = jest.fn();
      render(
        <Pagination
          pagination={{ prev: null, next: 'next', count: 20, pages: 2 } as PaginationInfo}
          onPreviousPage={onPreviousPageMock}
          onNextPage={onNextPageMock}
        />
      );
      expect(screen.getByRole('button', { name: /next/i })).toBeEnabled();
    });
    describe('when click on disabled prev link', () => {
      it('should call onNextPage', async () => {
        const onPreviousPageMock = jest.fn();
        const onNextPageMock = jest.fn();
        render(
          <Pagination
            pagination={{ prev: null, next: 'next', count: 20, pages: 2 } as PaginationInfo}
            onPreviousPage={onPreviousPageMock}
            onNextPage={onNextPageMock}
          />
        );
        userEvent.click(screen.getByRole('button', { name: /prev/i }));
        expect(onNextPageMock).not.toBeCalled();
      });
    });
    describe('when click on next link', () => {
      it('should call onNextPage', async () => {
        const onPreviousPageMock = jest.fn();
        const onNextPageMock = jest.fn();
        render(
          <Pagination
            pagination={{ prev: 'prev', next: 'next', count: 20, pages: 2 } as PaginationInfo}
            onPreviousPage={onPreviousPageMock}
            onNextPage={onNextPageMock}
          />
        );
        userEvent.click(screen.getByRole('button', { name: /next/i }));
        expect(onNextPageMock).toBeCalled();
      });
    });
  });
  describe('when render with prev link', () => {
    it('should render prev button as enabled', async () => {
      const onPreviousPageMock = jest.fn();
      const onNextPageMock = jest.fn();
      render(
        <Pagination
          pagination={{ prev: 'prev', next: 'next', count: 20, pages: 2 } as PaginationInfo}
          onPreviousPage={onPreviousPageMock}
          onNextPage={onNextPageMock}
        />
      );
      expect(screen.getByRole('button', { name: /previous/i })).toBeEnabled();
    });
    describe('when click on prev link', () => {
      it('should call onPreviousPage', async () => {
        const onPreviousPageMock = jest.fn();
        const onNextPageMock = jest.fn();
        render(
          <Pagination
            pagination={{ prev: 'prev', next: 'next', count: 20, pages: 2 } as PaginationInfo}
            onPreviousPage={onPreviousPageMock}
            onNextPage={onNextPageMock}
          />
        );
        userEvent.click(screen.getByRole('button', { name: /previous/i }));
        expect(onPreviousPageMock).toBeCalled();
      });
    });
  });
  describe('when render without next link', () => {
    it('should render next button as disabled', async () => {
      const onPreviousPageMock = jest.fn();
      const onNextPageMock = jest.fn();
      render(
        <Pagination
          pagination={{ prev: 'prev', next: null, count: 20, pages: 2 } as PaginationInfo}
          onPreviousPage={onPreviousPageMock}
          onNextPage={onNextPageMock}
        />
      );
      expect(screen.getByRole('button', { name: /next/i })).toBeDisabled();
    });
    describe('when click on disabled next link', () => {
      it('should not call onNextPage', async () => {
        const onPreviousPageMock = jest.fn();
        const onNextPageMock = jest.fn();
        render(
          <Pagination
            pagination={{ prev: 'prev', next: null, count: 20, pages: 2 } as PaginationInfo}
            onPreviousPage={onPreviousPageMock}
            onNextPage={onNextPageMock}
          />
        );
        userEvent.click(screen.getByRole('button', { name: /next/i }));
        expect(onNextPageMock).not.toBeCalled();
      });
    });
  });
});
