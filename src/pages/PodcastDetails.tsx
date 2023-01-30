import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Badge,
  Button,
  Col,
  Container,
  Grid,
  Row,
  Spacer,
  Text,
} from '@nextui-org/react';
import { useMatch } from '@tanstack/react-location';
import { useState } from 'react';
import { useGetPodcastById } from '../api';
import { EpisodeBox } from '../components/Main';
import { ShareButton } from '../components/Ui';

export const PodcastDetails = () => {
  const [showMore, setShowMore] = useState<boolean>(false);
  const {
    params: { podcastId },
  } = useMatch();
  const { data } = useGetPodcastById(parseInt(podcastId));

  return (
    <Container gap={8}>
      <Row>
        <Col span={2}>
          <img
            style={{
              borderRadius: '10px',
              width: 220,
            }}
            src={data?.feed.artwork}
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
            {data?.feed.title}
          </Text>
          <Text size='larger' css={{ color: '#b6b6b6', lineHeight: '2.1' }}>
            Made By
            <Badge
              css={{
                ml: 10,
                fontSize: 16,
                background: 'transparent',
                color: 'rgb(255 214 10)',
              }}
              isSquared
              variant='bordered'>
              {data?.feed.author}
            </Badge>
          </Text>
          <Text
            css={{
              width: '95%',
              color: '#d1d1d1',
              fontWeight: 600,
            }}>
            {showMore
              ? data?.feed.description
              : `${data?.feed.description.substring(0, 360)}`}
            ...
          </Text>
          <Spacer />
          <Grid.Container css={{ columnGap: 26 }}>
            <Grid>
              <Button
                bordered
                iconRight={<FontAwesomeIcon icon={faBell} />}
                css={{
                  color: '#fff',
                  borderColor: '#fff',
                  borderRadius: 3,
                }}
                auto>
                Subscribe
              </Button>
            </Grid>
            <Grid>
              <ShareButton
                podcastTitle={data?.feed.title!}
                shareUrl={data?.feed.originalUrl!}
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
        <Grid xs={12}>
          <EpisodeBox
            id={12}
            title='test'
            feedTitle='test'
            audioUrl='test'
            datePublished='test'
            description='test'
            image='https://img.hearthis.at/c/r/o/_/uploads/417685/image_user/w1400_h1400_q70_m1477339420----cropped_3afc0fb06f14d4e46bc871d10f0efe71logo-hev500x.jpg'
          />
        </Grid>
      </Grid.Container>
    </Container>
  );
};
