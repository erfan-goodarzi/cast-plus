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
import { useGeEpisodeById, useGetPodcastById } from '../api';
import {
  Badge,
  EpisodeBox,
  Loader,
  ShareButton,
  SubscribeButton,
} from '../components';

export const PodcastDetails = () => {
  const [showMore, setShowMore] = useState<boolean>(false);
  const {
    params: { podcastId },
  } = useMatch();
  const id = parseInt(podcastId);
  const { data: podcast } = useGetPodcastById(id);
  const { data: episode, isLoading } = useGeEpisodeById(id);

  if (isLoading) return <Loader size='lg' />;
  return (
    <Container gap={8} css={{ mb: 40 }}>
      <Row>
        <Col span={2}>
          <img
            style={{
              borderRadius: '10px',
              width: 220,
            }}
            src={podcast?.feed.artwork}
          />
        </Col>
        <Col span={10}>
          <Text
            css={{
              fontSize: '32px',
              color: '#fff',
              fontWeight: 'bold',
              mx: 'auto',
              textAlign: 'center',
              '@lg': {
                mx: 'unset',
                textAlign: 'left',
              },
            }}>
            {podcast?.feed.title}
          </Text>
          <Row align='center' css={{ gap: 10 }}>
            <Text size='larger' css={{ color: '#b6b6b6', lineHeight: '2.1' }}>
              Made By
            </Text>
            <Badge content={podcast?.feed.author!} />
          </Row>
          <Text
            css={{
              width: '95%',
              color: '#d1d1d1',
              fontWeight: 600,
            }}>
            {showMore
              ? podcast?.feed.description
              : podcast?.feed.description.substring(0, 360)}
            <span
              style={{ cursor: 'pointer' }}
              onClick={() => setShowMore(true)}>
              ...
            </span>
          </Text>
          <Spacer />
          <Grid.Container css={{ columnGap: 26 }}>
            <Grid>
              <SubscribeButton podcastId={podcast?.feed.id!} />
            </Grid>
            <Grid>
              <ShareButton
                podcastTitle={podcast?.feed.title!}
                shareUrl={podcast?.feed.link!}
              />
            </Grid>
          </Grid.Container>
        </Col>
      </Row>
      <Spacer y={4} />
      <Grid.Container css={{ width: '96%', gap: 40 }}>
        <Text size='$4xl' color='white'>
          Available Episodes
        </Text>
        {episode?.items.map(
          ({
            id,
            title,
            enclosureUrl,
            datePublishedPretty,
            description,
            image,
            feedId,
          }) => (
            <Grid xs={12} key={id}>
              <EpisodeBox
                feedId={feedId}
                id={id}
                title={title}
                feedTitle={podcast?.feed.title!}
                audioUrl={enclosureUrl}
                datePublished={datePublishedPretty}
                description={description}
                image={image}
              />
            </Grid>
          )
        )}
        <Button
          bordered
          as={Link}
          target='_blank'
          href={podcast?.feed.link}
          css={{
            mx: 'auto',
            color: '$primary !important',
            borderRadius: 3,
            mt: 30,
            fontSize: 15,
          }}>
          See All Episodes
        </Button>
      </Grid.Container>
    </Container>
  );
};
