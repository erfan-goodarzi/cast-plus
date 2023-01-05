import { client } from '..';
import { useQuery } from 'react-query';

const getTopThisWeek = () => {
  return client.recentFeeds({ max: 1, lang: 'en' });
};

export const useGetTopThisWeek = () => {
  return useQuery(`topThisWeek`, async () => await getTopThisWeek());
};
