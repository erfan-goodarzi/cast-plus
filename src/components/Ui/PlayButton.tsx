import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@nextui-org/react';
import { PlayerInterface, Track } from 'react-material-music-player';
import { useStore } from '../../store/PlayerStore';

interface PlayButtonProps {
  id: number | undefined;
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
  const enablePlayer = useStore((state) => state.enablePlayer);
  return (
    <>
      <Button
        bordered
        shadow
        onClick={() => {
          PlayerInterface.play([
            new Track(`${id}`, image, title, feedTitle, url),
          ]);
          enablePlayer();
        }}
        iconRight={<FontAwesomeIcon icon={faPlay} />}
        css={{
          color: '#fff',
          mt: 18,
          mr: 29,
          borderColor: '#fff',
          borderRadius: 3,
        }}
        auto>
        Play episode
      </Button>
    </>
  );
};
