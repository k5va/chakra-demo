import { FC } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { usePagination } from '@mantine/hooks';
import { Button, List, ListItem } from '@chakra-ui/react';

const FIRST_PAGE_NUM = 1;

type PaginationProps = {
  total: number;
  current: number;
  onChange: (page: number) => void;
};

export const Pagination: FC<PaginationProps> = ({
  total,
  current,
  onChange,
}: PaginationProps): JSX.Element => {
  const pagination = usePagination({
    total,
    page: current,
    onChange,
  });

  return (
    <List display={'flex'} gap={'1rem'}>
      <ListItem>
        <Button
          isDisabled={current === FIRST_PAGE_NUM}
          color={current !== FIRST_PAGE_NUM ? 'gray.400' : 'initial'}
          onClick={() => pagination.first()}
        >
          <BiChevronLeft />
        </Button>
      </ListItem>
      {pagination.range.map((page, index) => (
        <ListItem key={index}>
          {page !== 'dots' ? (
            <Button
              borderColor={page === current ? 'violet' : 'initial'}
              fontWeight={page === current ? 'bold' : 'initial'}
              onClick={() => pagination.setPage(page)}
            >
              {page}
            </Button>
          ) : (
            '...'
          )}
        </ListItem>
      ))}
      <ListItem>
        <Button
          isDisabled={current === pagination.range.length}
          color={current !== pagination.range.length ? 'gray.400' : 'initial'}
          onClick={() => pagination.last()}
        >
          <BiChevronRight />
        </Button>
      </ListItem>
    </List>
  );
};
