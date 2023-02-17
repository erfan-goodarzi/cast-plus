import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadphonesSimple } from '@fortawesome/free-solid-svg-icons';
import { Button, Text, Navbar } from '@nextui-org/react';
import { Link, useLocation } from '@tanstack/react-location';

export interface NavLinkItems {
  label: string;
  path: string;
}

const links: NavLinkItems[] = [
  {
    label: 'Home',
    path: '/home',
  },
  {
    label: 'Explore',
    path: '/explore',
  },
  {
    label: 'Trending',
    path: '/trending',
  },
  {
    label: 'Top Podcasts',
    path: '/top-podcasts',
  },
];

export const Nav = () => {
  const {
    current: { pathname },
  } = useLocation();

  return (
    <Navbar
      variant='static'
      maxWidth='fluid'
      css={{ boxShadow: 'unset', pt: 4 }}
      containerCss={{
        background: 'unset !important',
        backdropFilter: 'unset !important',
      }}>
      <Link to='/'>
        <Navbar.Brand>
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
        </Navbar.Brand>
      </Link>
      <Navbar.Content hideIn='sm' variant='default'>
        {links.map((item) => (
          <Link
            key={item.path}
            activeOptions={{ exact: pathname === item.path }}
            style={{
              padding: '8px 22px',
              fontSize: '16px',
            }}
            to={item.path}>
            {item.label}
          </Link>
        ))}
      </Navbar.Content>
      <Navbar.Content
        css={{
          '@xs': {
            w: '12%',
            jc: 'flex-end',
          },
        }}>
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
              padding: '1.25rem 1.25rem',
            },
          }}
          auto>
          <Link to='/explore'> Start Listening</Link>
        </Button>
      </Navbar.Content>
      <Navbar.Collapse>
        {links.map((item, index) => (
          <Navbar.CollapseItem
            key={item.label}
            activeColor='warning'
            css={{
              color: index === item.label.length - 1 ? '$error' : '',
            }}
            isActive={index === 2}>
            <Link color='inherit'>{item.label}</Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};
