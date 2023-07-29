import { Container, Grid } from '@nextui-org/react';
import { Outlet } from '@tanstack/react-location';

import { Nav } from './Nav';

export const AppLayout = () => {
  return (
    <Container
      xl
      css={{
        minHeight: '100vh',
      }}
    >
      <Nav />
      <Grid.Container css={{ 'p': '30px 0', '@lg': { p: '30px !important' } }}>
        <Outlet />
      </Grid.Container>
    </Container>
  );
};
