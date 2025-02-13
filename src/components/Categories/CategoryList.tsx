import { useGetCategories } from '@cast/api';
import type { IconList } from '@cast/design';
import { iconList, Loader } from '@cast/design';
import { FailureNotification } from '@cast/notification';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { SimpleColors } from '@nextui-org/react';
import { Badge, Card, Grid, simpleColors } from '@nextui-org/react';
import { useNavigate } from '@tanstack/react-location';
import type { PIApiCategory } from 'podcastindexjs/lib/types';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export const CategoryList = () => {
  const { data, isLoading, isError } = useGetCategories();
  const navigate = useNavigate();
  const [categoryList, setCategoryList] =
    useState<(IconList & PIApiCategory)[][]>();
  const [badgeColors, setBadgeColors] = useState<SimpleColors>();
  const isIpad = useMediaQuery({ query: '(min-width: 768px)' });

  useEffect(() => {
    if (data) {
      const zip = data.feeds.slice(0, 21).map((e, i) => {
        return [e, iconList[i]];
      });
      setCategoryList(zip);
    }

    const randomColor = Math.floor(Math.random() * simpleColors.length);
    setBadgeColors(simpleColors[randomColor]);
  }, [data]);

  if (isError) {
    FailureNotification();
    return null;
  }

  return (
    <Grid.Container>
      {isLoading ? (
        <Loader />
      ) : (
        categoryList?.map(category => (
          <Grid
            xs={isIpad ? 3 : 6}
            lg={4}
            key={category[0]!.id}
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '10px 15px',
            }}
          >
            <Card.Body
              css={{
                'textAlign': 'center',
                'transition': 'all 0.2s ease-in-out',
                'cursor': 'pointer',
                '&:hover': {
                  transition: 'all 0.2s ease-in-out',
                  background: '#fff',
                  cursor: 'pointer',
                  boxShadow: ' 7px 7px 14px 2px #a7a7a7',
                },
              }}
              onClick={() =>
                navigate({
                  to: '/categories',
                  hash: category[0]!.name.toLocaleLowerCase(),
                })
              }
            >
              <FontAwesomeIcon
                color="#2c2c2c"
                size="2x"
                icon={category[1]!.icon}
              />
              <Badge
                isSquared
                enableShadow
                color={badgeColors}
                disableOutline
                variant="flat"
                style={{ marginTop: '1rem', marginInline: 'auto' }}
              >
                {category[0]!.name}
              </Badge>
            </Card.Body>
          </Grid>
        ))
      )}
    </Grid.Container>
  );
};
