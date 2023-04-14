import { Badge, Button, Card, Col, Grid, Row, Text } from '@nextui-org/react';
import { PIApiCategory } from 'podcastindexjs/lib/types';

interface Props {
  category: PIApiCategory;
}

export const CategoryResult = (category: Props) => {
  return (
    <>
      <Grid.Container css={{ gap: 12, mb: 20 }}>
        <Grid>
          <Text h4 color='#fff'>
            All Episodes About :
          </Text>
        </Grid>
        <Grid>
          <Badge
            css={{
              fontSize: 14,
              background: 'transparent',
              color: 'rgb(255 214 10)',
            }}
            isSquared
            variant='bordered'>
            {category.category.name}
          </Badge>
        </Grid>
      </Grid.Container>
      <Row css={{ gap: 40 }}>
        <Col span={4}>
          <Card css={{ bg: 'none', borderRadius: '$xs' }}>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                src='https://image.simplecastcdn.com/images/48d244e8-5815-45c1-9b60-b03aceaa2ad5/903d31c7-f87f-4198-9eaa-bc95274c6fdb/3000x3000/bx5480-moodys-talks-inside-economics-simplecastfinal.jpg?aid=rss_feed'
                objectFit='cover'
                width='100%'
                height='100%'
                alt='Relaxing app background'
              />
            </Card.Body>
            <Card.Footer
              isBlurred
              css={{
                borderRadius: 0,
                position: 'absolute',
                bgBlur: '#0f111466',
                borderTop: '$borderWeights$light solid $gray800',
                bottom: -2,
                zIndex: 1,
              }}>
              <Row align='baseline'>
                <Col span={8}>
                  <Text color='#fff' weight='bold' size={14}>
                    Breathing App
                  </Text>
                </Col>
                <Col span={4}>
                  <Row justify='flex-end'>
                    <Button
                      size='sm'
                      auto
                      bordered
                      css={{ bg: '$primaryLight', borderRadius: '$xs' }}>
                      <Text
                        css={{ color: 'inherit', letterSpacing: 0.4 }}
                        weight='bold'
                        size={13}
                        transform='uppercase'>
                        Listen
                      </Text>
                    </Button>
                  </Row>
                </Col>
              </Row>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </>
  );
};
