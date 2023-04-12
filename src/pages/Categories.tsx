import { Card, Container, Grid, Text } from '@nextui-org/react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useGetCategories } from '../api';

export const Categories = () => {
  const { data } = useGetCategories();
  console.log(data)
  return (
    <Container css={{ mt: 30, height: '81vh', overflow: 'hidden' }}>
      <Tabs className='react-tabs'>
        <Grid.Container css={{ gap: 100 }} direction='row'>
          <Grid>
            <Card
              css={{
                borderRadius: '0px',
                overflowY: 'scroll',
                height: '81vh',
                background: 'transparent',
              }}>
              <TabList>
                {data?.feeds.slice(0, 30).map((c) => (
                  <Tab key={c.id}>{c.name}</Tab>
                ))}
              </TabList>
            </Card>
          </Grid>
          <Grid>
            {data?.feeds.slice(0, 30).map((c) => (
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
