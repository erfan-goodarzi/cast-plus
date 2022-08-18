import { gql } from 'graphql-request';
import { httpClient } from '..';
import { useQuery } from 'react-query';

const getTopEpisode = (): Promise<TopEpisode> => {
  const query = gql`
    query {
      episodes(sort: { sortBy: TRENDING }) {
        data {
          title
          imageUrl
        }
      }
    }
  `;
  return httpClient(query);
};

export const useGetTopEpisode = () => {
  return useQuery<TopEpisode>(`episode`, async () => await getTopEpisode());
};
