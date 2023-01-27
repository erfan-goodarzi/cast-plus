import { Card, Grid, Spacer } from '@nextui-org/react';
import { Categories, TopThisWeek, TrendingPodcasts } from '../components/Main';

export const Explore = () => {
  return (
    <>
      <Grid lg={8} css={{ display: 'block !important' }}>
        <TrendingPodcasts />
        <Spacer y={1} />
        <TopThisWeek />
      </Grid>
      <Grid lg={4}>
        <Categories />
      </Grid>
      <Card
        css={{
          position: 'fixed',
          bottom: '2rem',
          background: '#D2D6D9',
          '@lg': {
            height: '64vh',
            left: 27,
            width: '97%',
          },
        }}>
        <Card.Body
          css={{
            position: 'relative',
          }}></Card.Body>
      </Card>
    </>
  );
};
