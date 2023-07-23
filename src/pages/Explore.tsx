import { Card, Grid, Spacer } from '@nextui-org/react';
import { Outlet, useMatches } from '@tanstack/react-location';

import { CategoriesCard, TopThisWeek, TrendingPodcasts } from '../components';

export const Explore = () => {
  const data = useMatches();

  return data.length === 1 ? ( // Check that the explore route has params
    <>
      <Grid lg={8} css={{ display: 'block !important' }}>
        <TrendingPodcasts />
        <Spacer y={1} />
        <TopThisWeek />
      </Grid>
      <Grid lg={4}>
        <CategoriesCard />
      </Grid>
      <Card
        css={{
          'position': 'fixed',
          'bottom': '2rem',
          'background': '#D2D6D9',
          '@lg': {
            height: '64vh',
            left: 27,
            width: '97%',
          },
        }}
      >
        <Card.Body
          css={{
            position: 'relative',
          }}
        />
      </Card>
    </>
  ) : (
    <Outlet />
  );
};
