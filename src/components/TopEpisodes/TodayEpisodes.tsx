import { useGetTopEpisode } from '@cast/api';
import { Loader } from '@cast/design';
import { Container, Grid, Text } from '@nextui-org/react';

import { EpisodeDetail } from '../Main';

export const TodayEpisodes = () => {
  const { data: episodes, isLoading } = useGetTopEpisode();

  return (
    <Container
      xl
      css={{
        background: '#0F172B',
        height: 'auto',
      }}
    >
      <Grid.Container
        gap={8}
        css={{
          'width': '92%',
          '@lg': { marginLeft: '3rem !important', width: '100%' },
        }}
      >
        <Grid lg={6} md={6} xs={12}>
          <Text
            css={{
              'minWidth': '197%',
              'fontSize': '31px',
              'color': '#fff',
              'fontWeight': 'bold',
              '@xs': {
                minWidth: 'auto',
                mx: 'auto',
                ml: '12rem',
              },
              '@sm': {
                mx: 'auto',
                minWidth: 'auto',
                fontSize: '49px',
                ml: '18rem',
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
        <Grid lg={6} md={6} xs={12}>
          <Text
            css={{
              'fontSize': '18px',
              'color': '#a1a1a1',
              'mt': '-4rem',
              'textAlign': 'center',
              'minWidth': '146%',
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
      </Grid.Container>
    </Container>
  );
};
