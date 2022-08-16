import { GraphQLClient } from 'graphql-request';
const baseURL = 'https://api.podchaser.com/graphql';

export const httpClient = (query: string) => {
  const graphQLClient = new GraphQLClient(baseURL, {
    headers: {
      authorization: `Bearer ACCESSTOKEN`,
    },
  });

  return graphQLClient.request(query);
};
