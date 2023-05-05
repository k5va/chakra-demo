import { useEffect, useState } from 'react';
import ky from 'ky';
import { Photo } from '../type';
import { photoSchema } from '../schema';
import { useToastError } from '.';

export const usePhotos = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { toast } = useToastError();

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
        if (error instanceof Error) {
          setError(error.message);
          toast(error.message);
        }
        console.error(error);
      }

      setLoading(false);
    };

    fetchPhotos();
  }, [toast]);

  return { data: photos, isLoading: loading, error };
};
