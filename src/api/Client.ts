import { PodcastIndexClient } from 'podcastindexjs';

export const client = new PodcastIndexClient(
  import.meta.env['VITE_API_KEY'],
  import.meta.env['VITE_API_SECRET'],
);
