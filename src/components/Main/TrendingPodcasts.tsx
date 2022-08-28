import { Card, Image, Row, Spacer, Text } from '@nextui-org/react';
import BackgroundImg from '../../assets/man-wearing-headphones.webp';
const TrendingPodcasts = () => {
  return (
    <>
      <Text
        h1
        color='#fff'
        css={{
          '@lg': {
            fontSize: '30px',
            margin: '-14px 68px',
          },
        }}>
        More Of What You Like
      </Text>
      <Spacer />
      <Text
        color='#fbfbfbbd'
        css={{
          '@lg': {
            fontSize: '19px',
            margin: '-14px 68px',
          },
        }}>
        A suggestion based on the most popular podcasts
      </Text>
      <Card
        css={{
          zIndex: 2,
          background: 'rgb(255 255 255 / 17%)',
          margin: '2rem 3.6rem',
          height: '26vh',
          width: '85%',
        }}>
        <Card.Body>
          <Text>Some Podcasts</Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default TrendingPodcasts;
