import { Text } from '@nextui-org/react';
import { useMatch } from '@tanstack/react-location';
import { useGetPodcastById } from '../api';

export const PodcastDetails = () => {
  const {
    params: { podcastId },
  } = useMatch();
  const { data } = useGetPodcastById(parseInt(podcastId));

  return <Text>id: {data?.feed.id}</Text>;
};
