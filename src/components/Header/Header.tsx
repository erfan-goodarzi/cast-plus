import { Grid, css, Text, Container, Spacer } from '@nextui-org/react';
import React from 'react';
import Nav from '../Ui/Nav';
import HeaderDetails from './HeaderDetails';

const Header = () => {
  return (
    <Container
      xl
      css={{
        background:
          'linear-gradient(rgba(20, 33, 61 ,0.9), rgba(252, 163, 17, .6)), url(https://nowthisiswhatiwouldcallmusic.files.wordpress.com/2020/01/man-wearing-headphones.jpg?w=1440)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      }}>
      <Nav />
      <Spacer y={4} />
      <HeaderDetails />
    </Container>
  );
};

export default Header;
