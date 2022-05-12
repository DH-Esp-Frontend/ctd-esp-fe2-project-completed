import { FC } from 'react';
import PaginationInfo from 'features/pagination/pagination.types';
import PaginationWrapper from './pagination.styles';
import Button from 'features/styles/button.styles';

type PaginationProps = {
  pagination: PaginationInfo;
  onPreviousPage: () => void;
  onNextPage: () => void;
};

const Pagination: FC<PaginationProps> = ({
  pagination,
  onPreviousPage,
  onNextPage
}: PaginationProps) => {
  const onPrev = () => {
    if (!pagination.prev) return;
    onPreviousPage();
  };

  const onNext = () => {
    if (!pagination.next) return;
    onNextPage();
  };

  return (
    <PaginationWrapper>
      <Button disabled={!pagination.prev} onClick={() => onPrev()} variant={'primary'}>
        Previous
      </Button>
      <Button disabled={!pagination.next} onClick={() => onNext()} variant={'primary'}>
        Next
      </Button>
    </PaginationWrapper>
  );
};

export default Pagination;
