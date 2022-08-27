import create from 'zustand';

interface PlayerState {
  isEpisodePlay: boolean;
  enablePlayer: () => void;
}
export const useStore = create<PlayerState>((set) => ({
  isEpisodePlay: false,
  enablePlayer: () => set(() => ({ isEpisodePlay: true })),
}));
