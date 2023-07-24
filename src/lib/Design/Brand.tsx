import { Navbar, Text } from '@nextui-org/react';

export const Brand = () => {
  return (
    <Navbar.Brand>
      <Text
        h1
        size={24}
        css={{
          'color': '#fff',
          'marginLeft': '0rem',
          'padding': '3px 6px',
          '@lg': {
            marginLeft: '2rem',
          },
        }}
        weight="bold"
      >
        Cast
      </Text>
      <Text
        h1
        size={28}
        css={{
          color: '#FFD60A',
        }}
        weight="bold"
      >
        +
      </Text>
    </Navbar.Brand>
  );
};
