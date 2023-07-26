import { useGetTopEpisode } from '@cast/api';
import { Loader } from '@cast/design';
import { Container, Grid, Text } from '@nextui-org/react';

import { EpisodeDetail } from '../Main';

export const TodayEpisodes = () => {
  const { data: episodes, isLoading } = useGetTopEpisode();

  return (
    <Container
      css={{
        'height': 'auto',
        '@lg': {
          mx: '95px',
        },
        'py': 70,
        'width': '90%',
      }}
    >
      <Grid.Container
        justify="space-between"
        css={{
          gap: 90,
        }}
      >
        <Grid lg={6} md={6} xs={12} justify="center">
          <Text
            css={{
              'fontSize': 30,
              'color': '#fff',
              'fontWeight': 'bold',
              '@xs': {
                mx: 'auto',
              },
              '@sm': {
                mx: 'auto',
                fontSize: 40,
              },
              '@lg': {
                minWidth: 'auto',
                fontSize: '43px',
                ml: '0',
              },
            }}
          >
            Today Episodes
          </Text>
        </Grid>
        <Grid lg={4} md={6} xs={12}>
          <Text
            css={{
              'fontSize': '18px',
              'color': '#a1a1a1',
              'mt': '-4rem',
              'textAlign': 'center',
              '@xs': {
                minWidth: '108%',
              },
              '@sm': {
                mt: '0',
              },
              '@lg': {
                mt: '1.2rem',
                textAlign: 'unset',
                fontSize: '17px',
              },
            }}
          >
            More episodes podcast you must hear and share the experiences and
            learning that shaped.
          </Text>
        </Grid>
        <Grid direction="column" xs={12} css={{ rowGap: 50 }}>
          {isLoading ? (
            <Loader size="xl" />
          ) : (
            episodes?.items.map(episode => (
              <EpisodeDetail
                episodes={episode}
                key={episode.id}
                feedTitle={episode.feedTitle}
              />
            ))
          )}
        </Grid>
      </Grid.Container>
    </Container>
  );
};
