import { faPlay } from '@fortawesome/free-solid-svg-icons';
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
import BadgeInfo from '../Ui/BadgeInfo';

const TopEpisode = () => {
  const [episodeImg, setEpisodeImg] = useState<string>('');
  const [episodeTitle, setEpisodeTitle] = useState<string>('');
  const [episodeDetails, setEpisodeDetails] = useState<string>('');
  const [episodeChannel, setEpisodeChannel] = useState<string>('');
  const [episodeAuthor, setEpisodeAuthor] = useState<string>('');
  const [episodeTime, setEpisodeTime] = useState<number>();

  const { data, isLoading } = useGetTopEpisode();
  console.log(data);
  useEffect(() => {
    if (data) {
      data?.items[0].image !== ''
        ? setEpisodeImg(data?.items[0].image)
        : setEpisodeImg(
            'https://img.freepik.com/free-photo/close-up-portrait-happy-smiling-romantic-tender-african-american-woman-enjoying-listening-music-headphones-tilt-head-close-eyes-dreamy-grinning-delighted-blue-wall_1258-35460.jpg'
          );
      setEpisodeTitle(data?.items[0].title);
      setEpisodeDetails(data?.items[0].description);
      setEpisodeChannel(data?.items[0].feedTitle);
      setEpisodeAuthor(data?.items[0].title);
      setEpisodeTime(data?.items[0].enclosureLength);
    }
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
              src={episodeImg}
              alt='Default Image'
              objectFit='cover'
            />
          )}
        </Grid>
        <Grid xs={6} css={{ display: 'block !important', mt: 7 }}>
          <BadgeInfo
            channel={episodeChannel}
            author={episodeAuthor}
            time={episodeTime}
          />
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
            {episodeTitle}
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
            {episodeDetails}
          </Text>
          <Spacer />
          <Button
            auto
            iconRight={<FontAwesomeIcon icon={faPlay} />}
            css={{
              background: '#FFD60A',
              color: '#001D3D',
              borderRadius: '3px',
            }}>
            Play episode
          </Button>
        </Grid>
      </Grid.Container>
    </Container>
  );
};

export default TopEpisode;
