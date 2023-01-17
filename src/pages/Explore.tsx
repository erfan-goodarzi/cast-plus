import { Grid, Spacer } from '@nextui-org/react';
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
    </>
  );
};
