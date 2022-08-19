import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Button,
  Container,
  Grid,
  Image,
  Loading,
  Spacer,
  Text,
} from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import { useGetTopEpisode } from '../../api/podcasts/getTopEpisode';

const TopEpisode = () => {
  const [topEpisodeImg, setTopEpisodeImg] = useState<string>('');
  const [topEpisodeTitle, setTopEpisodeTitle] = useState<string>('');
  const [topEpisodeDetails, setTopEpisodeDetails] = useState<string>('');
  const [topEpisodeChannel, setTopEpisodeChannel] = useState<string>('');
  const [topEpisodeAuthor, setTopEpisodeAuthor] = useState<string>('');
  const [topEpisodeTime, setTopEpisodeTime] = useState<string>('');

  const { data, isLoading } = useGetTopEpisode();

  useEffect(() => {
    setTopEpisodeImg(data?.episodes?.data[2].imageUrl);
    setTopEpisodeTitle(data?.episodes?.data[2].title);
    setTopEpisodeDetails(data?.episodes?.data[2].description);
    setTopEpisodeChannel(data?.episodes?.data[2].podcast.title);
    setTopEpisodeAuthor(data?.episodes?.data[2].podcast.author.name);
    setTopEpisodeTime(data?.episodes?.data[2].length);
  }, [data]);

  return (
    <Container
      xl
      css={{
        background: '#001D3D',
        height: 'auto',
      }}>
      <Grid.Container gap={4}>
        <Grid xs={6}>
          {isLoading ? (
            <Loading
              type='points'
              css={{ ml: '19rem', mt: '1rem' }}
              size='xl'
            />
          ) : (
            <Image
              css={{
                clipPath: 'inset(5% 6% 7% 7% round 40% 3px 40% 3px)',
              }}
              width={528}
              height={543}
              src={topEpisodeImg}
              alt='Default Image'
              objectFit='cover'
            />
          )}
        </Grid>
        <Grid xs={6} css={{ display: 'block !important' }}>
          <Text
            color='#9d9d9d'
            css={{
              mt: 23,
              width: '78%',
              textAlign: 'left',
              fontSize: '16px',
              lineHeight: '1.2',
            }}>
            {topEpisodeChannel} | {topEpisodeAuthor} | {topEpisodeTime}
          </Text>
          <Text
            color='#fff'
            css={{
              mt: 13,
              width: '78%',
              textAlign: 'left',
              fontSize: '46px',
              letterSpacing: '1px',
              lineHeight: '1.2',
            }}>
            {topEpisodeTitle}
          </Text>
          <Text
            color='#d6d6d6'
            css={{
              mt: 23,
              width: '78%',
              textAlign: 'left',
              fontSize: '18px',
              lineHeight: '1.5',
            }}>
            {topEpisodeDetails}
          </Text>
          <Spacer />
          <Button
            auto
            iconRight={<FontAwesomeIcon icon={faAnglesRight} />}
            css={{
              background: '#FFD60A',
              color: '#001D3D',
              borderRadius: '3px',
            }}>
            Play podcast
          </Button>
        </Grid>
      </Grid.Container>
    </Container>
  );
};

export default TopEpisode;
