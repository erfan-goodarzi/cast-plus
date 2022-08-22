import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadphonesSimple } from '@fortawesome/free-solid-svg-icons';
import { Button, Grid, Link, Text } from '@nextui-org/react';
import React from 'react';

const Nav = () => {
  return (
    <Grid.Container
      gap={3}
      css={{ justifyContent: 'space-around', height: '100px' }}>
      <Grid xs={1} lg={4} sm={3}>
        {' '}
        <Text
          h1
          size={24}
          css={{
            color: '#fff',
            marginLeft: '0rem',
            padding: '3px 6px',
            '@lg': {
              marginLeft: '2rem',
            },
          }}
          weight='bold'>
          Cast
        </Text>
        <Text
          h1
          size={28}
          css={{
            color: '#FFD60A',
          }}
          weight='bold'>
          +
        </Text>
      </Grid>
      <Grid xs={8} lg={6} sm={8}>
        <Link
          color='primary'
          css={{
            padding: '8px 22px',
            fontSize: '16px',
            '@xs': {
              fontSize: '14px',
            },
            '@lg': {
              fontSize: '16px',
            },
          }}
          href='#'>
          Home
        </Link>
        <Link
          color='primary'
          css={{
            padding: '8px 22px',
            fontSize: '16px',
            '@xs': {
              fontSize: '14px',
            },
            '@lg': {
              fontSize: '16px',
            },
          }}
          href='#'>
          Categories
        </Link>
        <Link
          color='primary'
          css={{
            padding: '8px 22px',
            fontSize: '16px',
            '@xs': {
              fontSize: '14px',
            },
            '@lg': {
              fontSize: '16px',
            },
          }}
          href='#'>
          Trending
        </Link>
        <Link
          color='primary'
          css={{
            padding: '8px 22px',
            fontSize: '16px',
            '@xs': {
              fontSize: '14px',
            },
            '@lg': {
              fontSize: '16px',
            },
          }}
          href='#'>
          Top Podcast
        </Link>
      </Grid>
      <Grid xs={1} lg={2} sm={1}>
        <Button
          bordered
          iconRight={<FontAwesomeIcon icon={faHeadphonesSimple} />}
          shadow
          css={{
            color: '#fff',
            borderColor: '#fff',
            borderRadius: 3,
            '@xs': {
              marginLeft: '-4rem',
              fontSize: '12px',
              padding: '0px 13px',
            },
            '@lg': {
              fontSize: '15px',
              padding: '1.25rem 1.25rem'
            },
          }}
          auto>
          Strat Listening
        </Button>
      </Grid>
    </Grid.Container>
  );
};

export default Nav;
