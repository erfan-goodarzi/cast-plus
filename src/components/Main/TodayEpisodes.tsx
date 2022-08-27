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
import { removeHtmlTag } from '../../utils/removeHtmlTag';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faPlay, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { PlayerInterface, Track } from 'react-material-music-player';
import PlayButton from '../Ui/PlayButton';

const TodayEpisodes = () => {
  const [showMore, setShowMore] = useState<boolean>(false);

  const { data, isLoading } = useGetTopEpisode();
  return (
    <div>
      <Container
        xl
        css={{
          background: '#001D3D',
          height: 'auto',
        }}>
        <Grid.Container
          gap={8}
          css={{
            marginLeft: '-2rem',
            width: '100%',
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
                  minWidth: 'auto',
                  textAlign: 'unset',
                  fontSize: '18px',
                  width: '79%',
                },
              }}>
              More episodes podcast you must hear and share the experiences and
              learning that shaped
            </Text>
          </Grid>
          {isLoading ? (
            <Loading
              type='points'
              css={{ ml: '36rem', mt: '7rem' }}
              size='xl'
            />
          ) : (
            data?.items.map((episode) => (
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
                    minWidth: '221%',
                    margin: '0rem -3rem',
                    '@xs': {
                      minWidth: '130%',
                    },
                    '@sm': {
                      minWidth: '121%',
                    },
                    '@lg': {
                      minWidth: 'auto',
                      margin: '0',
                    },
                  }}>
                  <Grid.Container>
                    <Grid xs={12} lg={2}>
                      <Image
                        css={{
                          objectFit: 'cover',
                          height: '219px',
                        }}
                        src={
                          episode.image
                            ? episode.image
                            : 'https://img.freepik.com/free-photo/close-up-portrait-happy-smiling-romantic-tender-african-american-woman-enjoying-listening-music-headphones-tilt-head-close-eyes-dreamy-grinning-delighted-blue-wall_1258-35460.jpg'
                        }
                        alt='Default Image'
                        objectFit='cover'
                      />
                    </Grid>
                    <Spacer x={2} />
                    <Grid xs={12} lg={8} css={{ display: 'block !important' }}>
                      <Text
                        css={{
                          fontSize: '23px',
                          color: '#fff',
                          fontWeight: 'bold',
                          mx: 'auto',
                          textAlign: 'center',
                          mb: 9,
                          '@lg': {
                            mx: 'unset',
                            textAlign: 'left',
                          },
                        }}>
                        {episode.title}
                      </Text>
                      <BadgeInfo
                        channel={episode.feedTitle}
                        time={episode.datePublishedPretty}
                      />
                      <Text
                        color='#d6d6d6'
                        css={{
                          mt: 23,
                          width: '101%',
                          textAlign: 'center',
                          fontSize: '17px',
                          lineHeight: '1.5',
                          '@lg': {
                            textAlign: 'left',
                            width: '120%',
                          },
                        }}>
                        {showMore
                          ? episode.description
                          : `${removeHtmlTag(
                              episode.description.substring(0, 300)
                            )}`}{' '}
                        ...
                      </Text>
                      <Grid.Container
                        css={{
                          ml: '2rem',
                          '@xs': {
                            ml: '5rem',
                          },
                          '@sm': {
                            ml: '13rem !important',
                          },
                          '@lg': { ml: '0 !important' },
                        }}>
                        {/* <Button
                          bordered
                          shadow
                          onClick={() => {
                            Play(
                              episode.id,
                              episode.image,
                              episode.title,
                              episode.feedTitle,
                              episode.enclosureUrl
                            );
                          }}
                          iconRight={<FontAwesomeIcon icon={faPlay} />}
                          css={{
                            color: '#fff',
                            mt: 18,
                            mr: 29,
                            borderColor: '#fff',
                            borderRadius: 3,
                          }}
                          auto>
                          Play episode
                        </Button> */}
                        <PlayButton
                          id={episode.id}
                          image={episode.image}
                          title={episode.title}
                          feedTitle={episode.feedTitle}
                          url={episode.enclosureUrl}
                        />
                        <Button
                          bordered
                          iconRight={<FontAwesomeIcon icon={faShareAlt} />}
                          css={{
                            color: '#fff',
                            mt: 18,
                            mr: 29,
                            borderColor: '#fff',
                            borderRadius: 3,
                          }}
                          auto>
                          Share
                        </Button>
                        <Button
                          bordered
                          iconRight={<FontAwesomeIcon icon={faBell} />}
                          css={{
                            color: '#fff',
                            mt: 18,
                            mr: 29,
                            borderColor: '#fff',
                            borderRadius: 3,
                          }}
                          auto>
                          Subscribe
                        </Button>
                      </Grid.Container>
                    </Grid>
                  </Grid.Container>
                </Card>
              </Grid>
            ))
          )}
        </Grid.Container>
      </Container>
    </div>
  );
};

export default TodayEpisodes;
