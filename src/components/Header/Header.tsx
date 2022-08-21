import { Grid, css, Text, Container, Spacer } from '@nextui-org/react';
import React from 'react';
import Nav from '../Ui/Nav';
import HeaderDetails from './HeaderDetails';
import BackgroundImg from '../../assets/man-wearing-headphones.webp';
const Header = () => {
  return (
    <Container
      xl
      css={{
        background: `linear-gradient(rgba(0, 29, 61 ,0.9), rgba(255, 214, 10, .5)), url(${BackgroundImg})`,
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
