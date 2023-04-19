import { client } from '..';
import { useQuery } from 'react-query';

interface TopPodcastsArgs {
  cat?: string;
  max?: number;
}

const getTopPodcasts = ({ cat, max }: TopPodcastsArgs): Promise<TopPodcast> => {
  return client.raw('/podcasts/trending', { max: max, cat: cat });
};

export const useGetTopPodcasts = ({ cat, max }: TopPodcastsArgs) => {
  return useQuery<TopPodcast>(
    [`Podcast`, cat, max],
    async () => await getTopPodcasts({ cat: cat, max: max })
  );
};
