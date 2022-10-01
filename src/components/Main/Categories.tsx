import { Card, Text } from '@nextui-org/react';
import { CategoryItem } from '../Ui';

export const Categories = () => {
  return (
    <>
      <Text
        h2
        color='#fff'
        css={{
          '@lg': {
            fontSize: '29px',
            fontWeight: 'bold',
            margin: '4px 8px',
          },
        }}>
        All Categories
      </Text>
      <Card
        css={{
          zIndex: 1,
          background: '#fff',
          margin: '2rem 0',
          height: '66vh',
          overflowY: 'scroll',
          width: '85%',
        }}>
        <CategoryItem />
      </Card>
    </>
  );
};
