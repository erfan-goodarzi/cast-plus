import { Container, Grid, Loading, Text } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import { useGetCategories } from '../../api/podcasts/getCategories';

const Categories = () => {
  const { data, isLoading } = useGetCategories();
  const [categoryList, setCategoryList] = useState<any[][]>();
  const array1 = [
    { image: 'https://ivy.fm/img/i320/734423.jpgF' },
    { image: 'https://ivy.fm/img/i320/734423.jpgF' },
    { image: 'https://ivy.fm/img/i320/734423.jpgF' },
    { image: 'https://ivy.fm/img/i320/734423.jpgF' },
    { image: 'https://ivy.fm/img/i320/734423.jpgF' },
    { image: 'https://ivy.fm/img/i320/734423.jpgF' },
    { image: 'https://ivy.fm/img/i320/734423.jpgF' },
    { image: 'https://ivy.fm/img/i320/734423.jpgF' },
    { image: 'https://ivy.fm/img/i320/734423.jpgF' },
    { image: 'https://ivy.fm/img/i320/734423.jpgF' },
    { image: 'https://ivy.fm/img/i320/734423.jpgF' },
    { image: 'https://ivy.fm/img/i320/734423.jpgF' },
    { image: 'https://ivy.fm/img/i320/734423.jpgF' },
    { image: 'https://ivy.fm/img/i320/734423.jpgF' },
  ];
  useEffect(() => {
    if (data) {
      const zip = data.feeds.slice(100).map(function (e, i) {
        return [e, array1[i]];
      });
      setCategoryList(zip);
    }
  }, [data]);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        categoryList?.map((category) => (
          <Container key={category[0].id}>
            <Text color='#fff'>{category[0].name}</Text>
          </Container>
        ))
      )}
    </>
  );
};

export default Categories;
