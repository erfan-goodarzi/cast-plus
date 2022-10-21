import { Card, Container, Text } from '@nextui-org/react';

export const RecentPlayed = () => {
  return (
    <Container>
      <Card
        css={{
          zIndex: 1,
          background: '#fff',
          overflowY: 'scroll',
          width: 460,
          height: 201,
          padding: '15px 25px',
        }}>
        <Text h4 weight='bold'>
          Keep listening
        </Text>
      </Card>
    </Container>
  );
};
