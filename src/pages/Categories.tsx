import { Button, Card, Container, Grid, Text } from '@nextui-org/react';
import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useGetCategories } from '../api';

export const Categories = () => {
  const { data } = useGetCategories();
  const ITEMS_INCREMENT = 15;
  const [itemsToShow, setItemsToShow] = useState(ITEMS_INCREMENT);

  const onLoadMore = () => {
    setItemsToShow((prevState) => prevState + ITEMS_INCREMENT);
  };

  return (
    <Container css={{ mt: 30, height: '81vh', overflow: 'hidden' }}>
      <Tabs className='react-tabs'>
        <Grid.Container css={{ gap: 100 }} direction='row'>
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
              <>
                <TabPanel key={c.id}>
                  <Text color='#fff'>All Episodes About:</Text>
                  {c.name}
                </TabPanel>
              </>
            ))}
          </Grid>
        </Grid.Container>
      </Tabs>
    </Container>
  );
};
