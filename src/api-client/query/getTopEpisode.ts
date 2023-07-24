import { useQuery } from 'react-query';

import { client } from '../Client';

const getTopEpisode = () => {
  return client.recentEpisodes({ max: 6, fulltext: true });
};

export const useGetTopEpisode = () => {
  return useQuery(`episode`, async () => getTopEpisode());
};
