import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Button,
  Card,
  Container,
  FormElement,
  Grid,
  Input,
  Loading,
} from '@nextui-org/react';
import { useNavigate } from '@tanstack/react-location';
import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useGetCategories } from '../api';
import { CategoryResult } from '../components';

export const Categories = () => {
  const { data, isLoading } = useGetCategories();
  const navigate = useNavigate();
  const ITEMS_INCREMENT = 15;
  const [itemsToShow, setItemsToShow] = useState(ITEMS_INCREMENT);
  const [selectedTab, setSelectedTab] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const hash = location.hash.substr(1);
    const index = data?.feeds.findIndex((c) => c.name.toLowerCase() === hash);
    if (index !== undefined && index >= 0) {
      setSelectedTab(index);
    }
  }, [data]);

  const handleSearchInputChange = (e: React.ChangeEvent<FormElement>) => {
    e.preventDefault();
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredCategories = data?.feeds.filter((category) =>
    category.name.toLowerCase().includes(searchTerm)
  );

  const onLoadMore = () => {
    setItemsToShow((prevState) => prevState + ITEMS_INCREMENT);
  };

  if (isLoading) return <Loading css={{ mx: 'auto' }} />;
  return (
    <Container css={{ mt: 30, height: '81vh', overflowX: 'hidden' }}>
      <Tabs
        selectedIndex={selectedTab}
        onSelect={(index) => setSelectedTab(index)}
        className='react-tabs'>
        <Grid.Container css={{ gap: 70, width: '100%' }} wrap='nowrap'>
          <Grid>
            <Card
              css={{
                borderRadius: 0,
                overflowY: 'scroll',
                height: '81vh',
                background: 'transparent',
                position: 'sticky',
                zIndex: 1,
                top: 0,
              }}>
              <Input
                aria-label='search'
                onChange={handleSearchInputChange}
                width='190px'
                underlined
                status='primary'
                placeholder='Explore categories'
                size='md'
                css={{
                  mb: 15,
                  '::placeholder': {
                    color: '#fff',
                  },
                }}
                contentLeft={<FontAwesomeIcon size='xs' icon={faSearch} />}
              />
              <TabList>
                {filteredCategories?.slice(0, itemsToShow).map((c) => (
                  <Tab
                    onClick={() =>
                      navigate({
                        to: '/categories',
                        hash: c.name.toLowerCase(),
                      })
                    }
                    key={c.id}>
                    {c.name}
                  </Tab>
                ))}
                <Button
                  onClick={onLoadMore}
                  css={{
                    borderRadius: 1,
                    background: 'transparent',
                    color: '$primary',
                    borderTop: '1px solid #fff',
                  }}>
                  See More
                </Button>
              </TabList>
            </Card>
          </Grid>
          <Grid>
            {filteredCategories?.slice(0, itemsToShow).map((c) => (
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
