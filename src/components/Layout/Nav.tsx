import { useSearchPodcasts } from '@cast/api';
import { Badge, Brand, SearchInput } from '@cast/design';
import { faHeadphonesSimple } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { FormElement } from '@nextui-org/react';
import { Button, Navbar } from '@nextui-org/react';
import { Link, useLocation } from '@tanstack/react-location';
import type { ChangeEvent } from 'react';
import { useEffect, useRef, useState } from 'react';

import { useStore } from '../../store';
import { SearchResult } from '../Search';

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
      <Navbar.Toggle showIn="xs" />
      <Link to="/">
        <Brand />
      </Link>
      <Navbar.Content
        hideIn="sm"
        variant="default"
        css={{ ml: '22rem', pt: 13 }}
      >
        {links.map(item => (
          <Link
            key={item.path}
            activeOptions={{ exact: pathname === item.path }}
            style={{
              padding: '8px 22px',
              fontSize: '16px',
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
        <Navbar.Item>
          <SearchInput
            width="300px"
            ref={inputRef}
            changeHandler={handleChange}
            placeholder="Search for Podcasts"
            size="lg"
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
          auto
        >
          <Link to="/explore"> Start Listening</Link>
        </Button>
      </Navbar.Content>
    </Navbar>
  );
};
