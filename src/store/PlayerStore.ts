import create from 'zustand';

interface PlayerState {
  isEpisodePlay: boolean;
  enablePlayer: () => void;
  recentPlayed: string[];
  setRecentPlayed: (v: string[]) => void;
}
export const useStore = create<PlayerState>((set) => ({
  isEpisodePlay: false,
  enablePlayer: () => set(() => ({ isEpisodePlay: true })),
  recentPlayed: [],
  setRecentPlayed: (v) => set(() => ({ recentPlayed: v })),
}));
