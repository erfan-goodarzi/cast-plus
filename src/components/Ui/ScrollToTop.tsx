import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, keyframes } from '@nextui-org/react';
import { useDebounce } from 'ahooks';
import { useEffect, useState } from 'react';

const scaleUp = keyframes({
  '0%': { transform: 'translateY(0px)' },
  '25%': { transform: 'translateY(-2px)' },
  '85%': { transform: 'translateY(-7px)' },
  '100%': { transform: 'translateY(0px)' },
});

export const ScrollToTop = () => {
  const [showGoTop, setShowGoTop] = useState<boolean>(false);
  const debounce = useDebounce(showGoTop, { wait: 200 });

  const handleScroll = () => {
    window.pageYOffset > 3000 ? setShowGoTop(true) : setShowGoTop(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {debounce ? (
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
