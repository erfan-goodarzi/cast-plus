import { Container, Spacer } from '@nextui-org/react';

import BackgroundImg from '../../Images/mic-min.jpg';
import { Nav } from '../Layout';
import { HeaderDetails } from './HeaderDetails';

export const Header = () => {
  return (
    <Container
      xl
      css={{
        'background': `linear-gradient(rgba(0, 29, 61 ,0.9), rgba(255, 214, 10, .5)), url(${BackgroundImg})`,
        'backgroundSize': 'auto',
        'backgroundPosition': 'center',
        'position': 'relative',
        'height': '80vh',
        'marginBottom': '1rem',
        '@lg': {
          height: '95vh',
        },
      }}
    >
      <Nav />
      <Spacer y={3} />
      <HeaderDetails />
    </Container>
  );
};
