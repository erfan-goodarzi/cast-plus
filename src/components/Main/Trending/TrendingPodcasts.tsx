import { useGetTopPodcasts } from '@cast/api';
import { Container, Text } from '@nextui-org/react';

import { TrendingCarousel } from './TrendingCarousel';

export const TrendingPodcasts = () => {
  const { data, isLoading } = useGetTopPodcasts({ max: 30 });

  return (
    <Container>
      <Text
        h1
        color="#fff"
        css={{
          '@lg': {
            fontSize: '29px',
          },
        }}
      >
        More Of What You May Like
      </Text>
      <Text
        color="#fbfbfbbd"
        css={{
          '@lg': {
            fontSize: '19px',
          },
        }}
      >
        A suggestion based on the most popular podcasts.
      </Text>
      <TrendingCarousel isLoad={isLoading} slides={data?.feeds} />
    </Container>
  );
};
