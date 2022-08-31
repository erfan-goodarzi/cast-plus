import {
  faArrowLeft,
  faArrowRight,
  faPlay,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, Grid, Spacer, Text } from '@nextui-org/react';
import { Carousel } from '@trendyol-js/react-carousel';
import { useGetTopPodcasts } from '../../api/podcasts/getTopPodcasts';

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
      <Card
        css={{
          zIndex: 1,
          background: 'rgb(255 255 255 / 17%)',
          margin: '2rem 3.6rem',
          height: '34vh',
          width: '85%',
        }}>
        <Card.Body>
          <Carousel
            show={4.3}
            slide={1}
            transition={0.5}
            swiping={true}
            // leftArrow={<FontAwesomeIcon className='carousel-arrow' icon={faArrowLeft} />}
            // rightArrow={<FontAwesomeIcon className='carousel-arrow' icon={faArrowRight} />}
          >
            <Grid>
              <img
                style={{
                  borderRadius: '10px',
                  height: '150px',
                }}
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBQE5iCt2hGDxquedi8YlfBbomjlP84YaQzg&usqp=CAU'
              />
              <Text css={{ fontSize: 19, fontWeight: 'bold' }}>title</Text>
              <Text css={{ fontSize: 14, color: '#666' }}>Ali Bandari</Text>
            </Grid>
            <Grid>
              <img
                style={{
                  borderRadius: '10px',
                  height: '150px',
                }}
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBQE5iCt2hGDxquedi8YlfBbomjlP84YaQzg&usqp=CAU'
              />
              <Text css={{ fontSize: 19, fontWeight: 'bold' }}>title</Text>
              <Text css={{ fontSize: 14, color: '#666' }}>Ali Bandari</Text>
            </Grid>
          </Carousel>
        </Card.Body>
      </Card>
    </>
  );
};

export default TrendingPodcasts;
