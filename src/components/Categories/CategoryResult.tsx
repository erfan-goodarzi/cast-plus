import { useGetTopPodcasts } from '@cast/api';
import { Badge, Loader } from '@cast/design';
import { FailureNotification } from '@cast/notification';
import { Button, Card, Col, Grid, Row, Text } from '@nextui-org/react';
import { Link, useNavigate } from '@tanstack/react-location';
import type { PIApiCategory } from 'podcastindexjs/lib/types';
import { useMediaQuery } from 'react-responsive';

import DefaultImg from '../../Images/default-img.jpg';

interface Props {
  category: PIApiCategory;
}

export const CategoryResult = ({ category }: Props) => {
  const { data, isLoading, isError } = useGetTopPodcasts({
    cat: category.name,
    max: 30,
  });
  const navigate = useNavigate();
  const isTabletOrMobile = useMediaQuery({
    query: '(max-width: 768px)',
  });
  const isIpad = useMediaQuery({
    query: '(max-width: 1024px)',
  });

  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = DefaultImg;
  };

  if (isError) {
    FailureNotification();
    return null;
  }

  return (
    <>
      <Grid.Container css={{ gap: 12, mb: 20 }}>
        <Grid>
          <Text color="#fff" css={{ 'fontSize': 16, '@lg': { fontSize: 19 } }}>
            All Podcasts About :
          </Text>
        </Grid>
        <Grid>
          <Badge content={category.name} />
        </Grid>
      </Grid.Container>
      <Row wrap="wrap" css={{ gap: 40 }}>
        {isLoading ? (
          <Loader />
        ) : (
          data?.feeds.map(
            (pod: { id: number; image: string; title: string }) => (
              <Col span={isTabletOrMobile ? 12 : isIpad ? 5 : 2} key={pod.id}>
                <Link to={`/explore/${pod.id}`}>
                  <Card css={{ bg: 'none', borderRadius: '$xs' }}>
                    <Card.Body css={{ p: 0 }}>
                      <Card.Image
                        loading="lazy"
                        className="hovered-img"
                        onError={handleImgError}
                        css={{
                          'transition': 'all .2s ease-in-out',
                          'cursor': 'pointer',
                          '&:hover': {
                            transition: 'all .2s ease-in-out',
                            transform: 'scale(1.2)',
                          },
                        }}
                        src={pod.image}
                        objectFit="cover"
                        width="100%"
                        height="100%"
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
                      }}
                    >
                      <Row align="baseline">
                        <Col span={8}>
                          <Text
                            color="#fff"
                            weight="bold"
                            css={{ 'fontSize': 12, '@lg': { fontSize: 14 } }}
                          >
                            {pod.title.substring(0, 20)}
                          </Text>
                        </Col>
                        <Col span={4}>
                          <Row justify="flex-end">
                            <Button
                              onClick={() => {
                                navigate({ to: `/explore/${pod.id}` });
                              }}
                              size="sm"
                              auto
                              bordered
                              css={{
                                bg: '$primaryLight',
                                borderRadius: '$xs',
                              }}
                            >
                              <Text
                                css={{
                                  'letterSpacing': 0.4,
                                  'color': '$primary',
                                  'fontSize': 11,
                                  '@lg': { fontSize: 13 },
                                }}
                                weight="bold"
                                transform="uppercase"
                              >
                                Listen
                              </Text>
                            </Button>
                          </Row>
                        </Col>
                      </Row>
                    </Card.Footer>
                  </Card>
                </Link>
              </Col>
            ),
          )
        )}
      </Row>
    </>
  );
};
