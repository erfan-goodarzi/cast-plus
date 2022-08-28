import { Card, Image, Row, Spacer, Text } from '@nextui-org/react';
import { Carousel } from '@trendyol-js/react-carousel';
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
          height: '32vh',
          width: '85%',
        }}>
        <Card.Body>
          <Carousel show={3.5} slide={1} transition={.5} swiping={true}>
            <Card.Body>
              <Image src='https://github.com/nextui-org/nextui/blob/next/apps/docs/public/nextui-banner.jpeg?raw=true' />
              <Text>Episode 1</Text>
            </Card.Body>
            <Card.Body>
              <Image src='https://github.com/nextui-org/nextui/blob/next/apps/docs/public/nextui-banner.jpeg?raw=true' />
              <Text>Episode 1</Text>
            </Card.Body>
            <Card.Body>
              <Image src='https://github.com/nextui-org/nextui/blob/next/apps/docs/public/nextui-banner.jpeg?raw=true' />
              <Text>Episode 1</Text>
            </Card.Body>
            <Card.Body>
              <Image src='https://github.com/nextui-org/nextui/blob/next/apps/docs/public/nextui-banner.jpeg?raw=true' />
              <Text>Episode 1</Text>
            </Card.Body>
            <Card.Body>
              <Image src='https://github.com/nextui-org/nextui/blob/next/apps/docs/public/nextui-banner.jpeg?raw=true' />
              <Text>Episode 1</Text>
            </Card.Body>
            <Card.Body>
              <Image src='https://github.com/nextui-org/nextui/blob/next/apps/docs/public/nextui-banner.jpeg?raw=true' />
              <Text>Episode 1</Text>
            </Card.Body>
            <Card.Body>
              <Image src='https://github.com/nextui-org/nextui/blob/next/apps/docs/public/nextui-banner.jpeg?raw=true' />
              <Text>Episode 1</Text>
            </Card.Body>
            <Card.Body>
              <Image src='https://github.com/nextui-org/nextui/blob/next/apps/docs/public/nextui-banner.jpeg?raw=true' />
              <Text>Episode 1</Text>
            </Card.Body>
          </Carousel>
        </Card.Body>
      </Card>
    </>
  );
};

export default TrendingPodcasts;
