import { useGetTopPodcasts } from '@cast/api';
import { FailureNotification } from '@cast/notification';
import { Container, Text } from '@nextui-org/react';

import { TrendingCarousel } from './TrendingCarousel';

export const TrendingPodcasts = () => {
  const { data, isLoading, isError } = useGetTopPodcasts({ max: 30 });

  if (isError) {
    FailureNotification();
    return null;
  }

  return (
    <Container
      css={{ '@xs': { paddingInline: 0 }, '@sm': { paddingInline: 'auto' } }}
    >
      <Text
        h1
        color="#fff"
        css={{
          'fontSize': 23,
          'textAlign': 'center',
          '@lg': {
            textAlign: 'left',
            fontSize: '29px',
          },
        }}
      >
        More Of What You May Like
      </Text>
      <Text
        color="#fbfbfbbd"
        css={{
          'textAlign': 'center',
          '@lg': {
            textAlign: 'left',
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
