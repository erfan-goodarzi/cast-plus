import { useQuery } from 'react-query';

import { client } from '../Client';

export const getPodcastById = (id: number) => {
  return client.podcastById(id);
};

export const useGetPodcastById = (id: number | undefined) => {
  return useQuery(['getPodcastById', id], () => getPodcastById(id!), {
    enabled: !!id,
  });
};
