import { client } from '..';
import { useQuery } from 'react-query';

const getTopPodcasts = (): Promise<TopPodcast> => {
  return client.raw('/podcasts/trending', { max: 15 });
};

export const useGetTopPodcasts = () => {
  return useQuery<TopPodcast>(`Podcast`, async () => await getTopPodcasts());
};
