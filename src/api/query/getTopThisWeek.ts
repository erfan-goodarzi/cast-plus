import { useQuery } from 'react-query';

import { client } from '../Client';

const getTopThisWeek = () => {
  return client.recentFeeds({ max: 1, lang: 'en' });
};

export const useGetTopThisWeek = () => {
  return useQuery(`topThisWeek`, async () => getTopThisWeek());
};
