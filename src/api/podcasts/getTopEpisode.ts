import { gql } from 'graphql-request';
import { httpClient } from '..';

export const getTopEpisode = () => {
  const query = gql`
    {
      podcasts(searchTerm: "بی پلاس") {
        data {
          id
          title
          description
          imageUrl
        }
      }
    }
  `;
  httpClient(query).then((res) => console.log(res));
};
