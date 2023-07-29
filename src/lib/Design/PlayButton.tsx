import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@nextui-org/react';
import { PlayerInterface, Track } from 'react-material-music-player';

import { useStore } from '../../store';

interface PlayButtonProps {
  id: number;
  image: string;
  title: string;
  feedTitle: string;
  url: string;
}

export const PlayButton = ({
  id,
  image,
  title,
  feedTitle,
  url,
}: PlayButtonProps) => {
  const enablePlayer = useStore(state => state.enablePlayer);

  return (
    <Button
      bordered
      shadow
      onPress={() => {
        PlayerInterface.play([
          new Track(`${id}`, image, title, feedTitle, url),
        ]);
        enablePlayer();
      }}
      iconRight={<FontAwesomeIcon icon={faPlay} />}
      css={{
        'color': '#fff',
        'borderColor': '#fff',
        'borderRadius': 3,
        'mx': 'auto',
        'width': '100%',
        '@lg': {
          px: 20,
          mx: 'unset',
          width: 'auto',
        },
      }}
      auto
    >
      Play episode
    </Button>
  );
};
