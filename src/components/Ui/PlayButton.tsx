import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@nextui-org/react';
import { PlayerInterface, Track } from 'react-material-music-player';
import { useStore } from '../../store/PlayerStore';
import { useHistoryTravel, useLocalStorageState } from 'ahooks';
import { useEffect, useState } from 'react';

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
  const [recentEpisodePlayed, setRecentEpisodePlayed] = useLocalStorageState<
    string[]
  >('recent-episode-played', {
    defaultValue: [],
  });
  const enablePlayer = useStore((state) => state.enablePlayer);
  const recentPlayed = useStore((state) => state.setRecentPlayed);
  useEffect(() => {
    recentPlayed(recentEpisodePlayed);
  }, [recentEpisodePlayed]);

  return (
    <>
      <Button
        bordered
        shadow
        onClick={() => {
          PlayerInterface.play([
            new Track(`${id}`, image, title, feedTitle, url),
          ]);
          setRecentEpisodePlayed([...recentEpisodePlayed, title]);
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
