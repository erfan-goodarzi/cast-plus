import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@nextui-org/react';
import { PlayerInterface, Track } from 'react-material-music-player';
import { useStore } from '../../store';
import { useLocalStorageState } from 'ahooks';
import { useEffect } from 'react';

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
  const [recentPlayedEpisodes, setRecentPlayedEpisodes] = useLocalStorageState<
    string[]
  >('recent-played-episodes', {
    defaultValue: [],
  });
  const enablePlayer = useStore((state) => state.enablePlayer);
  const recentPlayed = useStore((state) => state.setRecentPlayed);
  useEffect(() => {
    recentPlayed(recentPlayedEpisodes);
  }, [recentPlayedEpisodes]);

  return (
    <>
      <Button
        bordered
        shadow
        onClick={() => {
          PlayerInterface.play([
            new Track(`${id}`, image, title, feedTitle, url),
          ]);
          setRecentPlayedEpisodes([
            ...recentPlayedEpisodes,
            title,
            feedTitle,
            image,
          ]);
          enablePlayer();
        }}
        iconRight={<FontAwesomeIcon icon={faPlay} />}
        css={{
          color: '#fff',
          borderColor: '#fff',
          pr: 20,
          borderRadius: 3,
        }}
        auto>
        Play episode
      </Button>
    </>
  );
};
