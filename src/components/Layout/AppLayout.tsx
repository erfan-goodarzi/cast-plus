import { Card, Container, Grid } from '@nextui-org/react';
import { Outlet } from '@tanstack/react-location';
import { useMediaQuery } from 'react-responsive';
import { MobileNav, Nav } from '../Ui';

export const AppLayout = () => {
  const isTabletOrMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });

  return (
    <Container
      xl
      css={{
        background: 'rgb(15, 23, 43)',
        height: '100vh',
      }}>
      {isTabletOrMobile ? <MobileNav /> : <Nav />}
      <Grid.Container style={{ padding: '30px 30px' }}>
        <Outlet />
      </Grid.Container>
      <Card
        css={{
          position: 'fixed',
          bottom: '2rem',
          background: '#D2D6D9',

          '@lg': {
            height: '58vh',
            width: '97%',
          },
        }}>
        <Card.Body
          css={{
            position: 'relative',
          }}></Card.Body>
      </Card>
    </Container>
  );
};
