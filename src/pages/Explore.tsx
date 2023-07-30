import { Card, Grid, Spacer } from '@nextui-org/react';
import { Outlet, useMatches } from '@tanstack/react-location';

import { CategoriesCard, TopThisWeek, TrendingPodcasts } from '../components';

export const Explore = () => {
  const data = useMatches();

  return data.length === 1 ? ( // Check that the explore route has params
    <Grid.Container css={{ 'gap': 50, '@lg': { gap: '0 !important' } }}>
      <Grid lg={8} sm={12} xs={12} css={{ display: 'block !important' }}>
        <TrendingPodcasts />
        <Spacer y={1} />
        <TopThisWeek />
      </Grid>
      <Grid lg={4} sm={12} xs={12}>
        <CategoriesCard />
      </Grid>
      <Card
        css={{
          'display': 'none',
          '@lg': {
            position: 'fixed',
            height: '64vh',
            background: '#D2D6D9',
            display: 'block',
            bottom: '2rem',
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
    </Grid.Container>
  ) : (
    <Outlet />
  );
};
