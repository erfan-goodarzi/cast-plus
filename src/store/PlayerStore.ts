import { PIApiFeed } from 'podcastindexjs/lib/types';
import create from 'zustand';

interface PlayerState {
  isEpisodePlay: boolean;
  enablePlayer: () => void;
  searchResult: PIApiFeed[] | null;
  setSearchResult: (v: PIApiFeed[] | null) => void;
}

export const useStore = create<PlayerState>((set) => ({
  isEpisodePlay: false,
  enablePlayer: () => set(() => ({ isEpisodePlay: true })),
  searchResult: null,
  setSearchResult: (v) => set(() => ({ searchResult: v })),
}));
