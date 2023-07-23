import '../../style/embla.css';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Grid, Text } from '@nextui-org/react';
import { Link } from '@tanstack/react-location';
import useEmblaCarousel from 'embla-carousel-react';
import type { PIApiFeed } from 'podcastindexjs/lib/types';
import { useCallback } from 'react';

import { defaultImg } from '../../Images';
import { Loader } from '../Ui';

interface Props {
  slides: PIApiFeed[];
  isLoad: boolean;
}

export const EmblaCarousel = ({ isLoad, slides }: Props) => {
  const [viewportRef, embla] = useEmblaCarousel({
    dragFree: true,
    containScroll: 'trimSnaps',
    loop: true,
  });

  const scrollNext = useCallback(() => embla?.scrollNext(), [embla]);

  return isLoad ? (
    <Loader />
  ) : (
    <div className="embla">
      <div className="embla__viewport" ref={viewportRef}>
        <div className="embla__container">
          {slides.map(
            (pod: {
              id: number;
              image: string;
              title: string;
              author: string;
            }) => (
              <div className="embla__slide" key={pod.id}>
                <div className="embla__slide__inner">
                  <Grid>
                    <Link to={pod.id}>
                      <img
                        alt={pod.title}
                        className="hovered-img"
                        style={{
                          borderRadius: '10px',
                          height: '150px',
                        }}
                        src={pod.image || defaultImg}
                      />
                      <Text css={{ fontSize: 16, fontWeight: 'bold', ml: 3 }}>
                        {pod.title.substring(0, 19)}
                      </Text>
                      <Text css={{ fontSize: 14, color: '#666', ml: 4 }}>
                        {pod.author}
                      </Text>
                    </Link>
                  </Grid>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
      <Button
        auto
        className="embla__button embla__button--next"
        icon={<FontAwesomeIcon icon={faArrowRight} />}
        onClick={scrollNext}
      />
    </div>
  );
};
