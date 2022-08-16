import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Button,
  Card,
  Container,
  Grid,
  Image,
  Spacer,
  Text,
  Tooltip,
} from '@nextui-org/react';
import React from 'react';
import { getTopEpisode } from '../../api/podcasts/getTopEpisode';

const TopEpisode = () => {
  getTopEpisode();

  return (
    <Container
      xl
      css={{
        background: '#001D3D',
        height: 'auto',
      }}>
      <Grid.Container gap={4}>
        <Grid xs={6}>
          <Image
            css={{
              clipPath: 'inset(5% 6% 7% 7% round 40% 3px 40% 3px)',
            }}
            width={528}
            height={543}
            src='https://img.freepik.com/free-photo/close-up-portrait-happy-smiling-romantic-tender-african-american-woman-enjoying-listening-music-headphones-tilt-head-close-eyes-dreamy-grinning-delighted-blue-wall_1258-35460.jpg'
            alt='Default Image'
            objectFit='cover'
          />
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
            Stuff You Should Know | Jacqueline Novogratz | 30 min
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
            773: The Longest Distance Between Two Points
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
            The Supreme Court case that overturned Roe v. Wade began with a
            lawsuit filed by a Mississippi abortion clinic. On the day Roe was
            overturned, we were there. Stories from the center of this moment of
            history, the day it happened.
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
