import {
  Badge,
  Card,
  Grid,
  Loading,
  SimpleColors,
  simpleColors,
} from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { useGetCategories } from '../../api';

export const CategoryItem = () => {
  const { data, isLoading } = useGetCategories();
  const [categoryList, setCategoryList] = useState<any[][]>();
  const [badgeColors, setBadgeColors] = useState<SimpleColors>();
  const categoryImages = [
    {
      image:
        'https://images.unsplash.com/photo-1580380853934-834251ec0e95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    },
    {
      image:
        'https://images.unsplash.com/photo-1606685544086-ce4ab1b91c21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    },
    {
      image:
        'https://images.unsplash.com/photo-1655720842809-0db94ab43f02?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=80',
    },
    {
      image:
        'https://images.unsplash.com/photo-1588544108061-3c44c505d45d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    },
    {
      image:
        'https://images.unsplash.com/photo-1600228390270-970186129936?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    },
    {
      image:
        'https://images.unsplash.com/photo-1585238342024-78d387f4a707?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    },
    {
      image:
        'https://images.unsplash.com/photo-1651718414829-3538916ba6ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=885&q=80',
    },
    {
      image:
        'https://images.unsplash.com/photo-1609869644293-6714a930d4f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=937&q=80',
    },
    {
      image:
        'https://images.unsplash.com/photo-1493119508027-2b584f234d6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    },
    {
      image:
        'https://images.unsplash.com/photo-1522648485144-849409408aee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    },
  ];

  useEffect(() => {
    if (data) {
      const zip = data.feeds.slice(0, 10).map(function (e, i) {
        return [e, categoryImages[i]];
      });
      setCategoryList(zip);
    }
    const randomColor = Math.floor(Math.random() * simpleColors.length);
    setBadgeColors(simpleColors[randomColor]);
  }, [data]);

  return (
    <>
      <Grid.Container>
        {isLoading ? (
          <Loading style={{ marginInline: 'auto', marginTop: '13rem' }} />
        ) : (
          categoryList?.map((category) => (
            <Grid
              xs={6}
              key={category[0].id}
              style={{ flexDirection: 'column', justifyContent: 'center' }}>
              <Card.Body style={{ textAlign: 'center' }}>
                <Card.Image
                  className='hovered-img'
                  width={154}
                  style={{ borderRadius: '9px' }}
                  src={category[1].image}
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
    </>
  );
};
