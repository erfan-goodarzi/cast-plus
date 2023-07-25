import { useGetTopThisWeek } from '@cast/api';
import { Loader } from '@cast/design';
import { FailureNotif } from '@cast/notification';
import { Card, Container, Grid, Spacer, Text } from '@nextui-org/react';
import { Link } from '@tanstack/react-location';

export const TopThisWeek = () => {
  const { data, isLoading, isError } = useGetTopThisWeek();

  if (isError) {
    FailureNotif();
    return null;
  }

  return (
    <Container>
      <Card
        css={{
          'background': 'transparent',
          'zIndex': 1,
          'width': 'auto',
          'height': 'auto',
          'padding': '15px 5px',
          'transition': 'all 0.2s ease-in-out',
          '&:hover': {
            transition: 'all 0.4s ease-in-out',
            padding: '24px 29px',
            background: '#fff',
            cursor: 'pointer',
            boxShadow: ' 7px 7px 14px 2px #a7a7a7',
          },
        }}
      >
        <Text
          h1
          css={{
            '@lg': {
              fontSize: '29px',
            },
          }}
        >
          Trending This Week
        </Text>
        {isLoading ? <Loader /> : null}
        {data?.feeds.map(item => (
          <Grid.Container key={item.id}>
            <Grid lg={3}>
              <Link to={item.id}>
                <img
                  alt={item.title}
                  src={item.image}
                  width={243}
                  height={250}
                  style={{
                    borderRadius: '10px',
                  }}
                />
              </Link>
            </Grid>
            <Grid lg={8} css={{ display: 'inline-block !important' }}>
              <Text size="$lg" b>
                {item.title}
              </Text>
              <Spacer y={1} />
              <Text color="gray" size="$md">
                {item.description.substring(0, 600)}
              </Text>
            </Grid>
          </Grid.Container>
        ))}
      </Card>
    </Container>
  );
};
