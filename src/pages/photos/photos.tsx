import { FC, useState } from 'react';
import { Heading, SimpleGrid, Spinner, VStack } from '@chakra-ui/react';
import { usePhotos } from '@/hooks';
import { Pagination, Photo } from '@/components';

const START_PAGE = 1;
const PHOTOS_PER_PAGE = 10;
const TOTAL_PAGES = 5000 / PHOTOS_PER_PAGE;

export const Photos: FC = () => {
  const [page, setPage] = useState<number>(START_PAGE);
  const { data: photos, isLoading } = usePhotos({
    page,
    limit: PHOTOS_PER_PAGE,
  });

  if (isLoading) {
    return <Spinner mx={'auto'} />;
  }

  return (
    <VStack gap={'1rem'}>
      <Heading>Photo gallery</Heading>
      <SimpleGrid columns={[1, 2, 3, 4, 5]} gap={'1rem'}>
        {photos.map((photo) => (
          <Photo key={photo.id} photo={photo} />
        ))}
      </SimpleGrid>
      <Pagination current={page} total={TOTAL_PAGES} onChange={setPage} />
    </VStack>
  );
};
