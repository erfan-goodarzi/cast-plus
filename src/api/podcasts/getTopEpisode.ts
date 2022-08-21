// import { gql } from 'graphql-request';
// import { httpClient } from '..';
// import { useQuery } from 'react-query';

// const getTopEpisode = (): Promise<TopEpisode> => {
//   const query = gql`
//     query {
//       episodes(sort: { sortBy: TRENDING },  first: 5) {
//         data {
//           id
//           title
//           description
//           imageUrl
//           length
//           podcast {
//             title
//             author {
//               name
//             }
//           }
//         }
//       }
//     }
//   `;
//   return httpClient(query);
// };

// export const useGetTopEpisode = () => {
//   return useQuery<TopEpisode>(`episode`, async () => await getTopEpisode());
// };

import { gql } from 'graphql-request';
import { client, httpClient } from '..';
import { useQuery } from 'react-query';

const getTopEpisode = () => {
  return client.recentEpisodes();
};

export const useGetTopEpisode = () => {
  return useQuery(`episode`, async () => await getTopEpisode());
};
