import {
  Container,
  Grid,
  Image,
  Loading,
  Spacer,
  Text,
} from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { useGetTopEpisode } from '../../api';
import { removeHtmlTag } from '../../utils';
import { BadgeInfo } from '../Ui';
import { PlayButton } from '../Ui';

export const TopEpisode = () => {
  const [episodeImg, setEpisodeImg] = useState<string>('');
  const [episodeId, setEpisodeId] = useState<number>();
  const [episodeFeedId, setEpisodeFeedId] = useState<number>();
  const [episodeTitle, setEpisodeTitle] = useState<string>('');
  const [episodeDetails, setEpisodeDetails] = useState<string>('');
  const [episodeChannel, setEpisodeChannel] = useState<string>('');
  const [episodeTime, setEpisodeTime] = useState<string>('');
  const [episodeUrl, setEpisodeUrl] = useState<string>('');

  const { data, isLoading } = useGetTopEpisode();

  useEffect(() => {
    if (data) {
      data.items[0].image === ''
        ? setEpisodeImg(
            'https://img.freepik.com/free-photo/close-up-portrait-happy-smiling-romantic-tender-african-american-woman-enjoying-listening-music-headphones-tilt-head-close-eyes-dreamy-grinning-delighted-blue-wall_1258-35460.jpg'
          )
        : setEpisodeImg(data.items[0].image);
      setEpisodeTitle(data.items[0].title);
      setEpisodeDetails(data.items[0].description);
      setEpisodeChannel(data.items[0].feedTitle);
      setEpisodeTime(data.items[0].datePublishedPretty);
      setEpisodeId(data.items[0].id);
      setEpisodeFeedId(data.items[0].feedId);
      setEpisodeUrl(data.items[0].enclosureUrl);
    }
  }, [data]);

  return (
    <Container
      xl
      css={{
        background: '#0F172B',
        height: 'auto',
      }}>
      <Grid.Container gap={4}>
        <Grid xs={12} lg={6} sm={6}>
          {isLoading ? (
            <Loading
              css={{
                ml: '7rem',
                mt: '1rem',
                '@lg': {
                  marginLeft: '19rem',
                },
              }}
              size='xl'
            />
          ) : (
            <Image
              css={{
                clipPath: 'inset(5% 6% 7% 7% round 40% 3px 40% 3px)',
                height: '285px',
                width: '528px',
                '@xs': {
                  width: '336px',
                },
                '@sm': {
                  width: '299px',
                },
                '@lg': {
                  height: '543px',
                  width: '528px',
                },
              }}
              src={episodeImg}
              alt='Default Image'
              objectFit='cover'
            />
          )}
        </Grid>
        <Grid
          xs={12}
          lg={6}
          sm={6}
          css={{ display: 'block !important', mt: 7 }}>
          <BadgeInfo
            channel={episodeChannel}
            time={episodeTime}
            path={episodeFeedId!}
          />
          <Text
            color='#fff'
            css={{
              mt: 13,
              width: '100%',
              textAlign: 'center',
              fontSize: '27px',
              letterSpacing: '1px',
              lineHeight: '1.2',
              '@lg': {
                fontSize: '46px',
                width: '78%',
                textAlign: 'left',
              },
            }}>
            {episodeTitle}
          </Text>
          <Text
            color='#d6d6d6'
            css={{
              mt: 23,
              width: '100%',
              textAlign: 'center',
              fontSize: '15px',
              lineHeight: '1.i5',
              '@lg': {
                fontSize: '18px',
                width: '78%',
                textAlign: 'left',
              },
            }}>
            {removeHtmlTag(episodeDetails)}
          </Text>
          <Spacer />
          <PlayButton
            id={episodeId}
            title={episodeTitle}
            image={episodeImg}
            feedTitle={episodeChannel}
            url={episodeUrl}
          />

          {/* <Button
            auto
            onClick={playepisodehandler}
            iconRight={<FontAwesomeIcon icon={faPlay} />}
            css={{
              background: '#FFD60A',
              color: '#0F172B',
              borderRadius: '3px',
              mx: 'auto',
              '@lg': {
                mx: 'unset',
              },
            }}>
            Play episode
          </Button> */}
        </Grid>
      </Grid.Container>
    </Container>
  );
};
