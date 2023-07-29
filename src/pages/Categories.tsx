import { useGetCategories } from '@cast/api';
import { Loader, SearchInput } from '@cast/design';
import { FailureNotif } from '@cast/notification';
import type { FormElement } from '@nextui-org/react';
import { Button, Card, Container, Grid } from '@nextui-org/react';
import { useNavigate } from '@tanstack/react-location';
import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

import { CategoryResult } from '../components';

export const Categories = () => {
  const { data, isLoading, isError } = useGetCategories();
  const navigate = useNavigate();
  const ITEMS_INCREMENT = 15;
  const [itemsToShow, setItemsToShow] = useState(ITEMS_INCREMENT);
  const [selectedTab, setSelectedTab] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const isTabletOrMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });

  useEffect(() => {
    const hash = location.hash.substr(1);
    const index = data?.feeds.findIndex(c => c.name.toLowerCase() === hash);

    if (index !== undefined && index >= 0) {
      setSelectedTab(index);
    }
  }, [data]);

  const handleSearchInputChange = (e: React.ChangeEvent<FormElement>) => {
    e.preventDefault();
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredCategories = data?.feeds.filter(category =>
    category.name.toLowerCase().includes(searchTerm),
  );

  const onLoadMore = () => {
    setItemsToShow(prevState => prevState + ITEMS_INCREMENT);
  };

  if (isLoading) return <Loader />;

  if (isError) {
    FailureNotif();
    return null;
  }

  return (
    <Container
      css={{
        'mt': 30,
        'height': 'fit-content',
        'overflowX': 'hidden',
        '@xs': { height: '81vh' },
        '@lg': { height: '81vh' },
      }}
    >
      <Tabs
        selectedIndex={selectedTab}
        onSelect={index => setSelectedTab(index)}
        className="react-tabs"
      >
        <Grid.Container
          css={{ gap: 70, width: '100%' }}
          wrap={isTabletOrMobile ? 'wrap' : 'nowrap'}
        >
          <Grid xs={12} sm={3} lg={2}>
            <Card
              css={{
                'borderRadius': 0,
                'overflowY': 'scroll',
                'height': '81vh',
                'background': 'transparent',
                'position': 'sticky',
                'zIndex': 1,
                'top': 0,
                '@lg': { width: '90%' },
              }}
            >
              <SearchInput
                changeHandler={handleSearchInputChange}
                width="300px"
                placeholder="Explore categories"
                size="md"
                isLoading={isLoading}
              />
              <TabList>
                {filteredCategories?.slice(0, itemsToShow).map(c => (
                  <Tab
                    onClick={() =>
                      navigate({
                        to: '/categories',
                        hash: c.name.toLowerCase(),
                      })
                    }
                    key={c.id}
                  >
                    {c.name}
                  </Tab>
                ))}
                <Button
                  onClick={onLoadMore}
                  css={{
                    borderRadius: 1,
                    width: '100%',
                    background: 'transparent',
                    color: '$primary',
                    borderTop: '1px solid #fff',
                  }}
                >
                  See More
                </Button>
              </TabList>
            </Card>
          </Grid>
          <Grid xs={12} sm={9}>
            {filteredCategories?.slice(0, itemsToShow).map(c => (
              <TabPanel key={c.id}>
                <CategoryResult category={c} />
              </TabPanel>
            ))}
          </Grid>
        </Grid.Container>
      </Tabs>
    </Container>
  );
};
