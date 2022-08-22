import { Grid, css, Text, Container, Spacer } from '@nextui-org/react';
import React, { useState } from 'react';
import Nav from '../Ui/Nav';
import HeaderDetails from './HeaderDetails';
import BackgroundImg from '../../assets/man-wearing-headphones.webp';
import { useMediaQuery } from 'react-responsive';
import MobileNav from '../Ui/MobileNav';
const Header = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <Container
      xl
      css={{
        background: `linear-gradient(rgba(0, 29, 61 ,0.9), rgba(255, 214, 10, .5)), url(${BackgroundImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '106vh',
        '@xs': {
          height: '73vh',
        },
        '@sm': {
          height: '53vh',
        },
        '@md': {
          height: '106vh',
        },
        '@lg': {
          height: '106vh',
        },
      }}>
      {isTabletOrMobile ? <MobileNav /> : <Nav />}
      <Spacer y={5} />
      <HeaderDetails />
    </Container>
  );
};

export default Header;
