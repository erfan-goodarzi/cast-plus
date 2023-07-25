/* eslint-disable jsx-a11y/click-events-have-key-events */
import { BadgeInfo, PlayButton, ShareButton } from '@cast/design';
import { defaultImg } from '@cast/img';
import { removeHtmlTag } from '@cast/utils';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Button,
  Card,
  Grid,
  Image,
  Spacer,
  Text,
  Tooltip,
} from '@nextui-org/react';
import type {
  PIApiEpisodeInfo,
  PIApiRecentEpisode,
} from 'podcastindexjs/lib/types';
import { useState } from 'react';

interface Props {
  episodes: Pick<
    PIApiEpisodeInfo & PIApiRecentEpisode,
    | 'datePublishedPretty'
    | 'description'
    | 'enclosureUrl'
    | 'feedId'
    | 'id'
    | 'image'
    | 'title'
  >;
  feedTitle: string;
}

export const EpisodeDetail = ({ episodes, feedTitle }: Props) => {
  const {
    id,
    title,
    image,
    feedId,
    enclosureUrl,
    datePublishedPretty,
    description,
  } = episodes;

  const [showMore, setShowMore] = useState<boolean>(false);
  const episodeDesc = removeHtmlTag(description);
  return (
    <Grid xs={12}>
      <Card
        variant="bordered"
        css={{
          'mw': 'auto',
          'width': '100%',
          'borderRadius': '3px',
          'background': '#0000003b',
          'padding': '27px 20px',
          'borderColor': '#838383',
          'minWidth': '221%',
          'margin': '0rem -3rem',
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
        }}
      >
        <Grid.Container>
          <Grid
            xs={12}
            lg={2}
            css={{
              border: '1px solid #7c7c7c',
              padding: '17px 16px',
              borderRadius: 4,
            }}
          >
            <Image
              loading="lazy"
              css={{
                objectFit: 'cover',
                height: '219px',
                borderRadius: 3,
              }}
              src={image || defaultImg}
              alt={title}
              objectFit="cover"
            />
          </Grid>
          <Spacer x={2} />
          <Grid xs={12} lg={8} css={{ display: 'block !important' }}>
            <Text
              css={{
                'fontSize': '23px',
                'color': '#fff',
                'fontWeight': 'bold',
                'mx': 'auto',
                'textAlign': 'center',
                'mb': 9,
                '@lg': {
                  mx: 'unset',
                  textAlign: 'left',
                },
              }}
            >
              {title}
            </Text>
            <BadgeInfo
              path={feedId}
              channel={feedTitle}
              time={datePublishedPretty}
            />
            <Text
              color="#d6d6d6"
              css={{
                'mt': 23,
                'width': '101%',
                'textAlign': 'center',
                'fontSize': '17px',
                'lineHeight': '1.9',
                '@lg': {
                  textAlign: 'left',
                  width: '120%',
                },
              }}
            >
              {showMore ? episodeDesc : episodeDesc.substring(0, 300)}
              <span
                style={{ cursor: 'pointer' }}
                onClick={() => setShowMore(true)}
              >
                ...
              </span>
            </Text>
            <Grid.Container css={{ gap: 25, pt: 30 }} justify="flex-start">
              <Grid>
                <PlayButton
                  id={id}
                  image={image || defaultImg}
                  title={title}
                  feedTitle={feedTitle}
                  url={enclosureUrl}
                />
              </Grid>
              <Grid>
                <ShareButton podcastTitle={title} shareUrl={enclosureUrl} />
              </Grid>
              <Grid>
                <Tooltip content="Not implemented yet">
                  <Button
                    bordered
                    iconRight={<FontAwesomeIcon icon={faDownload} />}
                    css={{
                      color: '#fff',
                      borderColor: '#fff',
                      p: '2px 24px',
                      borderRadius: 3,
                    }}
                    auto
                  >
                    Download
                  </Button>
                </Tooltip>
              </Grid>
            </Grid.Container>
          </Grid>
        </Grid.Container>
      </Card>
    </Grid>
  );
};