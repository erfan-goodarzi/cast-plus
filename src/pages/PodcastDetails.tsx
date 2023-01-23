import { faBell, faShareAlt } from '@fortawesome/free-solid-svg-icons';
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

export const PodcastDetails = () => {
  const [showMore, setShowMore] = useState<boolean>(false);
  const {
    params: { podcastId },
  } = useMatch();
  const { data } = useGetPodcastById(parseInt(podcastId));

  return (
    <Container>
      <Row align='flex-start'>
        <Col span={2}>
          <img
            style={{
              borderRadius: '10px',
              width: 220,
            }}
            src={data?.feed.artwork}
          />
        </Col>
        <Col>
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
              width: '80%',
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
              <Button
                bordered
                iconRight={<FontAwesomeIcon icon={faShareAlt} />}
                css={{
                  color: '#fff',
                  borderColor: '#fff',
                  borderRadius: 3,
                }}
                auto>
                Share
              </Button>
            </Grid>
          </Grid.Container>
        </Col>
      </Row>
    </Container>
  );
};
