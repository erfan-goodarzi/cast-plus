import { Container, Text } from '@nextui-org/react';
import { useGetTopPodcasts } from '../../api';
import { EmblaCarousel } from './EmblaCarousel';

export const TrendingPodcasts = () => {
  const { data, isLoading } = useGetTopPodcasts({ max: 30 });

  return (
    <Container>
      <Text
        h1
        color='#fff'
        css={{
          '@lg': {
            fontSize: '29px',
          },
        }}>
        More Of What You May Like
      </Text>
      <Text
        color='#fbfbfbbd'
        css={{
          '@lg': {
            fontSize: '19px',
          },
        }}>
        A suggestion based on the most popular podcasts.
      </Text>
      <EmblaCarousel isLoad={isLoading} slides={data?.feeds} />
    </Container>
  );
};
