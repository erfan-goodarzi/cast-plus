import { GraphQLClient } from 'graphql-request';
const baseURL = 'https://api.podchaser.com/graphql';

export const httpClient = (query: string) => {
  const graphQLClient = new GraphQLClient(baseURL, {
    headers: {
      authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
    },
  });

  return graphQLClient.request(query);
};

import { PodcastIndexClient } from 'podcastindexjs';

export const client = new PodcastIndexClient(
  import.meta.env.VITE_API_KEY,
  import.meta.env.VITE_API_SECRET
);
