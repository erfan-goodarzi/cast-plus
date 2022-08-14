import { Container, Text } from '@nextui-org/react';
import React from 'react';

const HeaderDetails = () => {
  return (
    <Container>
      {' '}
      <Text
        h1
        color='#fff'
        css={{
          marginInline: 'auto',
          width: '53%',
          textAlign: 'center',
          fontSize: '56px',
        }}>
        Discover better insight every single day.
      </Text>
    </Container>
  );
};

export default HeaderDetails;
