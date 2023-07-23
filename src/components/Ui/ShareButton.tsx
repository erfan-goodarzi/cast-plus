import { faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Popover, Row, Text } from '@nextui-org/react';
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  TumblrIcon,
  TumblrShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share';

interface ShareButtonProps {
  podcastTitle: string;
  shareUrl: string;
}

export const ShareButton = ({ podcastTitle, shareUrl }: ShareButtonProps) => {
  return (
    <Popover isBordered placement="top">
      <Popover.Trigger>
        <Button
          bordered
          iconRight={<FontAwesomeIcon icon={faShareAlt} />}
          css={{
            color: '#fff',
            borderColor: '#fff',
            p: '2px 24px',
            borderRadius: 3,
          }}
          auto
        >
          Share
        </Button>
      </Popover.Trigger>
      <Popover.Content css={{ p: '10px 21px', width: '20%' }}>
        <Text size="$lg">
          Share <span style={{ fontWeight: 900 }}>{podcastTitle}</span> Podcast
          With Your Friend
        </Text>
        <Row css={{ gap: 25, pt: 10 }}>
          {/* FIXME: this part should change later. it's a shit code.*/}
          <FacebookShareButton url={shareUrl} quote={`Title: ${podcastTitle}`}>
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <TwitterShareButton url={shareUrl} title={`Title: ${podcastTitle}`}>
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          <TelegramShareButton url={shareUrl} title={`Title: ${podcastTitle}`}>
            <TelegramIcon size={32} round />
          </TelegramShareButton>
          <WhatsappShareButton url={shareUrl} title={`Title: ${podcastTitle}`}>
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
          <LinkedinShareButton url={shareUrl} title={`Title: ${podcastTitle}`}>
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
          <TumblrShareButton url={shareUrl} title={`Title: ${podcastTitle}`}>
            <TumblrIcon size={32} round />
          </TumblrShareButton>
        </Row>
      </Popover.Content>
    </Popover>
  );
};
