import { Button, Grid, Link, Text } from '@nextui-org/react';
import React from 'react';

const Nav = () => {
  return (
    <Grid.Container gap={3} css={{ justifyContent: 'space-around', height: '100px' }}>
      <Grid xs={4}>
        {' '}
        <Text
          h1
          size={24}
          css={{
            color: '#fff',
            marginLeft: '2rem',
            padding: '3px 6px',
          }}
          weight='bold'>
          Cast
        </Text>
        <Text
          h1
          size={28}
          css={{
            color: '$yellow600',
          }}
          weight='bold'>
          +
        </Text>
      </Grid>
      <Grid xs={6}>
        <Link color='primary' css={{ padding: '8px 22px' }} href='#'>
          Home
        </Link>
        <Link color='primary' css={{ padding: '8px 22px' }} href='#'>
          Categories
        </Link>
        <Link color='primary' css={{ padding: '8px 22px' }} href='#'>
          Trending
        </Link>
        <Link color='primary' css={{ padding: '8px 22px' }} href='#'>
          Top Podcast
        </Link>
      </Grid>
      <Grid xs={2}>
        <Button
          bordered
          shadow
          css={{ color: '#fff', borderColor: '#fff', borderRadius: 3 }}
          auto>
          Strat Listening
        </Button>
      </Grid>
    </Grid.Container>
  );
};

export default Nav;
