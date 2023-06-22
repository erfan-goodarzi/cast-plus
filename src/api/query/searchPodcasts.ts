import { useQuery } from 'react-query';
import { client } from '../Client';

const searchPodcasts = (query: string) => {
  return client.search(query, { max: 15 });
};

export const useSearchPodcasts = (query: string) => {
  return useQuery(
    ['searchPodcast', query],
    async () => await searchPodcasts(query),
    {
      enabled: !!query,
    }
  );
};
