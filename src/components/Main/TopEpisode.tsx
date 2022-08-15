import { Container, Grid, Image, Spacer } from '@nextui-org/react';
import React from 'react';

const TopEpisode = () => {
  return (
    <Container
      xl
      css={{
        background: '#14213d',
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
        <Grid xs={6}></Grid>
      </Grid.Container>
    </Container>
  );
};

export default TopEpisode;
