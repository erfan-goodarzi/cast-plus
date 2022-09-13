import { Card, Container, Grid, Spacer } from '@nextui-org/react';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import TrendingPodcasts from '../components/Main/TrendingPodcasts';
import MobileNav from '../components/Ui/MobileNav';
import Nav from '../components/Ui/Nav';

const Explore = () => {
  const isTabletOrMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });

  return (
    <>
      <Container
        xl
        css={{
          background: 'rgb(15, 23, 43)',
          height: '782px',
        }}>
        {isTabletOrMobile ? <MobileNav /> : <Nav />}
        <Spacer y={2} />
        <Grid.Container>
          <Grid lg={8} css={{ display: 'block !important' }}>
            <TrendingPodcasts />
          </Grid>
          <Grid lg={4}>fcsdaffs</Grid>
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

export default Explore;
