import { PIApiFeed } from 'podcastindexjs/lib/types';
import create from 'zustand';

interface PlayerState {
  isEpisodePlay: boolean;
  enablePlayer: () => void;
  recentPlayed: string[];
  setRecentPlayed: (v: string[]) => void;
  searchResult: PIApiFeed[] | null;
  setSearchResult: (v: PIApiFeed[] | null) => void;
}

export const useStore = create<PlayerState>((set) => ({
  isEpisodePlay: false,
  enablePlayer: () => set(() => ({ isEpisodePlay: true })),
  recentPlayed: [],
  setRecentPlayed: (v) => set(() => ({ recentPlayed: v })),
  searchResult: null,
  setSearchResult: (v) => set(() => ({ searchResult: v })),
}));
