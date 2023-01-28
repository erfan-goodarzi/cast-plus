import { Container, Grid, Loading, Text } from '@nextui-org/react';
import { useGetTopEpisode } from '../../api';
import { EpisodeBox } from './EpisodeBox';

export const TodayEpisodes = () => {
  const { data, isLoading } = useGetTopEpisode();

  return (
    <div>
      <Container
        xl
        css={{
          background: '#0F172B',
          height: 'auto',
        }}>
        <Grid.Container
          gap={8}
          css={{
            width: '92%',
            '@lg': { marginLeft: '3rem !important', width: '100%' },
          }}>
          <Grid lg={6} md={6} xs={12}>
            <Text
              css={{
                minWidth: '197%',
                fontSize: '31px',
                color: '#fff',
                fontWeight: 'bold',
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
              }}>
              Today Episodes
            </Text>
          </Grid>
          <Grid lg={6} md={6} xs={12}>
            <Text
              css={{
                fontSize: '18px',
                color: '#a1a1a1',
                mt: '-4rem',
                textAlign: 'center',
                minWidth: '146%',
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
              }}>
              More episodes podcast you must hear and share the experiences and
              learning that shaped.
            </Text>
          </Grid>
          {isLoading ? (
            <Loading css={{ ml: '36rem', mt: '7rem' }} size='xl' />
          ) : (
            data?.items.map(
              ({
                id,
                image,
                title,
                feedTitle,
                enclosureUrl,
                datePublishedPretty,
                description,
              }) => (
                <EpisodeBox
                  id={id}
                  title={title}
                  feedTitle={feedTitle}
                  image={image}
                  datePublished={datePublishedPretty}
                  description={description}
                  audioUrl={enclosureUrl}
                />
              )
            )
          )}
        </Grid.Container>
      </Container>
    </div>
  );
};
