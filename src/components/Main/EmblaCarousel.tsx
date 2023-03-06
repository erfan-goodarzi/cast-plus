import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import '../../style/embla.css';
import { Button, Grid, Loading, Text } from '@nextui-org/react';
import { PIApiFeed } from 'podcastindexjs/lib/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from '@tanstack/react-location';

export const EmblaCarousel = ({
  isLoad,
  slides,
}: {
  slides: PIApiFeed[];
  isLoad: boolean;
}) => {
  const [viewportRef, embla] = useEmblaCarousel({
    dragFree: true,
    containScroll: 'trimSnaps',
    loop: true,
  });

  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  return (
    <>
      {isLoad ? (
        <Loading css={{ ml: '12rem', mt: '3rem' }} size='xl' />
      ) : (
        <div className='embla'>
          <div className='embla__viewport' ref={viewportRef}>
            <div className='embla__container'>
              {slides.map(
                (pod: {
                  id: number;
                  image: string;
                  title: string;
                  author: string;
                }) => (
                  <div className='embla__slide' key={pod.id}>
                    <div className='embla__slide__inner'>
                      <Grid>
                        <Link to={pod.id}>
                          <img
                            className='hovered-img'
                            style={{
                              borderRadius: '10px',
                              height: '150px',
                            }}
                            src={pod.image}
                          />
                          <Text
                            css={{ fontSize: 16, fontWeight: 'bold', ml: 3 }}>
                            {pod.title.substring(0, 19)}
                          </Text>
                          <Text css={{ fontSize: 14, color: '#666', ml: 4 }}>
                            {pod.author}
                          </Text>
                        </Link>
                      </Grid>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
          <Button
            auto
            className='embla__button embla__button--next'
            icon={<FontAwesomeIcon icon={faArrowRight} />}
            onClick={scrollNext}></Button>
        </div>
      )}
    </>
  );
};
