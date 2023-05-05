import { useEffect, useState } from 'react';
import ky from 'ky';
import { Photo } from '../type';
import { photoSchema } from '../schema';

export const usePhotos = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchPhotos = async () => {
      setLoading(true);
      setError(null);

      try {
        const json = await ky
          .get('https://jsonplaceholder.typicode.com/photos?_limit=100')
          .json();

        setPhotos(await photoSchema.array().parseAsync(json));
      } catch (error) {
        //TODO: process error
        console.log(error);
      }

      setLoading(false);
    };

    fetchPhotos();
  }, []);

  return { data: photos, isLoading: loading, error };
};
