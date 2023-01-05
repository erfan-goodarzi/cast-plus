import { Card, Container, Text } from '@nextui-org/react';
import { useStore } from '../../store/PlayerStore';

export const RecentPlayed = () => {
  const { recentPlayed } = useStore();
  return (
    <Container>
      <Card
        css={{
          background: 'transparent',
          zIndex: 1,
          overflowY: 'scroll',
          width: 'auto',
          height: 'auto',
          padding: '15px 25px',
        }}>
        <Text h3 weight='bold'>
          Keep listening
        </Text>
        <img
          style={{
            borderRadius: '10px',
            width: '149px',
            height: ' 149px',
          }}
          src={recentPlayed[2]}
        />
      </Card>
    </Container>
  );
};
