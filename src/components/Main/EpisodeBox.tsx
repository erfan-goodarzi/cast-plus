import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Button,
  Card,
  Col,
  Grid,
  Image,
  Row,
  Spacer,
  Text,
} from '@nextui-org/react';
import { useState } from 'react';
import { removeHtmlTag } from '../../utils';
import { BadgeInfo, PlayButton, ShareButton } from '../Ui';

interface Props {
  id: number;
  title: string;
  image: string;
  feedTitle: string;
  datePublished: string;
  description: string;
  audioUrl: string;
}

export const EpisodeBox = ({
  id,
  title,
  image,
  feedTitle,
  datePublished,
  description,
  audioUrl,
}: Props) => {
  const [showMore, setShowMore] = useState<boolean>(false);

  return (
    <Grid xs={12} key={id}>
      <Card
        variant='bordered'
        css={{
          mw: 'auto',
          width: '100%',
          borderRadius: '3px',
          background: '#0000003b',
          padding: '27px 42px',
          borderColor: '#838383',
          minWidth: '221%',
          margin: '0rem -3rem',
          '@xs': {
            minWidth: '130%',
          },
          '@sm': {
            minWidth: '121%',
          },
          '@lg': {
            minWidth: 'auto',
            margin: '0',
          },
        }}>
        <Grid.Container>
          <Grid xs={12} lg={2}>
            <Image
              css={{
                objectFit: 'cover',
                height: '219px',
              }}
              src={
                image
                  ? image
                  : 'https://img.freepik.com/free-photo/close-up-portrait-happy-smiling-romantic-tender-african-american-woman-enjoying-listening-music-headphones-tilt-head-close-eyes-dreamy-grinning-delighted-blue-wall_1258-35460.jpg'
              }
              alt='Default Image'
              objectFit='cover'
            />
          </Grid>
          <Spacer x={2} />
          <Grid xs={12} lg={8} css={{ display: 'block !important' }}>
            <Text
              css={{
                fontSize: '23px',
                color: '#fff',
                fontWeight: 'bold',
                mx: 'auto',
                textAlign: 'center',
                mb: 9,
                '@lg': {
                  mx: 'unset',
                  textAlign: 'left',
                },
              }}>
              {title}
            </Text>
            <BadgeInfo channel={feedTitle} time={datePublished} />
            <Text
              color='#d6d6d6'
              css={{
                mt: 23,
                width: '101%',
                textAlign: 'center',
                fontSize: '17px',
                lineHeight: '1.5',
                '@lg': {
                  textAlign: 'left',
                  width: '120%',
                },
              }}>
              {showMore
                ? description
                : `${removeHtmlTag(description.substring(0, 300))}`}
              ...
            </Text>
            <Row css={{ gap: 20, pt: 20 }}>
              <Col span={2}>
                <PlayButton
                  id={id}
                  image={image}
                  title={title}
                  feedTitle={feedTitle}
                  url={audioUrl}
                />
              </Col>
              <Col span={2}>
                <ShareButton podcastTitle={title} shareUrl={audioUrl} />
              </Col>
              <Col span={12}>
                <Button
                  bordered
                  iconRight={<FontAwesomeIcon icon={faBell} />}
                  css={{
                    color: '#fff',
                    borderColor: '#fff',
                    borderRadius: 3,
                  }}
                  auto>
                  Subscribe
                </Button>
              </Col>
            </Row>
          </Grid>
        </Grid.Container>
      </Card>
    </Grid>
  );
};
