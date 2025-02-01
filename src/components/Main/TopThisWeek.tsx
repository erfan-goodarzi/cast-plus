import { useGetTopThisWeek } from '@cast/api';
import { Loader } from '@cast/design';
import { FailureNotification } from '@cast/notification';
import { removeHtmlTag } from '@cast/utils';
import { Card, Container, Grid, Spacer, Text } from '@nextui-org/react';
import { Link } from '@tanstack/react-location';

export const TopThisWeek = () => {
  const { data, isLoading, isError } = useGetTopThisWeek();

  if (isError) {
    FailureNotification();
    return null;
  }

  return (
    <Container
      css={{
        '@xs': { paddingInline: 0 },
        '@sm': { paddingInline: 'auto' },
        'textAlign': 'center',
        '@lg': { textAlign: 'left' },
      }}
    >
      <Card
        css={{
          'background': 'transparent',
          'zIndex': 1,
          'width': 'auto',
          'height': 'auto',
          'padding': '15px 5px',
          'transition': 'all 0.2s ease-in-out',
          '@lg': {
            '&:hover': {
              transition: 'all 0.4s ease-in-out',
              padding: '24px 29px',
              background: '#fff',
              cursor: 'pointer',
              boxShadow: ' 7px 7px 14px 2px #a7a7a7',
            },
          },
        }}
      >
        <Text
          h1
          css={{
            'color': '#fff',
            'fontSize': 25,
            'pb': 20,
            '@lg': {
              fontSize: 29,
              color: '$gray900',
            },
          }}
        >
          Trending This Week
        </Text>
        {isLoading ? <Loader /> : null}
        {data?.feeds.map(item => (
          <Grid.Container
            css={{ gap: 20 }}
            key={item.id}
            justify="center"
            alignItems="center"
          >
            <Grid lg={3} sm={3}>
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
            <Grid lg={8} sm={12} css={{ display: 'inline-block !important' }}>
              <Text
                size="$lg"
                b
                css={{ 'color': '#fff', '@lg': { color: '$gray900' } }}
              >
                {item.title}
              </Text>
              <Spacer y={1} />
              <Text color="gray" size="$md">
                {removeHtmlTag(item.description.substring(0, 600))}
              </Text>
            </Grid>
          </Grid.Container>
        ))}
      </Card>
    </Container>
  );
};
