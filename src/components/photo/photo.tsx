import { Box, Card, CardBody, Image, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { Photo as PhotoType } from '@/type';

type PhotoProps = {
  photo: PhotoType;
};

export const Photo: FC<PhotoProps> = ({ photo: { title, thumbnailUrl } }) => {
  return (
    <Card>
      <CardBody>
        <Box overflow={'hidden'}>
          <Image
            src={thumbnailUrl}
            _hover={{ transform: 'scale(1.2)' }}
            transitionDuration={'0.4s'}
          />
        </Box>
        <Text>{title}</Text>
      </CardBody>
    </Card>
  );
};
