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
          'linear-gradient(rgba(0, 29, 61 ,0.9), rgba(255, 214, 10, .5)), url(https://nowthisiswhatiwouldcallmusic.files.wordpress.com/2020/01/man-wearing-headphones.jpg?w=1440)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '106vh',
      }}>
      <Nav />
      <Spacer y={5} />
      <HeaderDetails />
    </Container>
  );
};

export default Header;
