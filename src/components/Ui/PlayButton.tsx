import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@nextui-org/react';
import React from 'react';
import { PlayerInterface, Track } from 'react-material-music-player';

interface PlayButtonProps {
  id: number | undefined;
  image: string;
  title: string;
  feedTitle: string;
  url: string;
}

const PlayButton = ({ id, image, title, feedTitle, url }: PlayButtonProps) => {
  return (
    <>
      <Button
        bordered
        shadow
        onClick={() => {
          PlayerInterface.play([
            new Track(`${id}`, image, title, feedTitle, url),
          ]);
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

export default PlayButton;
