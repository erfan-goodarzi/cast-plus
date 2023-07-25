import { Navbar, Text } from '@nextui-org/react';

export const Brand = () => {
  return (
    <Navbar.Brand>
      <Text
        h1
        css={{
          'color': '#fff',
          'fontSize': 20,
          'padding': 4,
          '@lg': {
            marginLeft: '2rem',
            fontSize: 24,
          },
        }}
        weight="bold"
      >
        Cast
      </Text>
      <Text
        h1
        css={{
          'color': '#FFD60A',
          'fontSize': '19px',
          '@lg': {
            fontSize: 28,
          },
        }}
        weight="bold"
      >
        +
      </Text>
    </Navbar.Brand>
  );
};
