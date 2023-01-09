import { client } from '..';
import { useQuery } from 'react-query';

export const getPodcastById = (id: number) => {
  return client.podcastById(id);
};

export const useGetPodcastById = (id: number | undefined) => {
  console.log(!!id);
  return useQuery(['getPodcastById', id], () => getPodcastById(id!), {
    enabled: !!id,
  });
};
