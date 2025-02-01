import { Card, Container, Text } from '@nextui-org/react';

import { CategoryList } from './CategoryList';

export const CategoriesCard = () => {
  return (
    <Container
      css={{ '@xs': { paddingInline: 0 }, '@sm': { paddingInline: 40 } }}
    >
      <Text
        h2
        color="#fff"
        css={{
          'fontSize': 23,
          'textAlign': 'center',
          '@lg': {
            textAlign: 'left',
            fontSize: '29px',
            fontWeight: 'bold',
            margin: '4px 8px',
          },
        }}
      >
        All Categories
      </Text>
      <Card
        css={{
          zIndex: 1,
          background: '#fff',
          margin: '3rem 0',
          height: '70vh',
          overflowY: 'scroll',
        }}
      >
        <CategoryList />
      </Card>
    </Container>
  );
};
