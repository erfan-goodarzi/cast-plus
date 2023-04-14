import { Button, Card, Container, Grid, Loading } from '@nextui-org/react';
import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useGetCategories } from '../api';
import { CategoryResult } from '../components/Main';

export const Categories = () => {
  const { data, isLoading } = useGetCategories();
  const ITEMS_INCREMENT = 15;
  const [itemsToShow, setItemsToShow] = useState(ITEMS_INCREMENT);

  const onLoadMore = () => {
    setItemsToShow((prevState) => prevState + ITEMS_INCREMENT);
  };
  if (isLoading) return <Loading css={{ mx: 'auto' }} />;
  return (
    <Container css={{ mt: 30, height: '81vh', overflowX: 'hidden' }}>
      <Tabs className='react-tabs'>
        <Grid.Container css={{ gap: 70, width: '100%' }} wrap='nowrap'>
          <Grid>
            <Card
              css={{
                borderRadius: 0,
                overflowY: 'scroll',
                height: '81vh',
                background: 'transparent',
              }}>
              <TabList>
                {data?.feeds.slice(0, itemsToShow).map((c) => (
                  <Tab key={c.id}>{c.name}</Tab>
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
            {data?.feeds.slice(0, itemsToShow).map((c) => (
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
