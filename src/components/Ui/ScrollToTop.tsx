import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, keyframes } from '@nextui-org/react';
import { useEffect, useState } from 'react';

const scaleUp = keyframes({
  '0%': { transform: 'translateY(0px)' },
  '25%': { transform: 'translateY(-2px)' },
  '85%': { transform: 'translateY(-7px)' },
  '100%': { transform: 'translateY(0px)' },
});

export const ScrollToTop = () => {
  const [showGoTop, setShowGoTop] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      window.pageYOffset > 3000 ? setShowGoTop(true) : setShowGoTop(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {showGoTop ? (
        <Button
          onClick={handleClick}
          css={{
            position: 'fixed',
            bottom: 20,
            right: 30,
            '&:hover': {
              animation: `${scaleUp} 600ms infinite`,
            },
          }}
          auto
          color='primary'
          icon={<FontAwesomeIcon icon={faAngleUp} />}
        />
      ) : null}
    </>
  );
};
