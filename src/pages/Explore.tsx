import { Card, Container, Grid, Spacer, Text } from '@nextui-org/react';
import { useMediaQuery } from 'react-responsive';
import { Categories, RecentPlayed, TrendingPodcasts } from '../components/Main';
import { MobileNav, Nav } from '../components/Ui';

export const Explore = () => {
  const isTabletOrMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });

  return (
    <>
      <Container
        xl
        css={{
          background: 'rgb(15, 23, 43)',
          height: '100vh',
        }}>
        {isTabletOrMobile ? <MobileNav /> : <Nav />}
        <Grid.Container style={{ padding: '30px 30px' }}>
          <Grid lg={8} css={{ display: 'block !important' }}>
            <TrendingPodcasts />
            <Spacer y={1} />
            <RecentPlayed />
          </Grid>
          <Grid lg={4}>
            <Categories />
          </Grid>
        </Grid.Container>
        <Card
          css={{
            position: 'fixed',
            bottom: '2rem',
            background: '#D2D6D9',

            '@lg': {
              height: '60vh',
              width: '97%',
            },
          }}>
          <Card.Body
            css={{
              position: 'relative',
            }}></Card.Body>
        </Card>
      </Container>
    </>
  );
};
