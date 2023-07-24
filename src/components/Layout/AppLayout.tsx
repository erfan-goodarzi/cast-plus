import { MobileNav, Nav } from '@cast/design';
import { Container, Grid } from '@nextui-org/react';
import { Outlet } from '@tanstack/react-location';
import { useMediaQuery } from 'react-responsive';

export const AppLayout = () => {
  const isTabletOrMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });

  return (
    <Container
      xl
      css={{
        background: 'rgb(15, 23, 43)',
        minHeight: '100vh',
      }}
    >
      {isTabletOrMobile ? <MobileNav /> : <Nav />}
      <Grid.Container style={{ padding: '30px 30px' }}>
        <Outlet />
      </Grid.Container>
    </Container>
  );
};
