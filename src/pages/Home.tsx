import Header from '../components/Header/Header';
import { TodayEpisodes, TopEpisode } from '../components/Main';

export const Home = () => {
  return (
    <>
      <Header />
      <TopEpisode />
      <TodayEpisodes />
    </>
  );
};
