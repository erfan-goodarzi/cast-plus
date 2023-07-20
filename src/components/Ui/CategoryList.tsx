import {
  Badge,
  Card,
  Grid,
  Loading,
  SimpleColors,
  simpleColors,
} from '@nextui-org/react';
import { useNavigate } from '@tanstack/react-location';
import { useEffect, useState } from 'react';
import { useGetCategories } from '../../api';
import { IconList, iconList } from '../../Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PIApiCategory } from 'podcastindexjs/lib/types';

export const CategoryList = () => {
  const { data, isLoading } = useGetCategories();
  const navigate = useNavigate();
  const [categoryList, setCategoryList] =
    useState<(PIApiCategory & IconList)[][]>();
  const [badgeColors, setBadgeColors] = useState<SimpleColors>();

  useEffect(() => {
    if (data) {
      const zip = data.feeds.slice(0, 21).map(function (e, i) {
        return [e, iconList[i]];
      });
      setCategoryList(zip);
    }
    const randomColor = Math.floor(Math.random() * simpleColors.length);
    setBadgeColors(simpleColors[randomColor]);
  }, [data]);

  return (
    <Grid.Container>
      {isLoading ? (
        <Loading style={{ marginInline: 'auto', marginTop: '13rem' }} />
      ) : (
        categoryList?.map((category) => (
          <Grid
            xs={4}
            key={category[0].id}
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '15px 15px',
            }}>
            <Card.Body
              css={{
                textAlign: 'center',
                transition: 'all 0.2s ease-in-out',
                cursor: 'pointer',
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
                  hash: category[0].name,
                })
              }>
              <FontAwesomeIcon
                color='#2c2c2c'
                size='2x'
                icon={category[1].icon}
              />
              <Badge
                isSquared
                enableShadow
                color={badgeColors}
                disableOutline
                variant='flat'
                style={{ marginTop: '1rem', marginInline: 'auto' }}>
                {category[0].name}
              </Badge>
            </Card.Body>
          </Grid>
        ))
      )}
    </Grid.Container>
  );
};
