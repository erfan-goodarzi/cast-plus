import { useSearchPodcasts } from '@cast/api';
import { Badge, Brand, SearchInput } from '@cast/design';
import { faHeadphonesSimple } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { FormElement } from '@nextui-org/react';
import { Button, Navbar } from '@nextui-org/react';
import { Link, useLocation } from '@tanstack/react-location';
import type { ChangeEvent } from 'react';
import { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import { useStore } from '../../store';
import { SearchResult } from '../Search';
import { MobileNav } from './MobileNav';

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
  const setPodcastResult = useStore(state => state.setSearchResult);
  const { data, isLoading, error } = useSearchPodcasts(searchQuery!);
  const inputRef = useRef<FormElement>(null);
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 767px)' });

  useEffect(() => {
    if (data) {
      setPodcastResult(data.feeds);
    }
  }, [data, setPodcastResult]);

  const clearCardResult = () => {
    inputRef.current!.value = '';
    setIsVisible(false);
  };

  const handleChange = (e: ChangeEvent<FormElement>) => {
    setSearchQuery(e.target.value);
    const isResultVisible = e.target.value !== '';
    setIsVisible(isResultVisible);
  };

  if (error) console.log(error);

  return (
    <Navbar
      variant="static"
      maxWidth="fluid"
      css={{ boxShadow: 'unset', pt: 4 }}
      containerCss={{
        background: 'unset !important',
        backdropFilter: 'unset !important',
      }}
    >
      <Link to="/">
        <Brand />
      </Link>
      <Navbar.Content
        hideIn="sm"
        variant="default"
        css={{
          'a': {
            fontSize: '16px',
          },
          '@sm': {
            ml: '5rem',
          },
          '@lg': {
            ml: '22rem',
            pt: 13,
          },
        }}
      >
        {links.map(item => (
          <Link
            key={item.path}
            activeOptions={{ exact: pathname === item.path }}
            style={{
              padding: '8px 25px',
            }}
            to={item.path}
          >
            {item.label === 'Trending' ? (
              <Badge content="CS" size="xs" />
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
          width: 300,
        }}
      >
        <Navbar.Item
          css={{ 'ml': 20, '@xs': { ml: '7rem' }, '@lg': { ml: 18 } }}
        >
          <SearchInput
            width={isTabletOrMobile ? '190px' : '280px'}
            ref={inputRef}
            changeHandler={handleChange}
            placeholder="Search for Podcasts"
            size={isTabletOrMobile ? 'sm' : 'lg'}
            isLoading={isLoading}
          />
        </Navbar.Item>
        <SearchResult
          isVisible={isVisible}
          clearHandler={clearCardResult}
          result={searchResult}
        />
      </Navbar.Content>
      <Navbar.Content
        css={{
          '@xs': {
            w: '12%',
            jc: 'flex-end',
          },
        }}
      >
        <Button
          bordered
          iconRight={<FontAwesomeIcon icon={faHeadphonesSimple} />}
          shadow
          css={{
            'color': '#fff',
            'borderColor': '#fff',
            'borderRadius': 3,
            'display': 'none',
            '@lg': {
              display: 'flex',
              fontSize: '15px',
              padding: '1.25rem 1.25rem',
            },
          }}
          auto
        >
          <Link to="/explore"> Start Listening</Link>
        </Button>
      </Navbar.Content>
      <Navbar.Toggle
        showIn="sm"
        css={{
          'span.line': {
            background: '$primary',
            height: 2,
          },
        }}
      />
      <Navbar.Collapse transitionTime={800} css={{ background: 'transparent' }}>
        <MobileNav links={links} pathname={pathname} />
      </Navbar.Collapse>
    </Navbar>
  );
};
