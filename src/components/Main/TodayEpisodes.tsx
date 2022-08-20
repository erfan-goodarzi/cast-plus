import {
  Button,
  Card,
  Container,
  Grid,
  Image,
  Loading,
  Spacer,
  Text,
} from '@nextui-org/react';
import React, { useState } from 'react';
import { useGetTopEpisode } from '../../api/podcasts/getTopEpisode';
import BadgeInfo from '../Ui/BadgeInfo';
import { PodcastIndexClient } from 'podcastindexjs';
import { client } from '../../api';

const TodayEpisodes = () => {
  const [showMore, setShowMore] = useState<boolean>(false);

  // client.search('javascript').then(console.log);

  const { data, isLoading } = useGetTopEpisode();
  console.log(data);
  return (
    <div>
      <Container
        xl
        css={{
          background: '#001D3D',
          height: 'auto',
        }}>
        <Grid.Container gap={8} css={{ ml: '3rem', width: 'auto' }}>
          <Grid xs={6}>
            <Text css={{ fontSize: '43px', color: '#fff', fontWeight: 'bold' }}>
              Today Episodes
            </Text>
          </Grid>
          <Grid xs={6}>
            <Text
              css={{
                fontSize: '18px',
                color: '#a1a1a1',
                mt: '1.2rem',
                width: '80%',
              }}>
              More episodes podcast you must hear and share the experiences and
              learning that shaped
            </Text>
          </Grid>
          {/* {isLoading ? (
            <Loading
              type='points'
              css={{ ml: '36rem', mt: '7rem' }}
              size='xl'
            />
          ) : (
            data?.episodes.data.map((episode) => (
              <Grid xs={12} key={episode.id}>
                <Card
                  variant='bordered'
                  css={{
                    mw: 'auto',
                    width: '91%',
                    borderRadius: '3px',
                    background: '#0000003b',
                    padding: '27px 42px',
                    borderColor: '#838383',
                  }}>
                  <Grid.Container>
                    <Grid xs={2}>
                      <Image
                        css={{
                          objectFit: 'cover',
                          height: '219px',
                        }}
                        src={
                          episode.imageUrl
                            ? episode.imageUrl
                            : 'https://img.freepik.com/free-photo/close-up-portrait-happy-smiling-romantic-tender-african-american-woman-enjoying-listening-music-headphones-tilt-head-close-eyes-dreamy-grinning-delighted-blue-wall_1258-35460.jpg'
                        }
                        alt='Default Image'
                        objectFit='cover'
                      />
                    </Grid>
                    <Spacer x={2} />
                    <Grid xs={8} css={{ display: 'block !important' }}>
                      <Text
                        css={{
                          fontSize: '23px',
                          color: '#fff',
                          fontWeight: 'bold',
                        }}>
                        {episode.title}
                      </Text>
                      <BadgeInfo
                        channel={episode.podcast.title}
                        author={episode.podcast.author.name}
                        time={episode.length}
                      />
                      <Text
                        color='#d6d6d6'
                        css={{
                          mt: 23,
                          width: '120%',
                          textAlign: 'left',
                          fontSize: '17px',
                          lineHeight: '1.5',
                        }}>
                        {showMore
                          ? episode.description
                          : `${episode.description.substring(0, 450)}`}{' '}
                        ...
                      </Text>
                    </Grid>
                  </Grid.Container>
                </Card>
              </Grid>
            ))
          )} */}
        </Grid.Container>
      </Container>
    </div>
  );
};

export default TodayEpisodes;
