import { Container, Spacer } from '@nextui-org/react';

import BackgroundImg from '../../Images/mic-min.jpg';
import { Nav } from '../Layout';
import { HeaderDetails } from './HeaderDetails';

export const Header = () => {
  // const isTabletOrMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <Container
      xl
      css={{
        'background': `linear-gradient(rgba(0, 29, 61 ,0.9), rgba(255, 214, 10, .5)), url(${BackgroundImg})`,
        'backgroundSize': 'auto',
        'backgroundPosition': 'center',
        'position': 'relative',
        'height': '76vh',
        'marginBottom': '1rem',
        '@xs': {
          height: '73vh',
        },
        '@sm': {
          height: '53vh',
        },
        '@md': {
          height: '106vh',
        },
        '@lg': {
          height: '100vh',
        },
      }}
    >
      <Nav />
      <Spacer y={5} />
      <HeaderDetails />
    </Container>
  );
};
