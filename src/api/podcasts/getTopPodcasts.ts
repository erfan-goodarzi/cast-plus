import { client } from '..';
import { useQuery } from 'react-query';

const getTopPodcasts = (cat?: string): Promise<TopPodcast> => {
  return client.raw('/podcasts/trending', { max: 15, cat: cat });
};

export const useGetTopPodcasts = (cat?: string) => {
  return useQuery<TopPodcast>(
    [`Podcast`, cat],
    async () => await getTopPodcasts(cat)
  );
};
