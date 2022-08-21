import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown, Grid, Link, Text } from '@nextui-org/react';

const MobileNav = () => {
  return (
    <Grid.Container
      gap={3}
      css={{ justifyContent: 'space-around', height: '100px' }}>
      <Grid xs={12}>
        <Text
          h1
          size={24}
          css={{
            color: '#fff',
            padding: '3px 6px',
            ml: '7.5rem',
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
      <Grid xs={12}>
        <Link
          color='primary'
          css={{ fontSize: '14px', padding: '0 11px' }}
          href='#'>
          Home
        </Link>
        <Link
          color='primary'
          css={{ fontSize: '14px', padding: '0 11px' }}
          href='#'>
          Categories
        </Link>
        <Link
          color='primary'
          css={{ fontSize: '14px', padding: '0 11px' }}
          href='#'>
          Trending
        </Link>
        <Link
          color='primary'
          
          css={{ fontSize: '14px', padding: '0 11px', width: '120%' }}
          href='#'>
        Podcasts
        </Link>
      </Grid>
    </Grid.Container>
  );
};

export default MobileNav;
