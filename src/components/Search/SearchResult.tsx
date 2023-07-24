import { defaultImg } from '@cast/img';
import { Card, Grid, Text } from '@nextui-org/react';
import { Link } from '@tanstack/react-location';
import type { PIApiFeed } from 'podcastindexjs/lib/types';

interface Props {
  isVisible: boolean;
  result: PIApiFeed[] | null;
  clearHandler: React.MouseEventHandler<HTMLDivElement>;
}

export const SearchResult = ({ isVisible, result, clearHandler }: Props) => {
  return (
    <Card
      css={{
        display: isVisible ? 'block' : 'none',
        position: 'absolute',
        height: '53vh',
        overflowY: 'scroll',
        mt: 20,
        width: '145%',
        borderRadius: 3,
      }}
    >
      {result?.map(({ title, ownerName, image, id }) => (
        <Link to={`/explore/${id}`} replace key={id}>
          <Card.Header
            onClick={clearHandler}
            css={{
              'border': '1px solid #ddd',
              'transition': 'all 0.3s ease-in-out',
              '&:hover': {
                boxShadow: '-1px 3px 16px 13px #ddd',
              },
            }}
          >
            <img
              alt={title}
              src={image || defaultImg}
              width="70px"
              height="70px"
            />
            <Grid.Container
              direction="column"
              css={{
                pl: 12,
              }}
            >
              <Grid xs={12}>
                <Text size="$lg">{title}</Text>
              </Grid>
              <Grid xs={12}>
                <Text css={{ color: '$accents8' }}>
                  Made By: {ownerName.substring(0, 30)}
                </Text>
              </Grid>
            </Grid.Container>
          </Card.Header>
        </Link>
      ))}
    </Card>
  );
};
