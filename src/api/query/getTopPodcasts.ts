import { useQuery } from 'react-query';

import { client } from '../Client';

interface TopPodcastsArgs {
  cat?: string;
  max?: number;
}

const getTopPodcasts = ({ cat, max }: TopPodcastsArgs): Promise<TopPodcast> => {
  return client.raw('/podcasts/trending', { max, cat });
};

export const useGetTopPodcasts = ({ cat, max }: TopPodcastsArgs) => {
  return useQuery<TopPodcast>([`Podcast`, cat, max], async () =>
    getTopPodcasts({ cat, max }),
  );
};
