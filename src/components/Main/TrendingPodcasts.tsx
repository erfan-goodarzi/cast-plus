import {
  faArrowLeft,
  faArrowRight,
  faPlay,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, Grid, Spacer, Text } from '@nextui-org/react';

import { useGetTopPodcasts } from '../../api/podcasts/getTopPodcasts';
import EmblaCarousel from './EmblaCarousel';

const SLIDE_COUNT = 6;
const slides = Array.from(Array(SLIDE_COUNT).keys());

const TrendingPodcasts = () => {
  const { data, isLoading } = useGetTopPodcasts();
  console.log(data);

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
      <EmblaCarousel slides={slides} />
      {/* <Card
        css={{
          zIndex: 1,
          background: 'rgb(255 255 255 / 17%)',
          margin: '2rem 3.6rem',
          height: '34vh',
          width: '85%',
        }}>
        <Card.Body>
        </Card.Body>
      </Card> */}
    </>
  );
};

export default TrendingPodcasts;
