import {
  Container,
  Grid,
  Image,
  Spacer,
  Text,
} from '@nextui-org/react';
import { useGetTopEpisode } from '../../api';
import { removeHtmlTag } from '../../utils';
import { BadgeInfo, Loader, PlayButton } from '../Ui';
import DefaultImg from '../../assets/default-img.jpg';

export const TopEpisode = () => {
  const { data, isLoading } = useGetTopEpisode();
  const topEpisode = data?.items[0];

  return topEpisode ? (
    <Container
      xl
      css={{
        background: '#0F172B',
        height: 'auto',
      }}>
      <Grid.Container gap={4}>
        <Grid xs={12} lg={6} sm={6}>
          {isLoading ? (
            <Loader size="xl" />
          ) : (
            <Image
              css={{
                clipPath: 'inset(5% 6% 7% 7% round 40% 3px 40% 3px)',
                height: '285px',
                width: '528px',
                '@xs': {
                  width: '336px',
                },
                '@sm': {
                  width: '299px',
                },
                '@lg': {
                  height: '543px',
                  width: '528px',
                },
              }}
              src={topEpisode.image || DefaultImg}
              alt='Default Image'
              objectFit='cover'
            />
          )}
        </Grid>
        <Grid
          xs={12}
          lg={6}
          sm={6}
          css={{ display: 'block !important', mt: 7 }}>
          <BadgeInfo
            channel={topEpisode.feedTitle}
            time={topEpisode.datePublishedPretty}
            path={topEpisode.feedId}
          />
          <Text
            color='#fff'
            css={{
              mt: 13,
              width: '100%',
              textAlign: 'center',
              fontSize: '27px',
              letterSpacing: '1px',
              lineHeight: '1.2',
              '@lg': {
                fontSize: '46px',
                width: '78%',
                textAlign: 'left',
              },
            }}>
            {topEpisode.title}
          </Text>
          <Text
            color='#d6d6d6'
            css={{
              mt: 23,
              width: '100%',
              textAlign: 'center',
              fontSize: '15px',
              lineHeight: '1.i5',
              '@lg': {
                fontSize: '18px',
                width: '78%',
                textAlign: 'left',
              },
            }}>
            {removeHtmlTag(topEpisode.description)}
          </Text>
          <Spacer />
          <PlayButton
            id={topEpisode.id}
            title={topEpisode.title}
            image={topEpisode.image || DefaultImg}
            feedTitle={topEpisode.feedTitle}
            url={topEpisode.enclosureUrl}
          />
        </Grid>
      </Grid.Container>
    </Container>
  ) : null;
};
