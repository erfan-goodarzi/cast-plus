import { useQuery } from 'react-query';
import { client } from '../Client';

export const geEpisodeById = (id: number) => {
  return client.episodesByFeedId(id, { max: 30 });
};

export const useGeEpisodeById = (id: number | undefined) => {
  return useQuery(['geEpisodeById', id], () => geEpisodeById(id!));
};
