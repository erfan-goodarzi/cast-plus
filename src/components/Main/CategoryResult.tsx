import {
  Badge,
  Button,
  Card,
  Col,
  Grid,
  Loading,
  Row,
  Text,
} from '@nextui-org/react';
import { PIApiCategory } from 'podcastindexjs/lib/types';
import { useGetTopPodcasts } from '../../api';

interface Props {
  category: PIApiCategory;
}

export const CategoryResult = ({ category }: Props) => {
  const { data, isLoading } = useGetTopPodcasts(category.name);

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
            {category.name}
          </Badge>
        </Grid>
      </Grid.Container>
      <Row wrap='wrap' css={{ gap: 40 }}>
        {isLoading ? (
          <Loading css={{ ml: 'auto' }} />
        ) : (
          data?.feeds.map(
            (pod: { id: number; image: string; title: string }) => (
              <Col span={2} key={pod.id}>
                <Card css={{ bg: 'none', borderRadius: '$xs' }}>
                  <Card.Body css={{ p: 0 }}>
                    <Card.Image
                      src={pod.image}
                      objectFit='cover'
                      width='100%'
                      height='100%'
                      alt={pod.title}
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
                          {pod.title}
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
            )
          )
        )}
      </Row>
    </>
  );
};
