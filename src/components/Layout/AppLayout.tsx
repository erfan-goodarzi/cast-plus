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
        height: 'auto',
        overflow: 'auto'
      }}>
      {isTabletOrMobile ? <MobileNav /> : <Nav />}
      <Grid.Container style={{ padding: '30px 30px' }}>
        <Outlet />
      </Grid.Container>
    </Container>
  );
};
