import { FC } from 'react';
import { usePhotos } from '../../hooks';
import { SimpleGrid, Text } from '@chakra-ui/react';
import { Photo } from '../../components';

export const Photos: FC = () => {
  const { data: photos, isLoading } = usePhotos();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <SimpleGrid columns={[1, 2, 3, 4, 5]} gap={'1rem'}>
      {photos.map((photo) => (
        <Photo key={photo.id} photo={photo} />
      ))}
    </SimpleGrid>
  );
};
