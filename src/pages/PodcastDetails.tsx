/* eslint-disable complexity */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useGeEpisodeById, useGetPodcastById } from '@cast/api';
import { Badge, Loader, ShareButton, SubscribeButton } from '@cast/design';
import { FailureNotif } from '@cast/notification';
import {
  Button,
  Col,
  Container,
  Grid,
  Link,
  Row,
  Spacer,
  Text,
} from '@nextui-org/react';
import { useMatch } from '@tanstack/react-location';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import { EpisodeDetail } from '../components';

export const PodcastDetails = () => {
  const [showMore, setShowMore] = useState<boolean>(false);
  const {
    params: { podcastId },
  } = useMatch();
  const id = parseInt(podcastId!, 10);
  const { data: podcast, isError } = useGetPodcastById(id);
  const { data: episodes, isLoading } = useGeEpisodeById(id);
  const isMobileOrIpad = useMediaQuery({ query: '(max-width: 1024px)' });

  if (isLoading) return <Loader size="lg" />;

  if (isError) {
    FailureNotif();
    return null;
  }

  return podcast ? (
    <Container gap={isMobileOrIpad ? 0 : 8} css={{ mb: 40 }}>
      <Row wrap={isMobileOrIpad ? 'wrap' : 'nowrap'} justify="center">
        <Col
          span={isMobileOrIpad ? 12 : 2}
          css={{
            'width': 'auto',
            'mx': 'auto',
            '@lg': {
              marginLeft: '0%',
            },
          }}
        >
          <img
            alt={podcast.feed.title}
            style={{
              borderRadius: '10px',
              width: 220,
            }}
            src={podcast.feed.artwork}
          />
        </Col>
        <Col span={isMobileOrIpad ? 12 : 10}>
          <Text
            css={{
              'fontSize': 25,
              'color': '#fff',
              'fontWeight': 'bold',
              'mx': 'auto',
              'textAlign': 'center',
              '@lg': {
                mx: 'unset',
                fontSize: 32,
                textAlign: 'left',
              },
            }}
          >
            {podcast.feed.title}
          </Text>
          <Row
            align="center"
            css={{ gap: 10 }}
            justify={isMobileOrIpad ? 'center' : 'flex-start'}
          >
            <Text size="larger" css={{ color: '#b6b6b6', lineHeight: '2.1' }}>
              Made By:
            </Text>
            <Badge content={podcast.feed.author} />
          </Row>
          <Text
            css={{
              'width': '95%',
              'color': '#d1d1d1',
              'fontWeight': 400,
              'textAlign': 'center',
              'mx': 'auto',
              '@lg': {
                fontWeight: 600,
                mx: 'unset',
                textAlign: 'left',
              },
            }}
          >
            {showMore
              ? podcast.feed.description
              : podcast.feed.description.substring(0, 360)}
            <span
              style={{ cursor: 'pointer' }}
              onClick={() => setShowMore(true)}
            >
              ...
            </span>
          </Text>
          <Spacer />
          <Grid.Container
            css={{ 'columnGap': 26, '@lg': { columnGap: '0 !important' } }}
            justify={isMobileOrIpad ? 'center' : 'flex-start'}
          >
            <Grid>
              <SubscribeButton podcastId={podcast.feed.id} />
            </Grid>
            <Grid>
              <ShareButton
                podcastTitle={podcast.feed.title}
                shareUrl={podcast.feed.link}
              />
            </Grid>
          </Grid.Container>
        </Col>
      </Row>
      <Spacer y={4} />
      <Grid.Container
        css={{ '@lg': { width: '95%' }, 'gap': 40 }}
        justify={isMobileOrIpad ? 'center' : 'flex-start'}
      >
        <Text size={isMobileOrIpad ? '$3xl' : '$4xl'} color="white">
          Available Episodes
        </Text>
        {episodes?.items.map(episode => (
          <Grid xs={12} key={episode.id}>
            <EpisodeDetail episodes={episode} feedTitle={podcast.feed.title} />
          </Grid>
        ))}
        <Button
          bordered
          as={Link}
          target="_blank"
          href={podcast.feed.link}
          css={{
            mx: 'auto',
            color: '$primary !important',
            borderRadius: 3,
            mt: 30,
            fontSize: 15,
          }}
        >
          See All Episodes
        </Button>
      </Grid.Container>
    </Container>
  ) : null;
};
