import { client } from '..';
import { useQuery } from 'react-query';

const getTopEpisode = () => {
  return client.recentEpisodes({ max: 6, fulltext: true });
};

export const useGetTopEpisode = () => {
  return useQuery(`episode`, async () => await getTopEpisode());
};
