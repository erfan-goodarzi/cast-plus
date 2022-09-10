import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import '../../style/embla.css';
const EmblaCarousel = ({ slides }: { slides: number[] }) => {
  const [viewportRef] = useEmblaCarousel({
    slidesToScroll: 2,
    skipSnaps: false,
  });

  return (
    <div className='embla'>
      <div className='embla__viewport' ref={viewportRef}>
        <div className='embla__container'>
          {slides.map((index) => (
            <div className='embla__slide' key={index}>
              <div className='embla__slide__inner'>
                <img
                  className='embla__slide__img'
                  src='https://uploads.codesandbox.io/uploads/user/54daace3-bc87-43d9-a4d5-9e068e735798/qFfp-media-5.jpeg'
                  alt='A cool cat.'
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
