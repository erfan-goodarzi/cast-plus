import {
  Card,
  Container,
  Grid,
  Loading,
  Spacer,
  Text,
} from '@nextui-org/react';
import { useGetTopThisWeek } from '../../api';

export const TopThisWeek = () => {
  const { data, isLoading } = useGetTopThisWeek();
  console.log(data);
  return (
    <Container>
      <Card
        css={{
          background: 'transparent',
          zIndex: 1,
          overflowY: 'scroll',
          width: 'auto',
          height: 'auto',
          padding: '15px 5px',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            transition: 'all 0.4s ease-in-out',
            padding: '24px 29px',
            background: '#fff',
            cursor: 'pointer',
            boxShadow: ' 7px 7px 14px 2px #a7a7a7',
          },
        }}>
        <Text
          h1
          css={{
            '@lg': {
              fontSize: '29px',
            },
          }}>
          Trending This Week
        </Text>
        {isLoading && <Loading css={{ mr: '80%', mt: 40 }} size='sm' />}
        {data?.feeds.map((item) => (
          <>
            <Grid.Container key={item.id}>
              <Grid lg={3}>
                <img
                  src={item.image}
                  width={243}
                  height={250}
                  style={{
                    borderRadius: '10px',
                  }}
                />
              </Grid>
              <Grid lg={8} css={{ display: 'inline-block !important' }}>
                <Text size='$lg' b>
                  {item.title}
                </Text>
                <Spacer y={1} />
                <Text color='gray' size='$md'>
                  {item.description.substring(0, 600)}
                </Text>
              </Grid>
            </Grid.Container>
          </>
        ))}
      </Card>
    </Container>
  );
};
