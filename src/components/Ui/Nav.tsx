import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeadphonesSimple,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import {
  Button,
  Text,
  Navbar,
  Input,
  FormElement,
  Loading,
  Card,
  Grid,
  Badge,
} from '@nextui-org/react';
import { Link, useLocation } from '@tanstack/react-location';
import { useSearchPodcasts } from '../../api';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useStore } from '../../store';

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
    label: 'Categories',
    path: '/categories',
  },
];

export const Nav = () => {
  const {
    current: { pathname },
  } = useLocation();
  const [searchQuery, setSearchQuery] = useState<string>();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const { searchResult } = useStore();
  const setPodcastResult = useStore((state) => state.setSearchResult);
  const { data, isLoading, error } = useSearchPodcasts(searchQuery!);
  const inputRef = useRef<FormElement>(null);

  useEffect(() => {
    if (data) {
      setPodcastResult(data.feeds);
    }
  }, [data]);

  const clearCardResult = () => {
    inputRef.current!.value = '';
    setIsVisible(false);
  };

  const handleChange = (e: ChangeEvent<FormElement>) => {
    setSearchQuery(e.target.value);
    e.target.value === '' ? setIsVisible(false) : setIsVisible(true);
  };
  if (error) console.log(error);

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
      <Navbar.Content
        hideIn='sm'
        variant='default'
        css={{ ml: '22rem', pt: 13 }}>
        {links.map((item) => (
          <Link
            key={item.path}
            activeOptions={{ exact: pathname === item.path }}
            style={{
              padding: '8px 22px',
              fontSize: '16px',
            }}
            to={item.path}>
            {item.label === 'Trending' ? (
              <Badge size='xs' variant='default' isSquared>
                CS
              </Badge>
            ) : null}
            {item.label}
          </Link>
        ))}
      </Navbar.Content>
      <Navbar.Content
        css={{
          position: 'relative',
          display: 'inline',
          pt: '1.3rem',
        }}>
        <Navbar.Item>
          <Input
            ref={inputRef}
            aria-label='search'
            onChange={handleChange}
            clearable
            underlined
            status='primary'
            color='primary'
            placeholder='Search for Podcasts'
            width='300px'
            size='lg'
            css={{
              fontSize: '40xp',
              '::placeholder': {
                color: '#fff',
              },
            }}
            contentLeft={
              isLoading ? (
                <Loading size='xs' />
              ) : (
                <FontAwesomeIcon icon={faSearch} />
              )
            }
          />
        </Navbar.Item>
        <Card
          css={{
            display: isVisible ? 'block' : 'none',
            position: 'absolute',
            height: '53vh',
            overflowY: 'scroll',
            mt: 20,
            width: '145%',
            borderRadius: 3,
          }}>
          {searchResult?.map(({ title, ownerName, image, id }) => (
            <Link to={`/explore/${id}`} replace key={id}>
              <Card.Header
                onClick={() => clearCardResult()}
                css={{
                  border: '1px solid #ddd',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    boxShadow: '-1px 3px 16px 13px #ddd',
                  },
                }}>
                <img alt={title} src={image} width='70px' height='70px' />
                <Grid.Container
                  direction='column'
                  css={{
                    pl: 12,
                  }}>
                  <Grid xs={12}>
                    <Text size='$lg'>{title}</Text>
                  </Grid>
                  <Grid xs={12}>
                    <Text css={{ color: '$accents8' }}>
                      Made By: {ownerName.substring(0, 30)}
                    </Text>
                  </Grid>
                </Grid.Container>
              </Card.Header>
            </Link>
          ))}
        </Card>
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
